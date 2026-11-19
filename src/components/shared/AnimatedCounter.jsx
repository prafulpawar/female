import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ 
  value,
  end, 
  duration = 1800, 
  prefix = '', 
  suffix = '',
  className = ''
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const rawTarget = value !== undefined ? value : (end !== undefined ? end : 100);

  // Parse numeric part from string if needed (e.g., "1,750+" -> 1750)
  const numericTarget = typeof rawTarget === 'number' 
    ? rawTarget 
    : parseInt(String(rawTarget).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    // Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, numericTarget]);

  const startAnimation = () => {
    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(easedProgress * numericTarget);
      
      setDisplayValue(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(numericTarget);
      }
    };
    requestAnimationFrame(step);
  };

  const formattedDisplay = displayValue.toLocaleString();

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}{formattedDisplay}{suffix}
    </span>
  );
}
