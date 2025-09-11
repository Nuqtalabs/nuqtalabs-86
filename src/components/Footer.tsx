import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Subtle geometric background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-8 left-10 opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12 2 L18 12 L12 22 L6 12 Z"
              fill="hsl(var(--brand-lavender))"
            />
          </svg>
        </motion.div>
        <motion.div 
          className="absolute top-16 right-16 opacity-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8" fill="hsl(var(--brand-lavender))" />
          </svg>
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/3 opacity-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.12 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M8 1 L10 6 L15 6 L11 10 L13 15 L8 12 L3 15 L5 10 L1 6 L6 6 Z"
              fill="hsl(var(--brand-lavender))"
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 items-start mb-12">
          {/* Left Column - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-mada uppercase text-white tracking-wide">
              NUQTA LABS
            </h2>
            <p 
              className="text-lg font-effra italic leading-relaxed"
              style={{ color: "hsl(var(--brand-pink))" }}
            >
              where ideas begin, where brands grow.
            </p>
          </motion.div>

          {/* Center Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin 
                  size={20} 
                  className="mt-1 flex-shrink-0"
                  style={{ color: "hsl(var(--brand-green))" }}
                />
                <div className="font-effra text-white">
                  <p className="font-medium">Riyadh, Saudi Arabia</p>
                </div>
              </div>
              
              <motion.a
                href="tel:920015795"
                className="flex items-center gap-3 font-effra text-white hover:brightness-110 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone 
                  size={20} 
                  style={{ color: "hsl(var(--brand-green))" }}
                />
                <span>920015795</span>
              </motion.a>
              
              <motion.a
                href="mailto:info@nuqtalabs.com"
                className="flex items-center gap-3 font-effra text-white hover:brightness-110 transition-all duration-300"
                whileHover={{ x: 5, color: "hsl(var(--brand-yellow))" }}
              >
                <Mail 
                  size={20} 
                  style={{ color: "hsl(var(--brand-green))" }}
                />
                <span>info@nuqtalabs.com</span>
              </motion.a>
              
              <motion.a
                href="https://nuqtalabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-effra text-white hover:brightness-110 transition-all duration-300"
                whileHover={{ x: 5, color: "hsl(var(--brand-yellow))" }}
              >
                <Globe 
                  size={20} 
                  style={{ color: "hsl(var(--brand-green))" }}
                />
                <span>nuqtalabs.com</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-end space-y-6"
          >
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/nuqtalabs?igsh=a2Jkdnp0aHgzNTVh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Nuqta Labs on Instagram"
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                style={{ 
                  borderColor: "hsl(var(--brand-pink))",
                  color: "hsl(var(--brand-pink))"
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "hsl(var(--brand-orange))",
                  borderColor: "hsl(var(--brand-orange))",
                  color: "white"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/company/nuqtalabs/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Nuqta Labs on LinkedIn"
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                style={{ 
                  borderColor: "hsl(var(--brand-pink))",
                  color: "hsl(var(--brand-pink))"
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "hsl(var(--brand-orange))",
                  borderColor: "hsl(var(--brand-orange))",
                  color: "white"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 mb-12">
          {/* Brand - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h2 className="text-2xl font-bold font-mada uppercase text-white tracking-wide">
              NUQTA LABS
            </h2>
            <p 
              className="text-base font-effra italic"
              style={{ color: "hsl(var(--brand-pink))" }}
            >
              where ideas begin, where brands grow.
            </p>
          </motion.div>

          {/* Contact Info - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3 justify-center">
              <MapPin 
                size={18} 
                className="mt-1 flex-shrink-0"
                style={{ color: "hsl(var(--brand-green))" }}
              />
              <div className="font-effra text-white text-center">
                <p className="font-medium">Riyadh, Saudi Arabia</p>
              </div>
            </div>
            
            <motion.a
              href="tel:920015795"
              className="flex items-center gap-3 font-effra text-white hover:brightness-110 transition-all duration-300 justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Phone 
                size={18} 
                style={{ color: "hsl(var(--brand-green))" }}
              />
              <span>920015795</span>
            </motion.a>
            
            <motion.a
              href="mailto:info@nuqtalabs.com"
              className="flex items-center gap-3 font-effra text-white hover:brightness-110 transition-all duration-300 justify-center"
              whileHover={{ scale: 1.05, color: "hsl(var(--brand-yellow))" }}
            >
              <Mail 
                size={18} 
                style={{ color: "hsl(var(--brand-green))" }}
              />
              <span>info@nuqtalabs.com</span>
            </motion.a>
            
            <motion.a
              href="https://nuqtalabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-effra text-white hover:brightness-110 transition-all duration-300 justify-center"
              whileHover={{ scale: 1.05, color: "hsl(var(--brand-yellow))" }}
            >
              <Globe 
                size={18} 
                style={{ color: "hsl(var(--brand-green))" }}
              />
              <span>nuqtalabs.com</span>
            </motion.a>
          </motion.div>

          {/* Social Icons - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="https://www.instagram.com/nuqtalabs?igsh=a2Jkdnp0aHgzNTVh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Nuqta Labs on Instagram"
              className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
              style={{ 
                borderColor: "hsl(var(--brand-pink))",
                color: "hsl(var(--brand-pink))"
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "hsl(var(--brand-orange))",
                borderColor: "hsl(var(--brand-orange))",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={18} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/company/nuqtalabs/about/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Nuqta Labs on LinkedIn"
              className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
              style={{ 
                borderColor: "hsl(var(--brand-pink))",
                color: "hsl(var(--brand-pink))"
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "hsl(var(--brand-orange))",
                borderColor: "hsl(var(--brand-orange))",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div 
          className="w-full h-px mb-8"
          style={{ backgroundColor: "hsl(var(--brand-green))" }}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-white/60 font-effra text-sm">
            © 2025 Nuqta Labs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };