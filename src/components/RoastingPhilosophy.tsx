import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function RoastingPhilosophy() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="roastery">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-border/30">
               <img 
                 src="/images/roasting-process.png" 
                 alt="Roasting coffee beans" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-background-900/20 mix-blend-overlay" />
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-card border border-border p-6 rounded-xl shadow-2xl max-w-[200px] hidden md:block">
                <div className="flex items-center gap-1 mb-2 text-primary">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm font-medium text-foreground-300">
                  "The most serious roast in Shibuya."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Tokyo Weekender</p>
             </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
                Respect the <span className="text-primary">Bean</span>.<br />
                Honor the <span className="text-muted-foreground">Darkness</span>.
              </h2>
              
              <div className="space-y-6 text-lg text-foreground-400">
                <p>
                  At Kissa Indigo, we don't chase trends. We chase depth. Our 1968 Probat UG-22 roaster sits in the basement, humming like the heart of the building.
                </p>
                <p>
                  We specialize in "City Roast" to "Full City Roast"—developing sweetness and body without burning the soul of the bean. No sour, under-developed light roasts. No charcoal ash. Just pure, resonant flavor.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                 <div className="border-l-2 border-primary pl-4">
                   <h4 className="text-foreground font-bold text-xl mb-1">Direct Trade</h4>
                   <p className="text-sm text-muted-foreground">Sourced from small-lot farmers in Ethiopia and Sumatra.</p>
                 </div>
                 <div className="border-l-2 border-primary pl-4">
                   <h4 className="text-foreground font-bold text-xl mb-1">Vintage Gear</h4>
                   <p className="text-sm text-muted-foreground">Roasted on restored German iron for consistent heat.</p>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RoastingPhilosophy;
