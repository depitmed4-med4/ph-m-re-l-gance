import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { GoldenParticles, GoldDivider } from './Decor';

export default function MenuFooter() {
  return (
    <footer className="relative py-24 md:py-32 px-6 overflow-hidden">
      <GoldenParticles count={10} />

      <motion.div
        className="relative z-10 text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="flex justify-center mb-8">
          <Heart className="w-6 h-6 gold-text" strokeWidth={1} fill="var(--gold)" fillOpacity={0.15} />
        </div>

        {/* Tapered divider */}
        <GoldDivider className="mx-auto mb-10 w-48" />

        <p className="font-heading text-2xl md:text-3xl italic font-light text-bistre dark:text-foreground leading-relaxed mb-8 text-balance">
          « Aujourd'hui, votre sourire est notre plus belle récompense. »
        </p>

        <div className="w-12 h-px bg-gold/30 mx-auto mb-8" />

        <motion.p
          className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light animate-pulse-heartbeat max-w-sm mx-auto"
        >
          Si vous souhaitez nous offrir quelque chose, une douce prière pour les mariés est le plus beau des cadeaux.
        </motion.p>

        <div className="mt-12">
          <p className="font-heading text-2xl italic gold-text mb-2">
            Amine <span className="text-muted-foreground text-base">&amp;</span> Yassmine
          </p>
          <p className="gold-text tracking-[0.3em] text-[10px] uppercase font-light">
            18 Juillet 2026
          </p>
          <p className="text-[11px] text-muted-foreground/50 mt-4 font-light italic">
            Avec tout notre amour
          </p>
        </div>
      </motion.div>
    </footer>
  );
}