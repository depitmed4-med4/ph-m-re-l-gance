import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { coffeeCategories } from '@/data/menuData';
import DrinkCard from './DrinkCard';
import { SectionHeader } from './Decor';

export default function CoffeeSection() {
  let globalIndex = 0;
  return (
    <section className="py-20 md:py-28 px-4 relative">
      <SectionHeader
        eyebrow="Barista Café"
        title="Le Café d'Amour"
        subtitle="De l'espresso pur aux frappuccinos gourmands, chaque tasse est une étreinte chaleureuse."
        icon={<Coffee className="w-7 h-7 gold-text mx-auto" strokeWidth={1} />}
      />

      <div className="max-w-5xl mx-auto space-y-16">
        {coffeeCategories.map((cat) => (
          <div key={cat.title}>
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-heading text-2xl md:text-3xl italic text-bistre dark:text-foreground font-light">
                {cat.title}
              </p>
              <div className="gold-divider-tapered w-20 mx-auto mt-3" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {cat.drinks.map((drink) => {
                const idx = globalIndex++;
                return <DrinkCard key={drink.name} drink={drink} index={idx} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}