import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Sparkles, Users, Award, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const features = [
    {
      icon: <Heart className="text-white" size={28} />,
      title: 'Passion for Perfection',
      description: 'Every event is treated with devotion and care',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: <Sparkles className="text-white" size={28} />,
      title: 'Creative Excellence',
      description: 'Unique and beautiful designs for every occasion',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Users className="text-white" size={28} />,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Award className="text-white" size={28} />,
      title: '10+ Years Experience',
      description: 'Trusted by hundreds of families in Dibai',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-3xl shadow-2xl z-50 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-4 right-4 ml-auto mr-4 mt-4 bg-white shadow-lg rounded-full p-3 hover:bg-accent transition-all z-10 flex items-center justify-center"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="px-6 md:px-12 pb-12 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2
                  className="text-foreground mb-4"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  About Radhe Radhe Events
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
                  Creating happiness in every celebration
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-2xl"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1732382643619-872165f61891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMG1hbmRhcHxlbnwxfHx8fDE3NjE4Mjk5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="About Radhe Radhe Events"
                    className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-foreground mb-6"
                    style={{ fontSize: '2rem', fontWeight: '600', fontFamily: "'Playfair Display', serif" }}
                  >
                    Our Story
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                    <p>
                      Radhe Radhe Events was born with a mission to spread happiness and colors in every celebration.
                      We bring creativity, devotion, and perfection to your special day.
                    </p>
                    <p>
                      Founded by Manish Ji, we have over 10 years of experience in event decoration across Dibai and
                      surrounding areas. Our team is dedicated to transforming your vision into reality with beautiful,
                      memorable decorations.
                    </p>
                    <p>
                      From intimate family gatherings to grand celebrations, we handle every event with the same level
                      of care and attention to detail. Your happiness is our success.
                    </p>
                  </div>

                  <div className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-primary/10">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white shadow-lg"
                        style={{ fontSize: '1.5rem' }}
                      >
                        M
                      </div>
                      <div>
                        <p style={{ fontWeight: '600', fontSize: '1.125rem' }}>Manish Ji</p>
                        <p className="text-primary" style={{ fontWeight: '500' }}>
                          Founder & Lead Designer
                        </p>
                        <p className="text-muted-foreground" style={{ fontSize: '0.9375rem' }}>
                          10+ years of event experience in Dibai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      {feature.icon}
                    </div>
                    <h4 className="mb-2" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground" style={{ fontSize: '0.9375rem' }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
