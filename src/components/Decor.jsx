import { motion } from 'framer-motion';
import { useMemo } from 'react';

/* Floating golden particles */
export function GoldenParticles({ count = 18 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 6,
        opacity: 0.2 + Math.random() * 0.4,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `drift ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 2}px var(--gold)`,
          }}
        />
      ))}
    </div>
  );
}

/* Decorative floral SVG for corners */
export function FloralSVG({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M20 180 Q60 140 80 100 Q95 70 100 40"
        stroke="var(--gold)"
        strokeWidth="0.8"
        opacity="0.5"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M70 110 Q55 105 45 90 Q55 95 70 110 Z"
        fill="var(--gold)"
        opacity="0.15"
      />
      <path
        d="M85 75 Q72 70 65 55 Q72 62 85 75 Z"
        fill="var(--gold)"
        opacity="0.15"
      />
      {/* Main flower - peony */}
      <g transform="translate(100,40)">
        <circle cx="0" cy="0" r="22" fill="var(--gold)" opacity="0.08" />
        <circle cx="0" cy="0" r="16" fill="var(--gold)" opacity="0.12" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-10"
            rx="7"
            ry="12"
            fill="var(--gold)"
            opacity="0.2"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="6" fill="var(--gold)" opacity="0.35" />
        <circle cx="0" cy="0" r="3" fill="var(--gold-light)" opacity="0.5" />
      </g>
      {/* Small bud */}
      <g transform="translate(75,95)">
        <circle cx="0" cy="0" r="8" fill="var(--gold)" opacity="0.1" />
        <circle cx="0" cy="0" r="5" fill="var(--gold)" opacity="0.2" />
        <circle cx="0" cy="0" r="2" fill="var(--gold-light)" opacity="0.4" />
      </g>
      {/* Tiny flowers along stem */}
      <circle cx="55" cy="140" r="3" fill="var(--gold)" opacity="0.25" />
      <circle cx="65" cy="120" r="2.5" fill="var(--gold)" opacity="0.2" />
    </svg>
  );
}

/* Floating floral decorations pinned to corners */
export function FloatingFlorals() {
  return (
    <>
      <div className="fixed top-0 left-0 w-40 h-40 md:w-56 md:h-56 pointer-events-none z-0 opacity-40">
        <div className="animate-float-slow w-full h-full">
          <FloralSVG className="w-full h-full" />
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 pointer-events-none z-0 opacity-40">
        <div className="animate-float-slow w-full h-full" style={{ animationDelay: '3s', transform: 'scaleX(-1)' }}>
          <FloralSVG className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

/* Tapered gold divider */
export function GoldDivider({ className = '', width = 'w-32' }) {
  return <div className={`gold-divider-tapered ${width} ${className}`} />;
}

/* Reusable section header */
export function SectionHeader({ eyebrow, title, subtitle, icon }) {
  return (
    <motion.div
      className="text-center mb-12 md:mb-16 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {icon && (
        <div className="flex justify-center mb-4 text-3xl">{icon}</div>
      )}
      {eyebrow && (
        <p className="gold-text tracking-[0.35em] text-[10px] md:text-xs uppercase mb-4 font-light">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-4xl md:text-5xl font-light text-bistre dark:text-foreground italic mb-4">
        {title}
      </h2>
      <GoldDivider className="mx-auto mb-5" />
      {subtitle && (
        <p className="font-body text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed font-light text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}