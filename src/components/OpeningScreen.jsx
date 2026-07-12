import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { GoldenParticles, FloralSVG } from './Decor';

export default function OpeningScreen({ onEnter }) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://media.base44.com/images/public/6a5291d63fc16333fa2db591/5dd8242b3_generated_1030248f.png)',
        }}
      />
      {/* Ivory overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(252,249,245,0.82) 0%, rgba(245,237,224,0.78) 50%, rgba(237,227,208,0.82) 100%)',
        }}
      />
      <GoldenParticles count={22} />

      {/* Corner florals */}
      <div className="absolute top-0 left-0 w-44 h-44 md:w-64 md:h-64 opacity-30 pointer-events-none">
        <div className="animate-float-slow w-full h-full">
          <FloralSVG className="w-full h-full" />
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 w-44 h-44 md:w-64 md:h-64 opacity-30 pointer-events-none"
        style={{ transform: 'scaleX(-1)' }}
      >
        <div className="animate-float-slow w-full h-full" style={{ animationDelay: '3s' }}>
          <FloralSVG className="w-full h-full" />
        </div>
      </div>

      <motion.div
        className="relative z-10 text-center px-8 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
      >
        <motion.p
          className="gold-text tracking-[0.35em] text-[10px] md:text-xs uppercase mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          — Le Bar des Mariés —
        </motion.p>

        <h1 className="font-heading text-5xl md:text-6xl font-light text-bistre dark:text-foreground leading-[1.1] mb-6">
          Bienvenue au
          <br />
          <span className="italic gold-text">Bar des Mariés</span>
        </h1>

        <motion.p
          className="font-heading text-2xl md:text-3xl italic gold-text mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Amine <span className="text-muted-foreground text-lg">&amp;</span> Yassmine
        </motion.p>
        <motion.p
          className="gold-text tracking-[0.3em] text-[10px] uppercase font-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          18 Juillet 2026
        </motion.p>

        <div className="gold-divider-tapered w-32 mx-auto mb-8" />

        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-3 font-light">
          Nous sommes heureux de partager avec vous
          <br />
          cette soirée inoubliable.
        </p>
        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-12 font-light italic">
          Découvrez nos créations préparées spécialement
          <br />
          pour célébrer l'amour.
        </p>

        <motion.button
          onClick={onEnter}
          className="group relative inline-flex items-center gap-3 px-12 py-4 rounded-full border border-gold/40 text-gold tracking-[0.2em] text-xs md:text-sm uppercase font-light overflow-hidden transition-all duration-500 hover:border-gold"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Entrer</span>
          <ChevronRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gold/8 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}