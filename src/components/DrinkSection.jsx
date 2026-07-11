import DrinkCard from './DrinkCard';
import { SectionHeader } from './Decor';

export default function DrinkSection({ eyebrow, title, subtitle, icon, drinks }) {
  return (
    <section className="py-20 md:py-28 px-4 relative">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        icon={icon}
      />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {drinks.map((drink, i) => (
          <DrinkCard key={drink.name} drink={drink} index={i} />
        ))}
      </div>
    </section>
  );
}