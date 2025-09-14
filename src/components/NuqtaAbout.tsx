import { MagicText } from "@/components/ui/magic-text"

const NuqtaAbout = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          {/* Blue text - center aligned */}
          <div className="text-brand-blue text-center">
            <MagicText text="We are Nuqta Labs" />
          </div>
          
          {/* White text - left aligned */}
          <div className="text-white text-sm sm:text-base md:text-lg font-effra leading-relaxed text-left px-2 sm:px-0">
            <MagicText text="We turn ideas into brands built to grow. We work where strategy meets creativity, shaping identities that stand out. We know the culture you're part of and the markets you want to reach. We give brands clarity, tools, and momentum to move forward with confidence." />
          </div>
          
          {/* Green text - center aligned */}
          <div className="text-brand-green text-center">
            <MagicText text="Your brand has potential." />
          </div>
          
          {/* Pink text - center aligned */}
          <div className="text-brand-pink text-center">
            <MagicText text="We make sure the world sees it." />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <p className="text-muted-foreground animate-bounce">Scroll Down</p>
      </div>
    </section>
  )
}

export { NuqtaAbout }