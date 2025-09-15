import { Gravity, MatterBody } from "@/components/ui/gravity";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function WhatWeDo() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ y, opacity }}
      className="w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex flex-col relative bg-background"
      role="region"
      aria-labelledby="services-heading"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-foreground w-full text-center font-mada font-bold uppercase tracking-wide px-4"
      >
        <h2 id="services-heading">WHAT WE DO</h2>
        <p className="sr-only">Interactive services showcase - drag and explore our offerings</p>
      </motion.div>
      <div className="w-full flex-1" role="application" aria-label="Interactive services display">
        <Gravity 
          gravity={{ x: 0, y: 0.8 }} 
          className="w-full h-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px]"
          resetOnResize={true}
        >
          {/* Main category chips - better spaced */}
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.4, restitution: 0.3, density: 0.002 }}
            x="20%"
            y="8%"
          >
            <div 
              className="text-base sm:text-lg md:text-xl lg:text-2xl bg-brand-blue text-white rounded-full cursor-grab active:cursor-grabbing px-4 py-2 sm:px-5 sm:py-3 font-effra font-bold shadow-lg animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Brand Strategy and Identity services"
            >
              Brand Strategy & Identity
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.4, restitution: 0.3, density: 0.002 }}
            x="70%"
            y="5%"
            angle={8}
          >
            <div 
              className="text-base sm:text-lg md:text-xl lg:text-2xl bg-brand-green text-white rounded-full cursor-grab active:cursor-grabbing px-4 py-2 sm:px-5 sm:py-3 font-effra font-bold shadow-lg animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Campaigns and Rollouts services"
            >
              Campaigns & Rollouts
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.4, restitution: 0.3, density: 0.002 }}
            x="15%"
            y="25%"
            angle={-5}
          >
            <div 
              className="text-base sm:text-lg md:text-xl lg:text-2xl bg-brand-pink text-white rounded-full cursor-grab active:cursor-grabbing px-4 py-2 sm:px-5 sm:py-3 font-effra font-bold shadow-lg animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Content and Storytelling services"
            >
              Content & Storytelling
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.4, restitution: 0.3, density: 0.002 }}
            x="75%"
            y="22%"
            angle={12}
          >
            <div 
              className="text-base sm:text-lg md:text-xl lg:text-2xl bg-brand-orange text-white rounded-full cursor-grab active:cursor-grabbing px-4 py-2 sm:px-5 sm:py-3 font-effra font-bold shadow-lg animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Digital Experience and Presence services"
            >
              Digital Experience & Presence
            </div>
          </MatterBody>

          {/* Blue chips - Brand Strategy & Identity services */}
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.6, restitution: 0.25, density: 0.0015 }}
            x="8%"
            y="45%"
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-blue text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra font-medium shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Business naming services"
            >
              Business naming
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.7, restitution: 0.3, density: 0.001 }}
            x="40%"
            y="42%"
            angle={10}
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-blue text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Logo design and visual identity services"
            >
              Logo design & visual identity
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.8, restitution: 0.35, density: 0.0008 }}
            x="72%"
            y="48%"
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-blue text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Brand guidelines services"
            >
              Brand guidelines
            </div>
          </MatterBody>

          {/* Green chips - Campaigns & Rollouts services */}
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.6, restitution: 0.28, density: 0.0012 }}
            x="12%"
            y="65%"
            angle={-15}
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-green text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra font-medium shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Online and offline campaigns services"
            >
              Online/offline campaigns
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.8, restitution: 0.35, density: 0.0008 }}
            x="50%"
            y="68%"
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-green text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Product and service launches services"
            >
              Product/service launches
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.7, restitution: 0.32, density: 0.001 }}
            x="82%"
            y="62%"
            angle={20}
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-green text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Seasonal promotions services"
            >
              Seasonal promotions
            </div>
          </MatterBody>

          {/* Pink chips - Content & Storytelling services */}
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.7, restitution: 0.3, density: 0.001 }}
            x="18%"
            y="85%"
            angle={5}
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-pink text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Social media content planning services"
            >
              Social media content plan
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.6, restitution: 0.25, density: 0.0015 }}
            x="55%"
            y="88%"
            angle={-10}
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-pink text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra font-medium shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Copywriting and brand storytelling services"
            >
              Copywriting & storytelling
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.8, restitution: 0.35, density: 0.0008 }}
            x="85%"
            y="82%"
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-pink text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Content production services"
            >
              Content production
            </div>
          </MatterBody>

          {/* Orange chips - Digital Experience & Presence services */}
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.6, restitution: 0.28, density: 0.0012 }}
            x="5%"
            y="105%"
            angle={15}
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-orange text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra font-medium shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="UX/UI design and strategy services"
            >
              UX/UI design & strategy
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.7, restitution: 0.3, density: 0.001 }}
            x="38%"
            y="108%"
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-orange text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Website and landing page development services"
            >
              Website & landing pages
            </div>
          </MatterBody>
          
          <MatterBody
            isDraggable
            matterBodyOptions={{ friction: 0.8, restitution: 0.35, density: 0.0008 }}
            x="72%"
            y="102%"
            angle={-20}
          >
            <div 
              className="text-xs sm:text-sm md:text-base bg-brand-orange text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 sm:px-4 sm:py-2 font-effra shadow-md animate-fade-in hover:scale-105 transition-transform text-center"
              role="button"
              tabIndex={0}
              aria-label="Digital product and app design services"
            >
              Digital product & app design
            </div>
          </MatterBody>
        </Gravity>
      </div>
    </motion.section>
  );
}

export { WhatWeDo };