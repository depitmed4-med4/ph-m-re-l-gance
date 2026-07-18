import { motion } from 'framer-motion';
import { Flower2, Coffee, ArrowRight } from 'lucide-react';
import { FloralDivider } from '@/components/Decor';

export default function BarSelection({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 md:py-16">
      <motion.div
        className="text-center mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="gold-text tracking-[0.35em] text-[10px] uppercase font-light mb-4">
          — Faites votre choix —
        </p>
        <h2 className="font-heading text-3xl md:text-4xl italic font-light text-bistre mb-4">
          Quel bar désirez-vous ?
        </h2>
        <FloralDivider className="mx-auto" width="w-56" />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-3xl">
        {/* Bar à Mocktail */}
        <motion.button
          onClick={() => onSelect('mocktails')}
          className="group glass-card rounded-3xl p-8 md:p-10 flex-1 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
              <Flower2 className="w-8 h-8 gold-text" strokeWidth={1} />
            </div>
          </div>
          <p className="gold-text tracking-[0.3em] text-[10px] uppercase font-light mb-3">Mocktails</p>
          <h3 className="font-heading text-2xl md:text-3xl italic font-light text-bistre mb-3">
            Bar à Mocktail
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 font-light text-balance">
            Sept créations sans alcool, fruitées et romantiques.
          </p>
          <span className="inline-flex items-center gap-2 gold-text text-xs uppercase tracking-[0.25em] font-light group-hover:gap-3 transition-all">
            Découvrir <ArrowRight className="w-4 h-4" strokeWidth={1.2} />
          </span>
        </motion.button>

        {/* Bar à Café Glacé */}
        <motion.button
          onClick={() => onSelect('icedCoffees')}
          className="group glass-card rounded-3xl p-8 md:p-10 flex-1 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
              <Coffee className="w-8 h-8 gold-text" strokeWidth={1} />
            </div>
          </div>
          <p className="gold-text tracking-[0.3em] text-[10px] uppercase font-light mb-3">Café Glacé</p>
          <h3 className="font-heading text-2xl md:text-3xl italic font-light text-bistre mb-3">
            Bar à Café Glacé
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 font-light text-balance">
            Cinq cafés glacés gourmands et veloutés.
          </p>
          <span className="inline-flex items-center gap-2 gold-text text-xs uppercase tracking-[0.25em] font-light group-hover:gap-3 transition-all">
            Découvrir <ArrowRight className="w-4 h-4" strokeWidth={1.2} />
          </span>
        </motion.button>
      </div>
    </div>
  );
}