import { motion } from 'framer-motion';
import { Smile, Heart } from 'lucide-react';

export default function DrinkCard({ drink, index = 0 }) {
  const isPrayer = drink.price && drink.price.toLowerCase().includes('prière');

  return (
    <motion.div
      className="glass-card rounded-[1.75rem] overflow-hidden w-[85vw] max-w-sm mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: 'easeOut' }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-muted" />
        <img
          src={drink.image}
          alt={drink.name}
          loading="lazy"
          className="relative w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
        />
        {/* Price badge */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 glass-card rounded-full px-5 py-2 flex items-center gap-2 whitespace-nowrap">
          {isPrayer ? (
            <Heart className="w-3.5 h-3.5 gold-text" fill="var(--gold)" fillOpacity={0.2} strokeWidth={1.2} />
          ) : (
            <Smile className="w-3.5 h-3.5 gold-text" strokeWidth={1.2} />
          )}
          <span className="text-[11px] font-light tracking-wide text-bistre dark:text-foreground">
            {drink.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <h3 className="font-heading text-2xl md:text-3xl font-light text-center mb-2 italic text-bistre dark:text-foreground">
          {drink.name}
        </h3>
        <p className="text-center text-sm text-muted-foreground italic mb-5 leading-relaxed font-light px-2">
          {drink.description}
        </p>
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
      </div>
    </motion.div>
  );
}