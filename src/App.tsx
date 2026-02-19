import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ElevatorFloors } from "@/components/ElevatorFloors";
import { MenuSection } from "@/components/MenuSection";
import { RoastingPhilosophy } from "@/components/RoastingPhilosophy";
import { LocationFooter } from "@/components/LocationFooter";
import { MarqueeSection } from "@/components/MarqueeSection";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <Navbar />
          <Hero />
          <MarqueeSection />
          <ElevatorFloors />
          <MenuSection />
          <RoastingPhilosophy />
          <LocationFooter />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
