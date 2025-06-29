'use client';

import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TechnologiesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </div>
  );
}
