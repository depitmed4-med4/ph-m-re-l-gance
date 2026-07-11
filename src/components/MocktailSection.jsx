import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';
import { mocktails } from '@/data/menuData';
import DrinkCard from './DrinkCard';
import { SectionHeader } from './Decor';

export default function MocktailSection() {
  return (
    <section className="py-20 md:py-28 px-4 relative">
      <SectionHeader
        eyebrow="Boissons Signature"
        title="Mocktails d'Amour"
        subtitle="Dix créations sans alcool, chacune baptisée d'un nom romantique pour célébrer chaque facette de l'amour."
        icon={<Flower2 className="w-7 h-7 gold-text mx-auto" strokeWidth={1} />}
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {mocktails.map((drink, i) => (
          <DrinkCard key={drink.name} drink={drink} index={i} />
        ))}
      </div>
    </section>
  );
}