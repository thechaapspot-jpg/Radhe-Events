import { Logo } from './Logo';
import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onAboutClick: () => void;
}

export function Footer({ onAboutClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    'Wedding Decoration',
    'Birthday Decoration',
    'Engagement Decoration',
    'Anniversary Celebration',
    'Corporate Events',
    'Firecrackers & Atishbaazi',
    'Custom Events',
  ];

  const scrollToSection = (id: string) => {
    if (id === 'about') {
      onAboutClick();
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="mb-6 [&_*]:!text-white [&_.text-muted-foreground]:!text-white/80 [&_.text-accent]:!text-secondary">
              <Logo size="medium" />
            </div>
            <p className="opacity-90 leading-relaxed">
              Creating unforgettable moments with our creative and colorful decoration services across Dibai and
              surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block opacity-90 hover:opacity-100 hover:translate-x-1 transition-all text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
              Our Services
            </h4>
            <div className="space-y-3">
              {services.map((service) => (
                <p key={service} className="opacity-90">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 opacity-90" />
                <div className="opacity-90 leading-relaxed">
                  <p>Near Numish Ground, Dibai</p>
                  <p>Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 opacity-90" />
                <div>
                  <a href="tel:+919058429272" className="opacity-90 hover:opacity-100 block">
                    +91 9058429272
                  </a>
                  <p className="opacity-75" style={{ fontSize: '0.875rem' }}>
                    Manish Ji
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 opacity-90" />
                <div className="opacity-90">
                  <p style={{ fontSize: '0.875rem' }}>Available 9 AM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logo - Centered */}
        <div className="flex justify-center mb-8">
          <img 
            src="/Brand-logo.jpeg" 
            alt="Radhe Events Brand" 
            className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="opacity-75 mb-2">© {currentYear} Radhe Radhe Events & Decoration. All rights reserved.</p>
          <p className="opacity-75" style={{ fontSize: '0.875rem' }}>
            सर्वे भवन्तु सुखिनः • Making your celebrations memorable
          </p>
        </div>
      </div>
    </footer>
  );
}
