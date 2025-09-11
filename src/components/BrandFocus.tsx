import React from "react";
import { motion } from "framer-motion";
const BrandFocus = () => {
  return <section className="py-32 relative">
      {/* Minimal geometric accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-20 right-20 opacity-20" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 0.2
      }} transition={{
        duration: 1
      }}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M30 5 L50 30 L30 55 L10 30 Z" fill="hsl(var(--brand-blue))" />
          </svg>
        </motion.div>
        <motion.div className="absolute bottom-32 left-20 opacity-15" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 0.15
      }} transition={{
        duration: 1,
        delay: 0.3
      }}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="15" fill="hsl(var(--brand-green))" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
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
        }} className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mada leading-tight">
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
        }} className="grid md:grid-cols-3 gap-8 text-left">
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
          }} className="group cursor-pointer p-6 rounded-lg hover:bg-white/5 transition-all duration-300">
                <p className="text-lg font-effra leading-relaxed text-white/90 group-hover:text-white transition-colors">
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