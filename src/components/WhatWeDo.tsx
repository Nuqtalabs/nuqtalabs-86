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
      className="w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex flex-col relative bg-background"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-foreground w-full text-center font-mada font-bold uppercase tracking-wide px-4"
      >
        WHAT WE DO
      </motion.div>
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
        {/* Main category chips - extra large size */}
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.4, restitution: 0.3, density: 0.002 }}
          x="15%"
          y="1%"
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-brand-blue text-white rounded-full cursor-grab active:cursor-grabbing px-6 py-3 font-effra font-bold shadow-lg animate-fade-in">
            Brand Strategy & Identity
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.4, restitution: 0.3, density: 0.002 }}
          x="65%"
          y="1%"
          angle={8}
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-brand-green text-white rounded-full cursor-grab active:cursor-grabbing px-6 py-3 font-effra font-bold shadow-lg animate-fade-in">
            Campaigns & Rollouts
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.4, restitution: 0.3, density: 0.002 }}
          x="20%"
          y="15%"
          angle={-5}
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-brand-pink text-white rounded-full cursor-grab active:cursor-grabbing px-6 py-3 font-effra font-bold shadow-lg animate-fade-in">
            Content & Storytelling
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.4, restitution: 0.3, density: 0.002 }}
          x="70%"
          y="15%"
          angle={12}
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-brand-orange text-white rounded-full cursor-grab active:cursor-grabbing px-6 py-3 font-effra font-bold shadow-lg animate-fade-in">
            Digital Experience & Presence
          </div>
        </MatterBody>

        {/* Blue chips - Brand Strategy & Identity services - varied sizes */}
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.6, restitution: 0.25, density: 0.0015 }}
          x="10%"
          y="30%"
        >
          <div className="text-sm sm:text-base md:text-lg bg-brand-blue text-white rounded-full cursor-grab active:cursor-grabbing px-4 py-2 font-effra font-medium shadow-md animate-fade-in">
            Business naming
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.7, restitution: 0.3, density: 0.001 }}
          x="35%"
          y="35%"
          angle={10}
        >
          <div className="text-xs sm:text-sm md:text-base bg-brand-blue text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 font-effra shadow-md animate-fade-in">
            Logo design & full visual identity
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.8, restitution: 0.35, density: 0.0008 }}
          x="65%"
          y="32%"
        >
          <div className="text-xs sm:text-sm md:text-base bg-brand-blue text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 font-effra shadow-md animate-fade-in">
            Brand guidelines
          </div>
        </MatterBody>

        {/* Green chips - Campaigns & Rollouts services - varied sizes */}
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.6, restitution: 0.28, density: 0.0012 }}
          x="15%"
          y="50%"
          angle={-15}
        >
          <div className="text-sm sm:text-base md:text-lg bg-brand-green text-white rounded-full cursor-grab active:cursor-grabbing px-4 py-2 font-effra font-medium shadow-md animate-fade-in">
            Online/offline campaigns
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.8, restitution: 0.35, density: 0.0008 }}
          x="50%"
          y="55%"
        >
          <div className="text-xs sm:text-sm md:text-base bg-brand-green text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 font-effra shadow-md animate-fade-in">
            Product/service launches
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.7, restitution: 0.32, density: 0.001 }}
          x="80%"
          y="45%"
          angle={20}
        >
          <div className="text-xs sm:text-sm md:text-base bg-brand-green text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 font-effra shadow-md animate-fade-in">
            Seasonal promotions
          </div>
        </MatterBody>

        {/* Pink chips - Content & Storytelling services - varied sizes */}
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.7, restitution: 0.3, density: 0.001 }}
          x="20%"
          y="70%"
          angle={5}
        >
          <div className="text-xs sm:text-sm md:text-base bg-brand-pink text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 font-effra shadow-md animate-fade-in">
            Social media content plan
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.6, restitution: 0.25, density: 0.0015 }}
          x="60%"
          y="75%"
          angle={-10}
        >
          <div className="text-sm sm:text-base md:text-lg bg-brand-pink text-white rounded-full cursor-grab active:cursor-grabbing px-4 py-2 font-effra font-medium shadow-md animate-fade-in">
            Copywriting & brand storytelling
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.8, restitution: 0.35, density: 0.0008 }}
          x="85%"
          y="65%"
        >
          <div className="text-xs sm:text-sm md:text-base bg-brand-pink text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 font-effra shadow-md animate-fade-in">
            Content production
          </div>
        </MatterBody>

        {/* Orange chips - Digital Experience & Presence services - varied sizes */}
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.6, restitution: 0.28, density: 0.0012 }}
          x="5%"
          y="85%"
          angle={15}
        >
          <div className="text-sm sm:text-base md:text-lg bg-brand-orange text-white rounded-full cursor-grab active:cursor-grabbing px-4 py-2 font-effra font-medium shadow-md animate-fade-in">
            UX/UI design & strategy
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.7, restitution: 0.3, density: 0.001 }}
          x="40%"
          y="90%"
        >
          <div className="text-xs sm:text-sm md:text-base bg-brand-orange text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 font-effra shadow-md animate-fade-in">
            Website & landing page development
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.8, restitution: 0.35, density: 0.0008 }}
          x="75%"
          y="80%"
          angle={-20}
        >
          <div className="text-xs sm:text-sm md:text-base bg-brand-orange text-white rounded-full cursor-grab active:cursor-grabbing px-3 py-1.5 font-effra shadow-md animate-fade-in">
            Digital product & app design
          </div>
        </MatterBody>
        <MatterBody
          isDraggable
          matterBodyOptions={{ friction: 0.6, restitution: 0.25, density: 0.0015 }}
          x="25%"
          y="105%"
          angle={8}
        >
          <div className="text-sm sm:text-base md:text-lg bg-brand-orange text-white rounded-full cursor-grab active:cursor-grabbing px-4 py-2 font-effra font-medium shadow-md animate-fade-in">
            Interactive prototypes
          </div>
        </MatterBody>
      </Gravity>
    </motion.section>
  );
}

export { WhatWeDo };