import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-neon-cafe.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-background-950/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-4.5 mb-6 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase backdrop-blur-sm">
            Est. Tokyo 2024
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-foreground mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          KISSA <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-background-200 to-background-300">
            INDIGO
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl text-lg md:text-xl text-foreground-300 mb-10 leading-relaxed font-light"
        >
          A multi-floor nocturnal roastery. 
          <br className="hidden md:block" />
          Where vintage neon meets the perfect pour.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[160px] h-14 text-base rounded-full">
            Find a Table
          </Button>
          <Button size="lg" variant="outline" className="border-border/20 text-foreground hover:bg-background/10 hover:text-foreground hover:border-border min-w-[160px] h-14 text-base rounded-full backdrop-blur-md">
            View Menu
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Enter</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

export default Hero;
