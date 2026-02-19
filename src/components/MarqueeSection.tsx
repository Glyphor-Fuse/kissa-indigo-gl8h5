import { motion } from "framer-motion";

export function MarqueeSection() {
  return (
    <div className="bg-primary py-4 overflow-hidden border-y border-border/20">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 items-center text-primary-foreground font-display font-bold text-2xl uppercase tracking-wider"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              Kissa Indigo <span>•</span> Tokyo's Hidden Gem <span>•</span> Late Night Espresso <span>•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MarqueeSection;
