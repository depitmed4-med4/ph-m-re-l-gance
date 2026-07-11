import { motion } from 'framer-motion';
import { syrups, syrupColors } from '@/data/menuData';
import { SectionHeader } from './Decor';

export default function SyrupCarousel() {
  return (
    <section className="py-20 md:py-28 px-4 relative">
      <SectionHeader
        eyebrow="L'Atelier des Saveurs"
        title="Personnalisez votre boisson"
        subtitle="Découvrez nos sirops maison, choisis avec soin pour sublimer chaque création. Laissez-vous inspirer."
      />

      <div className="overflow-x-auto no-scrollbar pb-6 -mx-4 px-4">
        <div className="flex gap-5 md:gap-7" style={{ width: 'max-content' }}>
          {syrups.map((syrup, i) => {
            const color = syrupColors[syrup.name] || { from: '#E8D5A8', to: '#C9A961' };
            return (
              <motion.div
                key={syrup.name}
                className="flex flex-col items-center gap-3 w-20 md:w-24 shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              >
                {/* Vial */}
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <div
                    className="absolute inset-0 rounded-full blur-lg opacity-50"
                    style={{ background: color.glow || `${color.to}40` }}
                  />
                  <div
                    className="absolute inset-0 rounded-full glass-card"
                    style={{
                      background: `radial-gradient(circle at 35% 28%, ${color.from}, ${color.to})`,
                      boxShadow: 'inset 0 0 12px rgba(255,255,255,0.3)',
                    }}
                  />
                  <div className="absolute top-2 left-3 w-3 h-3 rounded-full bg-white/40 blur-[2px]" />
                  <div className="absolute inset-0 rounded-full border border-gold/25" />
                </div>
                <span className="font-heading text-xs md:text-sm text-center font-light italic text-bistre dark:text-foreground leading-tight">
                  {syrup.name}
                </span>
                <span className="text-[9px] md:text-[10px] text-muted-foreground text-center font-light leading-tight px-1">
                  {syrup.note}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <p className="text-center text-[11px] text-muted-foreground/60 mt-4 font-light tracking-wide italic">
        ← Faites glisser pour découvrir nos seize sirops →
      </p>
    </section>
  );
}