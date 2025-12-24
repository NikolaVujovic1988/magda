import React from 'react';
import KarriereHeader from '@/components/karriere/KarriereHeader';
import KarriereHero from '@/components/karriere/KarriereHero';
import JobDescription from '@/components/karriere/JobDescription';
import Requirements from '@/components/karriere/Requirements';
import Benefits from '@/components/karriere/Benefits';
import Company from '@/components/karriere/Company';
import Application from '@/components/karriere/Application';
import KarriereFooter from '@/components/karriere/KarriereFooter';

export default function KarrierePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <KarriereHeader />
      <KarriereHero />
      <JobDescription />
      <Requirements />
      <Benefits />
      <Company />
      <Application />
      <KarriereFooter />
    </div>
  );
}
