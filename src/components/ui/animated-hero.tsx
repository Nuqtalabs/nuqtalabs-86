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
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-6 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-7xl tracking-tighter text-center font-mada font-bold mx-auto">
              <span className="text-foreground uppercase block mb-2">Are you a</span>
              <span className="relative flex w-full justify-center text-center md:pb-4 md:pt-1 min-w-fit h-16 md:h-20 overflow-visible">
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
              }} className="absolute font-bold text-brand-green uppercase whitespace-nowrap">
                    {title}
                  </motion.span>)}
              </span>
            </h1>

            <div className="text-center space-y-2 max-w-2xl">
              <p className="text-xl md:text-2xl font-effra text-foreground/70">
                This is your starting Nuqta.
              </p>
              <p className="text-2xl md:text-3xl font-mada font-semibold text-slate-50">
                Nuqta Labs
              </p>
              <p className="text-lg md:text-xl font-effra italic text-brand-green/80">
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
      
      {/* Brand geometric shapes as decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-brand-yellow transform rotate-45 opacity-20"></div>
        <div className="absolute top-40 right-20 w-12 h-6 bg-brand-lavender rounded-full opacity-15"></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-brand-green rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-16 h-8 bg-brand-orange rounded-tl-full rounded-br-full opacity-15"></div>
      </div>
    </div>;
}
export { Hero };