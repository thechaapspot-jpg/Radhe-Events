import { Card, CardContent } from './ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      event: 'Wedding',
      text: 'Amazing decoration service! They made our wedding day truly special. The mandap decoration was beyond our expectations. Manish Ji and his team were professional and creative.',
      rating: 5,
    },
    {
      id: 2,
      name: 'राहुल वर्मा',
      event: 'जन्मदिन',
      text: 'मेरी बेटी का जन्मदिन बहुत शानदार रहा! गुब्बारे की सजावट और थीम डेकोरेशन बिल्कुल परफेक्ट था। सभी बच्चों और माता-पिता को बहुत पसंद आया। बहुत बढ़िया सर्विस!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Anjali Gupta',
      event: 'Engagement',
      text: 'Professional and beautiful setup for our engagement ceremony. The floral arrangements were stunning and the lighting created such a romantic atmosphere. Thank you Radhe Radhe Events!',
      rating: 5,
    },
    {
      id: 4,
      name: 'अमित कुमार',
      event: 'शादी',
      text: 'शादी की सजावट अद्भुत थी! मनीष जी ने हमारे सपनों को साकार किया। मंडप की डिज़ाइन, फूलों की व्यवस्था और लाइटिंग - सब कुछ परफेक्ट था। धन्यवाद!',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-accent/10 relative overflow-hidden">
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
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Don't just take our word for it - hear from our happy customers
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="border-0 shadow-2xl bg-white">
                  <CardContent className="p-8 md:p-12">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="fill-secondary text-secondary" size={24} />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p
                      className="text-muted-foreground mb-8 italic text-center"
                      style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
                    >
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Author */}
                    <div className="text-center border-t pt-6">
                      <p style={{ fontWeight: '600', fontSize: '1.125rem' }}>
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground">{testimonials[currentIndex].event}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-accent transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-primary" size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white shadow-lg rounded-full p-3 hover:bg-accent transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-primary" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white p-12 md:p-16 rounded-3xl shadow-2xl"
        >
          <h3
            className="mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: '700',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Ready to Make Your Event Special?
          </h3>
          <p className="mb-8 max-w-2xl mx-auto opacity-95" style={{ fontSize: '1.125rem' }}>
            Contact us today for a free consultation and let's create magic together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919058429272?text=Hello%2C%20I%20would%20like%20a%20free%20consultation%20for%20my%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all shadow-lg hover:scale-105"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919058429272"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg hover:scale-105"
            >
              Call Manish
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
