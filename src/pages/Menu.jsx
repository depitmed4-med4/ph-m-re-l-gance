import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Flower2, Coffee, ArrowLeft } from 'lucide-react';
import LoadingScreen from '@/components/LoadingScreen';
import OpeningScreen from '@/components/OpeningScreen';
import DrinkSection from '@/components/DrinkSection';
import MenuFooter from '@/components/MenuFooter';
import BarSelection from '@/components/BarSelection';
import { FloatingFlorals, GoldenParticles } from '@/components/Decor';
import { mocktails, icedCoffees } from '@/data/menuData';

function MenuContent() {
  const [tab, setTab] = useState('selection');

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
            className="font-heading text-4xl md:text-5xl italic font-light text-bistre"
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

        <AnimatePresence mode="wait">
          {tab === 'selection' ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <BarSelection onSelect={setTab} />
            </motion.div>
          ) : (
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back to selection */}
              <div className="text-center pt-6 pb-2 px-6">
                <motion.button
                  onClick={() => setTab('selection')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card gold-text tracking-[0.2em] text-[11px] uppercase font-light hover:scale-105 transition-transform"
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.2} />
                  Choisir un autre bar
                </motion.button>
              </div>

              {tab === 'mocktails' && (
                <DrinkSection
                  eyebrow="Mocktails"
                  title="Bar à Mocktail"
                  subtitle="Sept créations sans alcool, fruitées et romantiques, pour célébrer chaque facette de l'amour."
                  icon={<Flower2 className="w-7 h-7 gold-text mx-auto" strokeWidth={1} />}
                  drinks={mocktails}
                />
              )}

              {tab === 'icedCoffees' && (
                <DrinkSection
                  eyebrow="Café Glacé"
                  title="Bar à Café Glacé"
                  subtitle="Cinq cafés glacés gourmands, la fraîcheur veloutée d'un instant suspendu."
                  icon={<Coffee className="w-7 h-7 gold-text mx-auto" strokeWidth={1} />}
                  drinks={icedCoffees}
                />
              )}

              <MenuFooter />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" />
      ) : !entered ? (
        <OpeningScreen key="opening" onEnter={() => setEntered(true)} />
      ) : (
        <MenuContent key="menu" />
      )}
    </AnimatePresence>
  );
}