import React from "react";
import { motion } from "framer-motion";

export const DiamondStack = ({ className = "", ...props }) => (
  <motion.svg 
    width="120" 
    height="200" 
    viewBox="0 0 120 200" 
    fill="none" 
    className={className}
    {...props}
  >
    <motion.path
      d="M60 10 L90 40 L60 70 L30 40 Z"
      fill="hsl(var(--brand-lavender))"
      initial={{ opacity: 0.6, y: 0 }}
      animate={{ 
        opacity: [0.6, 0.9, 0.6],
        y: [0, -10, 0],
        rotate: [0, 5, 0]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.path
      d="M60 80 L90 110 L60 140 L30 110 Z"
      fill="hsl(var(--brand-lavender) / 0.8)"
      initial={{ opacity: 0.4, y: 0 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4],
        y: [0, -15, 0],
        rotate: [0, -5, 0]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    />
    <motion.path
      d="M60 150 L90 180 L60 210 L30 180 Z"
      fill="hsl(var(--brand-lavender) / 0.6)"
      initial={{ opacity: 0.3, y: 0 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        y: [0, -20, 0],
        rotate: [0, 8, 0]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
  </motion.svg>
);

export const ChevronDiamond = ({ className = "", ...props }) => (
  <motion.svg 
    width="150" 
    height="150" 
    viewBox="0 0 150 150" 
    fill="none"
    className={className}
    {...props}
  >
    <motion.path
      d="M75 20 L120 75 L75 130 L30 75 Z"
      fill="none"
      stroke="hsl(var(--brand-blue))"
      strokeWidth="3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: 1, 
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        pathLength: { duration: 2 },
        opacity: { duration: 3, repeat: Infinity },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    />
    <motion.path
      d="M50 50 L75 25 L100 50 L75 75 Z"
      fill="hsl(var(--brand-blue) / 0.3)"
      initial={{ scale: 0, rotate: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 360, 720]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </motion.svg>
);

export const RotatingDiamond = ({ className = "", ...props }) => (
  <motion.svg 
    width="100" 
    height="100" 
    viewBox="0 0 100 100" 
    fill="none"
    className={className}
    {...props}
  >
    <motion.path
      d="M50 10 L80 50 L50 90 L20 50 Z"
      fill="hsl(var(--brand-green))"
      initial={{ rotate: 0, scale: 1 }}
      whileHover={{ 
        rotate: 360, 
        scale: 1.2,
        fill: "hsl(var(--brand-green) / 0.8)"
      }}
      animate={{
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    />
  </motion.svg>
);

export const TwinklingStar = ({ className = "", ...props }) => (
  <motion.svg 
    width="80" 
    height="80" 
    viewBox="0 0 80 80" 
    fill="none"
    className={className}
    {...props}
  >
    <motion.path
      d="M40 5 L46 30 L71 24 L50 40 L71 56 L46 50 L40 75 L34 50 L9 56 L30 40 L9 24 L34 30 Z"
      fill="hsl(var(--brand-yellow))"
      initial={{ opacity: 0.3, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 45, 0]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.circle
      cx="40"
      cy="40"
      r="3"
      fill="hsl(var(--brand-yellow))"
      animate={{
        scale: [1, 2, 1],
        opacity: [1, 0, 1]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.svg>
);

export const MorphingShape = ({ className = "", ...props }) => (
  <motion.svg 
    width="140" 
    height="120" 
    viewBox="0 0 140 120" 
    fill="none"
    className={className}
    {...props}
  >
    <motion.path
      d="M20 60 Q70 20 120 60 Q70 100 20 60"
      fill="hsl(var(--brand-orange))"
      initial={{ pathLength: 0 }}
      animate={{ 
        d: [
          "M20 60 Q70 20 120 60 Q70 100 20 60",
          "M30 40 Q70 10 110 40 Q90 80 50 90 Q30 70 30 40",
          "M20 60 Q70 20 120 60 Q70 100 20 60"
        ]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.svg>
);

export const DoubleDiamond = ({ className = "", ...props }) => (
  <motion.svg 
    width="160" 
    height="80" 
    viewBox="0 0 160 80" 
    fill="none"
    className={className}
    {...props}
  >
    <motion.path
      d="M40 10 L60 40 L40 70 L20 40 Z"
      fill="hsl(var(--brand-green))"
      initial={{ x: 0 }}
      animate={{ 
        x: [0, 20, 0],
        rotate: [0, 45, 0]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.path
      d="M120 10 L140 40 L120 70 L100 40 Z"
      fill="hsl(var(--brand-green) / 0.7)"
      initial={{ x: 0 }}
      animate={{ 
        x: [0, -20, 0],
        rotate: [0, -45, 0]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    />
  </motion.svg>
);