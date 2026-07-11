import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { drinkColors } from '@/data/menuData';

export default function DrinkCard({ drink, index = 0 }) {
  const color = drinkColors[drink.color] || drinkColors.gold;

  return (
    <motion.div
      className="glass-card rounded-[1.75rem] p-6 md:p-8 w-[85vw] max-w-sm mx-auto relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: 'easeOut' }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-3 right-3 w-6 h-6 opacity-20">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L12 22 M2 12 L22 12" stroke="var(--gold)" strokeWidth="0.5" />
          <circle cx="12" cy="12" r="4" stroke="var(--gold)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Drink orb — stylized glass representation */}
      <div className="relative mx-auto mb-6 w-36 h-36 md:w-44 md:h-44">
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{ background: color.glow }}
        />
        {/* Main orb */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 35% 28%, ${color.from}, ${color.to})`,
            boxShadow: `inset 0 0 25px rgba(255,255,255,0.25), inset 0 -10px 20px rgba(0,0,0,0.1)`,
          }}
        />
        {/* Glass highlights */}
        <div className="absolute top-4 left-7 w-9 h-9 rounded-full bg-white/35 blur-[3px]" />
        <div className="absolute top-7 left-11 w-2.5 h-2.5 rounded-full bg-white/55" />
        <div className="absolute bottom-6 right-8 w-3 h-3 rounded-full bg-white/20 blur-[2px]" />
        {/* Gold rim */}
        <div className="absolute inset-0 rounded-full border border-gold/25" />
        <div className="absolute -inset-1 rounded-full border border-gold/8" />
      </div>

      {/* Name */}
      <h3 className="font-heading text-2xl md:text-3xl font-light text-center mb-2 italic text-bistre dark:text-foreground">
        {drink.name}
      </h3>

      {/* Garnish */}
      {drink.garnish && (
        <div className="flex items-center justify-center gap-1.5 mb-4 text-[11px] text-gold/80">
          <Sparkles className="w-3 h-3" />
          <span className="tracking-wide font-light">{drink.garnish}</span>
        </div>
      )}

      {/* Description / Note du Sommelier */}
      <p className="text-center text-sm text-muted-foreground italic mb-5 leading-relaxed font-light px-2">
        {drink.description}
      </p>

      {/* Ingredients */}
      <div className="flex flex-wrap justify-center gap-2">
        {drink.ingredients.map((ing, i) => (
          <span
            key={i}
            className="text-[11px] px-3 py-1.5 rounded-full bg-gold/5 text-foreground/70 border border-gold/10 font-light tracking-wide"
          >
            {ing}
          </span>
        ))}
      </div>
    </motion.div>
  );
}