import { MapPin, Clock, Phone, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationFooter() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border/30 relative" id="location">
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-background via-primary to-background" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Info Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">KISSA INDIGO</h2>
              <p className="text-primary font-medium tracking-wide">SHIBUYA, TOKYO</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="text-foreground font-bold mb-1">Location</h4>
                  <p className="text-foreground-400">
                    3-12-1 Udagawacho, Shibuya City<br />
                    Tokyo 150-0042, Japan<br />
                    <span className="text-xs text-muted-foreground mt-1 block">(Down the alley behind the vinyl store)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="text-foreground font-bold mb-1">Operating Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-foreground-400">
                    <span>Mon - Thu</span>
                    <span>08:00 - 20:00</span>
                    <span>Fri - Sat</span>
                    <span>08:00 - 23:00</span>
                    <span>Sunday</span>
                    <span>09:00 - 20:00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                 <p className="text-foreground-400">+81 3-1234-5678</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <Button variant="outline" size="icon" className="rounded-full border-border/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Instagram className="w-4 h-4" />
               </Button>
               <Button variant="outline" size="icon" className="rounded-full border-border/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Mail className="w-4 h-4" />
               </Button>
            </div>
          </div>

          {/* Map Column (Simulated) */}
          <div className="w-full h-[400px] bg-background-800 rounded-2xl overflow-hidden border border-border/30 relative group">
             {/* Placeholder for map */}
             <img 
               src="/images/location-map.png" 
               alt="Map Location" 
               className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-background/90 backdrop-blur-md p-4 rounded-lg shadow-xl border border-primary/40 text-center">
                   <p className="text-primary font-bold">Open Google Maps</p>
                   <p className="text-xs text-muted-foreground">Click to navigate</p>
                </div>
             </div>
             <a href="#" className="absolute inset-0 z-10" aria-label="Open Google Maps"></a>
          </div>

        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-foreground-500 gap-4">
           <p>&copy; 2024 Kissa Indigo Tokyo. All rights reserved.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}

export default LocationFooter;
