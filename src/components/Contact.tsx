import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I would like to book your services:
    
Name: ${formData.name}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.date}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919058429272?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-background">
      <div className="max-w-7xl mx-auto">
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
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Ready to make your event unforgettable? Contact us today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="mb-6" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 h-12"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 h-12"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Select
                      value={formData.eventType}
                      onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                    >
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="engagement">Engagement</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="date">Event Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="mt-2 h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2"
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary/90 text-white py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <Send size={18} />
                    Send via WhatsApp
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="mb-2" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
                      Address
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Near Numish Ground, Dibai
                      <br />
                      Uttar Pradesh, India
                    </p>
                    <a
                      href="https://maps.google.com/?q=Numish+Ground+Dibai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline mt-2 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-amber-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="mb-2" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
                      Phone
                    </h4>
                    <a
                      href="tel:+919058429272"
                      className="text-primary hover:underline block"
                      style={{ fontSize: '1.125rem', fontWeight: '500' }}
                    >
                      +91 9058429272
                    </a>
                    <p className="text-muted-foreground mt-1">Manish Ji</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="mb-2" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
                      Working Hours
                    </h4>
                    <p className="text-muted-foreground">Available 9 AM - 9 PM</p>
                    <p className="text-muted-foreground">7 Days a Week</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5">
              <CardContent className="p-8 text-center">
                <h4 className="mb-3" style={{ fontWeight: '600', fontSize: '1.25rem' }}>
                  Quick Connect
                </h4>
                <p className="text-muted-foreground mb-6">Get instant response on WhatsApp</p>
                <a
                  href="https://wa.me/919058429272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all shadow-lg hover:scale-105"
                >
                  Start WhatsApp Chat
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
