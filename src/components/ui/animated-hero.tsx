import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["BUSINESS?", "FOUNDER?", "BRAND?", "ENTREPRENEUR?"], []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  return <div className="relative w-full min-h-screen bg-background overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 sm:gap-6 md:gap-8 py-16 sm:py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 sm:gap-6 flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-7xl tracking-tighter text-center font-mada font-bold mx-auto">
              <span className="text-foreground uppercase block mb-1 sm:mb-2">Are you a</span>
              <span className="relative flex w-full justify-center text-center md:pb-4 md:pt-1 min-w-fit h-12 sm:h-14 md:h-16 lg:h-20 overflow-visible">
                &nbsp;
                {titles.map((title, index) => <motion.span key={index} initial={{
                opacity: 0,
                y: -100
              }} transition={{
                type: "spring",
                stiffness: 50
              }} animate={titleNumber === index ? {
                y: 0,
                opacity: 1
              } : {
                y: titleNumber > index ? -150 : 150,
                opacity: 0
              }} className="absolute font-bold text-brand-green uppercase text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {title}
                  </motion.span>)}
              </span>
            </h1>

            <div className="text-center space-y-1 sm:space-y-2 max-w-2xl px-2 sm:px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-effra text-foreground/70">
                This is your starting Nuqta.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mada font-semibold text-slate-50">
                Nuqta Labs
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-effra italic text-brand-green/80">
                where ideas begin, where brands grow.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="#contact-us">
              <Button size="lg" className="font-effra font-medium">
                Let's Make It Real
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Brand geometric shapes as decorative elements - responsive positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-brand-yellow transform rotate-45 opacity-20"></div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-8 sm:w-10 md:w-12 h-3 sm:h-4 md:h-6 bg-brand-lavender rounded-full opacity-15"></div>
        <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-20 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-brand-green rounded-full opacity-10"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-10 sm:w-12 md:w-16 h-4 sm:h-6 md:h-8 bg-brand-orange rounded-tl-full rounded-br-full opacity-15"></div>
      </div>
    </div>;
}
export { Hero };