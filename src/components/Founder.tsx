import { motion } from 'motion/react';

export function Founder() {
  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <img
                  src="/Manish ji.jpeg"
                  alt="Manish Ji - Founder"
                  className="w-full h-full object-cover rounded-full shadow-lg ring-2 ring-primary/20"
                />
              </div>
              <div>
                <p className="font-semibold text-xl text-foreground">Manish Ji</p>
                <p className="text-primary font-medium text-base">
                  Founder & Lead Designer
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  10+ years of event experience in Dibai
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
