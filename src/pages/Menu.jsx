import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun, Wine, Flower2, Coffee } from 'lucide-react';
import LoadingScreen from '@/components/LoadingScreen';
import OpeningScreen from '@/components/OpeningScreen';
import DrinkSection from '@/components/DrinkSection';
import MenuFooter from '@/components/MenuFooter';
import { FloatingFlorals, GoldenParticles } from '@/components/Decor';
import { cocktails, mocktails, icedCoffees } from '@/data/menuData';

function MenuContent() {
  return (
    <motion.div
      className="relative min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FloatingFlorals />

      {/* Ambient particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <GoldenParticles count={12} />
      </div>

      <div className="relative z-10">
        {/* Menu intro banner */}
        <div className="text-center pt-20 pb-4 px-6">
          <motion.p
            className="gold-text tracking-[0.35em] text-[10px] uppercase font-light mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            — Le Menu —
          </motion.p>
          <motion.h1
            className="font-heading text-4xl md:text-5xl italic font-light text-bistre dark:text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Bar des Mariés
          </motion.h1>
          <motion.p
            className="font-heading text-xl md:text-2xl italic gold-text mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Amine <span className="text-muted-foreground text-base">&amp;</span> Yassmine
          </motion.p>
          <motion.p
            className="gold-text tracking-[0.3em] text-[10px] uppercase font-light mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            18 Juillet 2026
          </motion.p>
        </div>

        <DrinkSection
          eyebrow="Cocktails"
          title="Cocktails d'Amour"
          subtitle="Cinq créations pétillantes et spiritueuses, chacune baptisée d'un nom d'amour."
          icon={<Wine className="w-7 h-7 gold-text mx-auto" strokeWidth={1} />}
          drinks={cocktails}
        />

        <DrinkSection
          eyebrow="Mocktails"
          title="Mocktails d'Amour"
          subtitle="Cinq créations sans alcool, fruitées et romantiques, pour célébrer chaque facette de l'amour."
          icon={<Flower2 className="w-7 h-7 gold-text mx-auto" strokeWidth={1} />}
          drinks={mocktails}
        />

        <DrinkSection
          eyebrow="Café Glacé"
          title="Café Glacé"
          subtitle="Cinq cafés glacés gourmands, la fraîcheur veloutée d'un instant suspendu."
          icon={<Coffee className="w-7 h-7 gold-text mx-auto" strokeWidth={1} />}
          drinks={icedCoffees}
        />

        <MenuFooter />
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hour = new Date().getHours();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = hour >= 21 || prefersDark;
    setIsDark(shouldDark);
    if (shouldDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : !entered ? (
          <OpeningScreen key="opening" onEnter={() => setEntered(true)} />
        ) : (
          <MenuContent key="menu" />
        )}
      </AnimatePresence>

      {/* Dark mode toggle */}
      {entered && !loading && (
        <motion.button
          onClick={toggleDark}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass-card flex items-center justify-center text-gold hover:scale-110 transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isDark ? 'Mode clair' : 'Mode sombre'}
        >
          {isDark ? (
            <Sun className="w-5 h-5" strokeWidth={1.2} />
          ) : (
            <Moon className="w-5 h-5" strokeWidth={1.2} />
          )}
        </motion.button>
      )}
    </>
  );
}