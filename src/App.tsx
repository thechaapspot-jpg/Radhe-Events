import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackgroundParticles } from './components/BackgroundParticles';
import { AboutModal } from './components/AboutModal';
import { AudioPlayer } from './components/AudioPlayer';
import { Founder } from './components/Founder';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }

      // Handle home section (before any section)
      if (scrollPosition < 300) {
        setCurrentSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  const handleAboutClick = () => {
    setIsAboutModalOpen(true);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <BackgroundParticles />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar 
          onNavigate={handleNavigate} 
          currentSection={currentSection}
          onAboutClick={handleAboutClick}
        />

        <main>
          <div id="home">
            <Hero />
          </div>

          <div id="services">
            <Services />
          </div>

          <Testimonials />

          <div id="gallery">
            <Gallery />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <Founder />

        <Footer onAboutClick={handleAboutClick} />
        <WhatsAppButton />
        <AudioPlayer />
      </div>

      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </div>
  );
}
