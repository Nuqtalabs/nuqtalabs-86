import { Button } from "@/components/ui/button";

const BrandShowcase = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Typography & Color Showcase */}
        <section className="text-center space-y-6">
          <h1 className="font-mada font-bold text-4xl md:text-6xl uppercase tracking-wide">
            Brand System Ready
          </h1>
          <p className="font-effra text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
            Your comprehensive landing page design system is now active with all brand colors, typography, and component guidelines in place.
          </p>
        </section>

        {/* Color Palette Display */}
        <section className="space-y-8">
          <h2 className="font-mada font-bold text-2xl uppercase text-center">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* Blue - 70% dominance */}
            <div className="bg-brand-blue rounded-lg p-6 text-center">
              <div className="w-full h-16 bg-brand-blue rounded mb-3"></div>
              <h3 className="font-mada font-semibold text-white">Blue</h3>
              <p className="font-effra text-sm text-white/80">70% Dominance</p>
            </div>

            {/* Green - 80% dominance */}
            <div className="bg-brand-green rounded-lg p-6 text-center">
              <div className="w-full h-16 bg-brand-green rounded mb-3"></div>
              <h3 className="font-mada font-semibold text-white">Green</h3>
              <p className="font-effra text-sm text-white/80">80% Dominance</p>
            </div>

            {/* Pink - 20% accent */}
            <div className="bg-brand-pink rounded-lg p-6 text-center">
              <div className="w-full h-16 bg-brand-pink rounded mb-3"></div>
              <h3 className="font-mada font-semibold text-white">Pink</h3>
              <p className="font-effra text-sm text-white/80">20% Accent</p>
            </div>

            {/* Lavender - 10% tertiary */}
            <div className="bg-brand-lavender rounded-lg p-6 text-center">
              <div className="w-full h-16 bg-brand-lavender rounded mb-3"></div>
              <h3 className="font-mada font-semibold text-black">Lavender</h3>
              <p className="font-effra text-sm text-black/70">10% Tertiary</p>
            </div>

            {/* Orange - 10% tertiary */}
            <div className="bg-brand-orange rounded-lg p-6 text-center">
              <div className="w-full h-16 bg-brand-orange rounded mb-3"></div>
              <h3 className="font-mada font-semibold text-white">Orange</h3>
              <p className="font-effra text-sm text-white/80">10% Tertiary</p>
            </div>

            {/* Yellow - 10% tertiary */}
            <div className="bg-brand-yellow rounded-lg p-6 text-center">
              <div className="w-full h-16 bg-brand-yellow rounded mb-3"></div>
              <h3 className="font-mada font-semibold text-black">Yellow</h3>
              <p className="font-effra text-sm text-black/70">10% Tertiary</p>
            </div>
          </div>
        </section>

        {/* Button Variants Showcase */}
        <section className="space-y-8">
          <h2 className="font-mada font-bold text-2xl uppercase text-center">CTA Buttons</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Primary CTA (Pink → Orange)</Button>
            <Button variant="secondary">Secondary (Blue)</Button>
            <Button variant="accent">Accent (Green)</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link Style</Button>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large Hero</Button>
          </div>
        </section>

        {/* Geometric Shapes Demo */}
        <section className="space-y-8">
          <h2 className="font-mada font-bold text-2xl uppercase text-center">Brand Elements</h2>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {/* Star shape */}
            <div className="w-16 h-16 bg-brand-pink transform rotate-45 rounded-sm"></div>
            {/* Diamond */}
            <div className="w-12 h-12 bg-brand-yellow transform rotate-45"></div>
            {/* Capsule */}
            <div className="w-20 h-8 bg-brand-lavender rounded-full"></div>
            {/* Circle */}
            <div className="w-14 h-14 bg-brand-green rounded-full"></div>
            {/* Abstract form */}
            <div className="w-16 h-12 bg-brand-orange rounded-tl-full rounded-br-full"></div>
          </div>
        </section>

        <section className="text-center space-y-4">
          <p className="font-effra text-foreground/70">
            ✓ Black background default<br/>
            ✓ Mada font for headlines (bold, uppercase)<br/>
            ✓ Effra font for body text (modern, legible)<br/>
            ✓ Brand color palette with usage percentages<br/>
            ✓ Pill-style CTAs with hover animations<br/>
            ✓ Geometric brand elements<br/>
            ✓ Responsive design ready
          </p>
        </section>

      </div>
    </div>
  );
};

export default BrandShowcase;