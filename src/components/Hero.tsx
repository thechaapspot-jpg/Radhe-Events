import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635778976124-f609898bafc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZXN0aXZhbCUyMGRpeWElMjBsaWdodHN8ZW58MXx8fHwxNzYxODI5OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <h1
              className="text-white mb-3"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Creating Magical Moments
            </h1>
            <p
              className="text-secondary"
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                fontWeight: '600',
                textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
              }}
            >
              सर्वे भवन्तु सुखिनः
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/95 mb-8 max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', lineHeight: '1.6' }}
          >
            Professional event decoration services for Weddings, Birthdays, Engagements, and
            Corporate Events. Transforming your celebrations into unforgettable experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="https://wa.me/919058429272?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20decoration%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919058429272"
              className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/50 px-8 py-4 rounded-full hover:bg-white/20 transition-all shadow-xl flex items-center gap-2 hover:scale-105"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/90 space-y-2"
          >
            <p className="flex items-center justify-center gap-2">
              <span>📍</span>
              <span>Near Numish Ground, Dibai</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>📞</span>
              <span>Manish Ji • +91 9058429272</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
