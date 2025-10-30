import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { Heart, Cake, Sparkles, Briefcase, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: 1,
      title: 'Wedding Decoration',
      icon: Heart,
      description:
        'Your dream wedding deserves a royal touch! We create stunning mandap designs, floral arrangements, and complete wedding decor that makes your special day unforgettable.',
      image:
        'https://images.unsplash.com/photo-1732382643619-872165f61891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMG1hbmRhcHxlbnwxfHx8fDE3NjE4Mjk5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-rose-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Birthday Decoration',
      icon: Cake,
      description:
        'Turn your birthday into a celebration of joy! Colorful balloon arrangements, themed decorations, and creative setups for all ages that bring smiles and memories.',
      image:
        'https://images.unsplash.com/photo-1654851364032-ca4d7a47341c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZGVjb3JhdGlvbiUyMGJhbGxvb25zfGVufDF8fHx8MTc2MTgyOTkyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Engagement & Anniversary',
      icon: Sparkles,
      description:
        'Celebrate love with elegance and romance! Beautiful flower arrangements, romantic lighting, and elegant decor that captures the essence of your special moments together.',
      image:
        'https://images.unsplash.com/photo-1760669346528-c84dba1ec919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY2VsZWJyYXRpb24lMjBmbG93ZXJzfGVufDF8fHx8MTc2MTgyOTkzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Corporate Events',
      icon: Briefcase,
      description:
        'Make your professional events shine! Professional setups, stage decorations, and elegant designs for conferences, launches, and corporate celebrations.',
      image:
        'https://images.unsplash.com/photo-1606744038221-5e0fa1c68fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBldmVudCUyMHN0YWdlfGVufDF8fHx8MTc2MTgzMTUzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-background to-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-foreground mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Comprehensive decoration services tailored to make every occasion memorable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 bg-white">
                  <div className="relative h-72 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3
                      className="text-foreground mb-3"
                      style={{ fontSize: '1.5rem', fontWeight: '600' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href="https://wa.me/919058429272?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20decoration%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group/btn"
                    >
                      <span style={{ fontWeight: '600' }}>Get Free Quote</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-accent/20 to-secondary/20 p-12 rounded-2xl"
        >
          <p className="text-muted-foreground mb-6" style={{ fontSize: '1.125rem' }}>
            Looking for something specific? We customize decorations for all types of events!
          </p>
          <a
            href="https://wa.me/919058429272?text=Hello%2C%20I%20have%20a%20custom%20decoration%20requirement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all hover:scale-105"
          >
            Discuss Custom Requirements
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
