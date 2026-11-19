import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function RatingStars({
  rating = 5,
  maxStars = 5,
  size = 'md', // 'sm' | 'md' | 'lg'
  isInteractive = false,
  onRate,
  showCount = false,
  reviewsCount
}) {
  const [hoverRating, setHoverRating] = useState(0);

  const starSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const currentSize = starSizes[size] || starSizes.md;

  return (
    <div className="inline-flex items-center gap-1.5" role={isInteractive ? "radiogroup" : undefined}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, i) => {
          const starValue = i + 1;
          const isFilled = hoverRating > 0 ? starValue <= hoverRating : starValue <= rating;

          return (
            <button
              key={starValue}
              type={isInteractive ? "button" : undefined}
              disabled={!isInteractive}
              onClick={() => isInteractive && onRate?.(starValue)}
              onMouseEnter={() => isInteractive && setHoverRating(starValue)}
              onMouseLeave={() => isInteractive && setHoverRating(0)}
              className={`${
                isInteractive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'
              } p-0.5 text-[#D48B28] focus:outline-none`}
              aria-label={`${starValue} of ${maxStars} stars`}
            >
              <Star
                className={`${currentSize} ${
                  isFilled ? 'fill-[#D48B28] text-[#D48B28]' : 'text-stone-300'
                } transition-colors`}
              />
            </button>
          );
        })}
      </div>

      {showCount && (
        <span className="text-xs text-stone-500 font-medium ml-1">
          {rating.toFixed(1)} {reviewsCount ? `(${reviewsCount} verified reviews)` : ''}
        </span>
      )}
    </div>
  );
}
