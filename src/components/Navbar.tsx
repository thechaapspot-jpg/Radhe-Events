import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
  onAboutClick: () => void;
}

export function Navbar({ onNavigate, currentSection, onAboutClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'about') {
      onAboutClick();
    } else {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo + Main Logo */}
          <div className="flex items-center gap-4">
            {/* Brand Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <img 
                src="/Brand-logo.jpeg" 
                alt="Radhe Events Brand" 
                className="h-14 w-auto object-contain"
              />
            </motion.div>
            
            {/* Main Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <Logo size="small" />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleNavClick(item.id)}
                className={`relative transition-colors ${
                  currentSection === item.id ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
                {currentSection === item.id && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href="tel:+919058429272"
              className="bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all flex items-center gap-2 hover:scale-105"
            >
              <Phone size={16} />
              Call Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 pt-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left py-3 px-4 transition-colors rounded-lg ${
                      currentSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:bg-accent'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href="tel:+919058429272"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-3 rounded-full mt-4 hover:shadow-lg transition-all"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
