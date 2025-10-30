import { motion } from 'motion/react';

export function AnnouncementTicker() {
  const announcements = [
    'Radhe Radhe Events & Decorations',
    '✨ Wedding Decorations',
    '🎂 Birthday Parties',
    '💍 Engagement & Anniversary',
    '💼 Corporate Events',
    '🎆 Firecrackers & Atishbaazi',
    '📞 Contact Us: +91 90584 29272',
    'Book Your Event Today!',
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-2 overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {[...announcements, ...announcements, ...announcements].map((text, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 text-sm font-medium"
          >
            {text}
            <span className="text-white/60">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
