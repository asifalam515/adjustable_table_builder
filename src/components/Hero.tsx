import heroImage from "@/assets/hero-desk.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-glow" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground w-fit font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Handcrafted in Bangladesh
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
              Desks that
              <br />
              <span className="text-gradient">elevate</span> your work.
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Height-adjustable tables engineered for performance, crafted for
              beauty. Four models. Zero compromises.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" onClick={scrollToProducts} className="px-8">
                Explore Models
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToProducts}>
                View Pricing
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">4</span>
                <span>Models</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">3yr</span>
                <span>Warranty</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">5K+</span>
                <span>Happy Desks</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Premium height-adjustable desk by DeskCraft"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.button>
    </section>
  );
};
