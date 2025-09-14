import React from "react";
import { motion } from "framer-motion";
const BrandFocus = () => {
  return <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative">
      {/* Minimal geometric accents - responsive */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-8 sm:top-12 md:top-20 right-4 sm:right-8 md:right-20 opacity-20" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 0.2
      }} transition={{
        duration: 1
      }}>
          <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-15 md:h-15" viewBox="0 0 60 60">
            <path d="M30 5 L50 30 L30 55 L10 30 Z" fill="hsl(var(--brand-blue))" />
          </svg>
        </motion.div>
        <motion.div className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-4 sm:left-8 md:left-20 opacity-15" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 0.15
      }} transition={{
        duration: 1,
        delay: 0.3
      }}>
          <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="15" fill="hsl(var(--brand-green))" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 md:space-y-16">
          {/* Title */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="space-y-2 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold font-mada leading-tight">
              <motion.span className="block text-white" style={{
              color: "hsl(var(--brand-blue))"
            }} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2,
              duration: 0.6
            }}>
                YOUR BRAND,
              </motion.span>
              <motion.span style={{
              color: "hsl(var(--brand-pink))"
            }} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }} className="block text-white">
                OUR FOCUS
              </motion.span>
            </h1>
          </motion.div>

          {/* Content points */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-left">
            {[{
            title: "Strategic & creative:",
            content: "We think first, design with purpose."
          }, {
            title: "Culturally fluent & globally sharp:",
            content: "Rooted here, relevant anywhere."
          }, {
            title: "Built to last & ready to grow:",
            content: "Brands that stay strong and keep moving."
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8 + index * 0.1,
            duration: 0.6
           }} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }} className="group cursor-pointer p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white/5 transition-all duration-300">
                <p className="text-sm sm:text-base md:text-lg font-effra leading-relaxed text-white/90 group-hover:text-white transition-colors">
                  <strong className="group-hover:brightness-110 transition-all duration-300" style={{
                color: "hsl(var(--brand-green))"
              }}>
                    {item.title}
                  </strong>{" "}
                  {item.content}
                </p>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export { BrandFocus };