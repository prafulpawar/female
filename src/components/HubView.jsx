import React from 'react';
import HubHero from './hub/HubHero';
import TemplateComparison from './hub/TemplateComparison';
import ContentOverview from './hub/ContentOverview';
import HubFooter from './hub/HubFooter';

export default function HubView({ onSelectTemplate, onOpenDonate, onOpenCommandPalette }) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans antialiased">
      <HubHero 
        onSelectTemplate={onSelectTemplate} 
        onOpenDonate={onOpenDonate} 
        onOpenCommandPalette={onOpenCommandPalette}
      />
      <TemplateComparison onSelectTemplate={onSelectTemplate} />
      <ContentOverview onSelectTemplate={onSelectTemplate} />
      <HubFooter onSelectTemplate={onSelectTemplate} onOpenDonate={onOpenDonate} />
    </div>
  );
}
