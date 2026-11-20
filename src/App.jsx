import React, { useState, useEffect, lazy, Suspense } from 'react';
import HubView from './components/HubView';
import TemplateSwitcher from './components/shared/TemplateSwitcher';
import EventDetailModal from './components/shared/EventDetailModal';
import ApplyModal from './components/shared/ApplyModal';
import DonateModal from './components/shared/DonateModal';
import BlogPostModal from './components/shared/BlogPostModal';
import { ToastProvider } from './components/shared/ToastContext';
import CommandPalette from './components/shared/CommandPalette';
import CookieConsent from './components/shared/CookieConsent';
import CommunityChatWidget from './components/shared/CommunityChatWidget';

// Code-split templates for optimal load performance
const Template1View = lazy(() => import('./components/Template1View'));
const Template2View = lazy(() => import('./components/Template2View'));
const Template3View = lazy(() => import('./components/Template3View'));

function TemplateFallback() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col items-center justify-center p-8 space-y-4 font-dm">
      <div className="w-10 h-10 rounded-full border-3 border-stone-200 border-t-[#D48B28] animate-spin" />
      <p className="font-quando italic text-sm text-stone-600">Loading authentic website preview...</p>
    </div>
  );
}

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState('t3'); // 't1' | 't2' | 't3' | 'hub'
  const [activePage, setActivePage] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Switch template with optional target page
  const handleSelectTemplate = (templateId, page = 'home') => {
    setActiveTemplate(templateId);
    let targetPage = page;
    if (page.includes('program')) targetPage = 'programs';
    else if (page.includes('event')) targetPage = 'events';
    else if (page.includes('about')) targetPage = 'about';
    else if (page.includes('team')) targetPage = 'team';
    else if (page.includes('research')) targetPage = 'research';
    else if (page.includes('blog')) targetPage = 'blog';
    else if (page.includes('donate')) targetPage = 'donate';
    else if (page.includes('vacanc') || page.includes('career')) targetPage = 'vacancies';
    else if (page.includes('contact')) targetPage = 'contact';
    else if (page.includes('login') || page.includes('auth') || page.includes('portal')) targetPage = 'login';
    else targetPage = 'home';

    setActivePage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update document title dynamically based on active view
  useEffect(() => {
    if (activeTemplate === 'hub') {
      document.title = "Future Black Female | Executive Review Hub";
    } else if (activeTemplate === 't1') {
      document.title = "Future Black Female | Authentic Brand Original (Concept 1)";
    } else if (activeTemplate === 't2') {
      document.title = "Future Black Female | Modern Civic Institution (Concept 2)";
    } else if (activeTemplate === 't3') {
      document.title = "Future Black Female | Warm Editorial & Feminine Modern (Concept 3)";
    }
  }, [activeTemplate]);

  // Global Ctrl+K / Cmd+K Command Palette trigger
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-[#FAF8F5] text-stone-900 font-dm antialiased selection:bg-amber-100 selection:text-stone-900">
        
        {/* Active View Render */}
        <Suspense fallback={<TemplateFallback />}>
          {activeTemplate === 'hub' && (
            <HubView 
              onSelectTemplate={handleSelectTemplate} 
              onOpenDonate={() => setIsDonateOpen(true)}
              onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            />
          )}

          {activeTemplate === 't1' && (
            <Template1View
              key={`t1-${activePage}`}
              initialPage={activePage}
              onOpenDonate={() => setIsDonateOpen(true)}
              onSelectEvent={(evt) => setSelectedEvent(evt)}
              onApplyVacancy={(vac) => setSelectedVacancy(vac)}
              onSelectPost={(post) => setSelectedPost(post)}
              onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            />
          )}

          {activeTemplate === 't2' && (
            <Template2View
              key={`t2-${activePage}`}
              initialPage={activePage}
              onOpenDonate={() => setIsDonateOpen(true)}
              onSelectEvent={(evt) => setSelectedEvent(evt)}
              onApplyVacancy={(vac) => setSelectedVacancy(vac)}
              onSelectPost={(post) => setSelectedPost(post)}
              onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            />
          )}

          {activeTemplate === 't3' && (
            <Template3View
              key={`t3-${activePage}`}
              initialPage={activePage}
              onOpenDonate={() => setIsDonateOpen(true)}
              onSelectEvent={(evt) => setSelectedEvent(evt)}
              onApplyVacancy={(vac) => setSelectedVacancy(vac)}
              onSelectPost={(post) => setSelectedPost(post)}
              onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            />
          )}
        </Suspense>

        {/* Floating Global Review Switcher Toolbar */}
        <TemplateSwitcher
          activeTemplate={activeTemplate}
          setActiveTemplate={handleSelectTemplate}
          onOpenDonate={() => setIsDonateOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Global Command Palette (Ctrl+K) */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onNavigate={(page) => handleSelectTemplate(activeTemplate === 'hub' ? 't1' : activeTemplate, page)}
          onSelectTemplate={(tId) => handleSelectTemplate(tId, 'home')}
          onOpenDonate={() => setIsDonateOpen(true)}
        />

        {/* Community Chat Widget */}
        <CommunityChatWidget
          onNavigate={(page) => handleSelectTemplate(activeTemplate === 'hub' ? 't1' : activeTemplate, page)}
          onOpenDonate={() => setIsDonateOpen(true)}
        />

        {/* Canadian Privacy Cookie Consent Banner */}
        <CookieConsent />

        {/* Shared Modals */}
        {selectedEvent && (
          <EventDetailModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}

        {selectedVacancy && (
          <ApplyModal
            vacancy={selectedVacancy}
            onClose={() => setSelectedVacancy(null)}
          />
        )}

        {selectedPost && (
          <BlogPostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}

        <DonateModal
          isOpen={isDonateOpen}
          onClose={() => setIsDonateOpen(false)}
        />

      </div>
    </ToastProvider>
  );
}
