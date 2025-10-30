import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent } from './ui/dialog';
import { X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Wedding', 'Birthday', 'Engagement', 'Corporate'];

  const galleryItems = [
    {
      id: 1,
      category: 'Wedding',
      image:
        'https://images.unsplash.com/photo-1732382643619-872165f61891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMG1hbmRhcHxlbnwxfHx8fDE3NjE4Mjk5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Traditional Wedding Mandap',
    },
    {
      id: 2,
      category: 'Birthday',
      image:
        'https://images.unsplash.com/photo-1654851364032-ca4d7a47341c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZGVjb3JhdGlvbiUyMGJhbGxvb25zfGVufDF8fHx8MTc2MTgyOTkyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Colorful Birthday Setup',
    },
    {
      id: 3,
      category: 'Engagement',
      image:
        'https://images.unsplash.com/photo-1760669346528-c84dba1ec919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY2VsZWJyYXRpb24lMjBmbG93ZXJzfGVufDF8fHx8MTc2MTgyOTkzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Romantic Engagement',
    },
    {
      id: 4,
      category: 'Corporate',
      image:
        'https://images.unsplash.com/photo-1606744038221-5e0fa1c68fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBldmVudCUyMHN0YWdlfGVufDF8fHx8MTc2MTgzMTUzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Corporate Event Setup',
    },
    {
      id: 5,
      category: 'Wedding',
      image:
        'https://images.unsplash.com/photo-1544577080-c23a53cbad70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBmbG93ZXJzfGVufDF8fHx8MTc2MTc0MTQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Floral Wedding Arrangement',
    },
    {
      id: 6,
      category: 'Birthday',
      image:
        'https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGRlY29yYXRpb24lMjBlbGVnYW50fGVufDF8fHx8MTc2MTgyOTkzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Elegant Party Decoration',
    },
    {
      id: 7,
      category: 'Wedding',
      image:
        'https://images.unsplash.com/photo-1635778976124-f609898bafc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZXN0aXZhbCUyMGRpeWElMjBsaWdodHN8ZW58MXx8fHwxNzYxODI5OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Traditional Lighting',
    },
    {
      id: 8,
      category: 'Engagement',
      image:
        'https://images.unsplash.com/photo-1760228807230-3877a50a57f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGRlY29yYXRpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjE4Mjk5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Vibrant Celebration',
    },
    {
      id: 9,
      category: 'Corporate',
      image:
        'https://images.unsplash.com/photo-1736155983520-a0f7d5949d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc2MTgzMTUzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Professional Conference',
    },
  ];

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-foreground mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Work Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Explore our gallery of beautiful decorations
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Filter size={18} />
            <span style={{ fontSize: '0.875rem' }}>Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg scale-105'
                  : 'bg-accent/50 text-foreground hover:bg-accent hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-square">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-white" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
                      {item.title}
                    </p>
                    <p className="text-white/80" style={{ fontSize: '0.875rem' }}>
                      {item.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 backdrop-blur-sm"
            >
              <X size={24} />
            </button>
            {selectedImage && (
              <ImageWithFallback src={selectedImage} alt="Gallery item" className="w-full h-auto rounded-lg" />
            )}
          </DialogContent>
        </Dialog>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/919058429272?text=Hello%2C%20I%20saw%20your%20gallery%20and%20would%20like%20to%20discuss%20my%20event"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all hover:scale-105"
          >
            Let's Discuss Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
}
