import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Music, Flame, ArrowUp, ArrowDown } from "lucide-react";

// Floor Data
const floors = [
  {
    level: "2F",
    id: "lounge",
    label: "The Vinyl Lounge",
    icon: <Music className="w-5 h-5" />,
    description: "Jazz kissaten vibes. Analog sounds and hand-drip creations.",
    img: "/images/lounge.png",
    menuHighlights: ["Aged Mandheling", "Whiskey Irish Coffee", "Matcha Terrine"],
    color: "from-background-500/20 to-background-900/20"
  },
  {
    level: "1F",
    id: "bar",
    label: "Espresso Bar",
    icon: <Coffee className="w-5 h-5" />,
    description: "The pulse of the shop. Fast-paced extraction and standing bar.",
    img: "/images/espresso-bar.png",
    menuHighlights: ["Indigo Signature Latte", "Double Ristretto", "Tokyo Toast"],
    color: "from-background-500/20 to-background-900/20"
  },
  {
    level: "B1",
    id: "roastery",
    label: "The Roastery",
    icon: <Flame className="w-5 h-5" />,
    description: "Where the heat happens. 1960s Probat roaster in action.",
    img: "/images/roastery.png",
    menuHighlights: ["Single Origin Flight", "Cold Brew Tonic", "Bean Sales"],
    color: "from-background-500/20 to-red-900/20"
  }
];

export function ElevatorFloors() {
  const [activeFloorIndex, setActiveFloorIndex] = useState(1); // Default to 1F
  const activeFloor = floors[activeFloorIndex];

  const handleFloorChange = (index: number) => {
    setActiveFloorIndex(index);
  };

  return (
    <section className="relative w-full py-24 bg-background overflow-hidden" id="floors">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Floor Guide
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Travel through the layers of Kissa Indigo. Select a floor to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-[700px] lg:h-[600px]">
          
          {/* CONTROL PANEL */}
          <div className="lg:col-span-3 h-full flex flex-col justify-center items-center lg:items-end order-2 lg:order-1">
            <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-2xl backdrop-blur-sm w-full max-w-[280px]">
              <div className="flex justify-between items-center mb-6 border-b border-border/30 pb-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Lift Control</span>
                <div className="flex gap-1">
                   <div className={`w-2 h-2 rounded-full ${activeFloorIndex === 2 ? 'bg-primary animate-pulse' : 'bg-muted'}`} />
                   <div className={`w-2 h-2 rounded-full ${activeFloorIndex === 0 ? 'bg-primary animate-pulse' : 'bg-muted'}`} />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {floors.map((floor, index) => (
                  <button
                    key={floor.id}
                    onClick={() => handleFloorChange(index)}
                    className={`group relative flex items-center justify-between p-4 rounded-lg transition-all duration-300 border ${
                      activeFloorIndex === index
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(13,148,136,0.4)]"
                        : "bg-background/50 text-muted-foreground border-border/30 hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xl font-display font-bold ${activeFloorIndex === index ? "text-primary-foreground" : "text-foreground"}`}>
                        {floor.level}
                      </span>
                      <span className="text-sm font-medium">{floor.id.charAt(0).toUpperCase() + floor.id.slice(1)}</span>
                    </div>
                    {activeFloorIndex === index && (
                      <motion.div layoutId="activeLight" className="w-2 h-2 bg-primary-foreground rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-border/30 flex justify-center gap-4">
                 <ArrowUp className={`w-5 h-5 ${activeFloorIndex === 0 ? 'text-muted/20' : 'text-primary'}`} />
                 <ArrowDown className={`w-5 h-5 ${activeFloorIndex === 2 ? 'text-muted/20' : 'text-primary'}`} />
              </div>
            </div>
          </div>

          {/* VIEWPORT */}
          <div className="lg:col-span-9 h-full relative rounded-3xl overflow-hidden border border-border/30 shadow-2xl order-1 lg:order-2 bg-background">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFloor.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={activeFloor.img} 
                    alt={activeFloor.label} 
                    className="w-full h-full object-cover opacity-60 scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeFloor.color} mix-blend-overlay opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-4 bg-primary/20 backdrop-blur-md rounded-lg text-primary border border-primary/30">
                        {activeFloor.icon}
                      </div>
                      <span className="text-primary font-bold tracking-wider uppercase text-sm">
                        Current Floor: {activeFloor.level}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
                      {activeFloor.label}
                    </h3>
                    
                    <p className="text-lg text-foreground-300 max-w-xl mb-8 leading-relaxed">
                      {activeFloor.description}
                    </p>

                    <div className="bg-card/80 backdrop-blur-md border border-border/10 p-6 rounded-xl inline-block">
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                        Level Highlights
                      </h4>
                      <ul className="space-y-2">
                        {activeFloor.menuHighlights.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-foreground-200">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ElevatorFloors;
