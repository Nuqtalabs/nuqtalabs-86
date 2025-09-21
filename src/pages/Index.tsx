import { Hero } from '@/components/ui/animated-hero';
import { NuqtaAbout } from '@/components/NuqtaAbout';
import { WhatWeDo } from '@/components/WhatWeDo';
import { BrandFocus } from '@/components/BrandFocus';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <div id="who-we-are">
          <NuqtaAbout />
        </div>
        <div id="what-we-do">
          <WhatWeDo />
        </div>
        <BrandFocus />
        <Footer />
      </main>
    </>
  );
};

export default Index;
