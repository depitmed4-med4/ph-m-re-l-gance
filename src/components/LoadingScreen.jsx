import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative w-16 h-16 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-gold/15" />
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin"
          style={{ animationDuration: '1.4s' }}
        />
      </motion.div>
      <motion.p
        className="font-heading text-xl italic gold-text tracking-wide"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Bar des Mariés
      </motion.p>
      <motion.div
        className="gold-divider-tapered w-20 mt-4"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.6, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </motion.div>
  );
}