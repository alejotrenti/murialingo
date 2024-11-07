'use client';

import { TeamSection } from '@/components/about/team-section';
import { MissionSection } from '@/components/about/mission-section';
import { StatsSection } from '@/components/about/stats-section';
import { HeroSection } from '@/components/about/hero-section';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <StatsSection />
    </div>
  );
}