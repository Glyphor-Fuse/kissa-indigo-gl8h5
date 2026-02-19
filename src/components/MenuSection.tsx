import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuCategories = [
  {
    id: "espresso",
    label: "Espresso",
    items: [
      { name: "Indigo Blend", price: "¥600", desc: "Notes of blueberry, dark chocolate, tobacco.", tags: ["Sig"] },
      { name: "Double Ristretto", price: "¥550", desc: "Short, intense, syrupy body.", tags: [] },
      { name: "Magic (Melbourne Style)", price: "¥700", desc: "Double ristretto, 3/4 flat white milk.", tags: ["Hot"] },
      { name: "Espresso Tonic", price: "¥800", desc: "House espresso, elderflower tonic, lime.", tags: ["Iced"] },
    ]
  },
  {
    id: "hand-drip",
    label: "Hand Drip",
    items: [
      { name: "Ethiopia Guji", price: "¥900", desc: "Jasmine, peach, tea-like finish.", tags: ["Light"] },
      { name: "Indonesia Mandheling", price: "¥850", desc: "Earthy, spicy, heavy body.", tags: ["Dark"] },
      { name: "Kenya AA", price: "¥950", desc: "Blackcurrant, tomato vine, bright acidity.", tags: ["Medium"] },
    ]
  },
  {
    id: "sweets",
    label: "Sweets",
    items: [
      { name: "Matcha Terrine", price: "¥750", desc: "Dense, rich Kyoto matcha white chocolate.", tags: ["GF"] },
      { name: "Classic Pudding", price: "¥600", desc: "Firm kissaten style, bitter caramel.", tags: [] },
      { name: "Ogura Toast", price: "¥500", desc: "Thick slice, red bean paste, salted butter.", tags: ["V"] },
    ]
  }
];

export function MenuSection() {
  return (
    <section className="py-24 bg-card/30 relative" id="menu">
      <div className="absolute inset-0 bg-[url('/images/beans-texture.png')] opacity-5 mix-blend-overlay bg-fixed bg-cover" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Selection</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Menu & Pricing
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-right md:text-left">
            Seasonally rotating beans roasted on-site daily. 
            Prices include tax.
          </p>
        </div>

        <Tabs defaultValue="espresso" className="w-full max-w-4xl mx-auto">
          <TabsList className="w-full grid grid-cols-3 bg-background/50 border border-border/50 p-1 mb-12 rounded-full h-14">
            {menuCategories.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="rounded-full text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, idx) => (
                  <Card key={idx} className="bg-background/40 backdrop-blur-sm border-border/20 hover:border-primary/40 transition-colors group">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-lg font-mono text-primary/80">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {item.desc}
                      </p>
                      <div className="flex gap-2">
                        {item.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs border-border/10 text-foreground-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
           <Badge variant="outline" className="px-4 py-2 border-primary/30 text-primary">
              Download Full PDF Menu
           </Badge>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
