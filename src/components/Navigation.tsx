import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Smooth scroll to section with offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 80px offset for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['who-we-are', 'what-we-do', 'contact-us'];
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const navItems = [{
    label: 'Who We Are',
    id: 'who-we-are'
  }, {
    label: 'What We Do',
    id: 'what-we-do'
  }, {
    label: 'Contact Us',
    id: 'contact-us'
  }];
  return <>
      {/* Skip to content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-black px-4 py-2 rounded font-effra">
        Skip to content
      </a>

      <nav className="fixed top-0 w-full bg-black z-40" aria-label="Primary navigation" style={{
      borderBottom: `1px solid hsl(var(--brand-green) / 0.1)`
    }}>
        <div className="container mx-auto px-4 h-16 md:h-18 flex items-center justify-between">
          {/* Brand Logo */}
          <motion.div className="flex items-center gap-3" whileHover={{
          scale: 1.02
        }} transition={{
          duration: 0.2
        }}>
            <img src="/lovable-uploads/daf9ca9d-0edb-4a9d-b34d-ba48d0e6dec2.png" alt="Nuqta Labs Logo" className="h-8 w-auto" />
            
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <motion.button key={item.id} onClick={() => scrollToSection(item.id)} className={`relative font-effra text-white/70 hover:text-white transition-colors duration-300 py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded min-h-[44px] flex items-center ${activeSection === item.id ? 'text-white' : ''}`} whileHover={{
            y: -1
          }} transition={{
            duration: 0.2
          }}>
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{
              backgroundColor: "hsl(var(--brand-blue))"
            }} layoutId="activeIndicator" initial={{
              scaleX: 0
            }} animate={{
              scaleX: 1
            }} transition={{
              duration: 0.3
            }} />}
                
                {/* Hover indicator */}
                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0" style={{
              backgroundColor: "hsl(var(--brand-pink))"
            }} whileHover={{
              opacity: activeSection === item.id ? 0 : 1
            }} transition={{
              duration: 0.2
            }} />
              </motion.button>)}
          </div>

          {/* Mobile Menu Button */}
          <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[44px] min-w-[44px] flex items-center justify-center" aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} whileTap={{
          scale: 0.95
        }}>
            <AnimatePresence mode="wait">
              {isMenuOpen ? <motion.div key="close" initial={{
              rotate: -90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: 90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <X size={24} />
                </motion.div> : <motion.div key="menu" initial={{
              rotate: 90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: -90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <Menu size={24} />
                </motion.div>}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && <>
              {/* Backdrop */}
              <motion.div className="md:hidden fixed inset-0 bg-black/80 z-40" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} onClick={() => setIsMenuOpen(false)} />
              
              {/* Menu Panel */}
              <motion.div id="mobile-menu" className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black z-50" initial={{
            x: 320
          }} animate={{
            x: 0
          }} exit={{
            x: 320
          }} transition={{
            type: 'tween',
            duration: 0.3
          }} style={{
            borderLeft: `1px solid hsl(var(--brand-green) / 0.1)`
          }}>
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-green-500/10">
                  <span className="text-white font-mada font-bold text-lg">
                    Menu
                  </span>
                </div>

                {/* Menu Items */}
                <div className="py-8 px-4">
                  <div className="space-y-2">
                    {navItems.map((item, index) => <motion.button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full text-left font-mada text-lg text-white/70 hover:text-white transition-colors duration-300 p-4 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 min-h-[56px] flex items-center ${activeSection === item.id ? 'text-white bg-white/5' : ''}`} initial={{
                  opacity: 0,
                  x: 20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.1,
                  duration: 0.3
                }} whileHover={{
                  x: 5
                }}>
                        {item.label}
                        {activeSection === item.id && <motion.div className="w-1 h-6 rounded-full ml-auto mr-3" style={{
                    backgroundColor: "hsl(var(--brand-blue))"
                  }} layoutId="mobileActiveIndicator" />}
                      </motion.button>)}
                  </div>
                </div>
              </motion.div>
            </>}
        </AnimatePresence>
      </nav>

      {/* Spacer for sticky nav */}
      <div className="h-16 md:h-18" />
    </>;
};
export { Navigation };