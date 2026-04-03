import { motion } from "framer-motion";
import { Zap, Shield, Volume2, Ruler } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Electric Precision",
    desc: "Dual & triple motor systems with smooth, silent height adjustment at the touch of a button.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    desc: "Industrial-grade steel frames with up to lifetime warranty. These desks are built for decades.",
  },
  {
    icon: Volume2,
    title: "Whisper Quiet",
    desc: "Under 45dB operation. Adjust your desk during calls without anyone noticing.",
  },
  {
    icon: Ruler,
    title: "Perfect Fit",
    desc: "Programmable memory presets let you switch between sitting and standing in seconds.",
  },
];

export const Features = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wider uppercase">
            Why DeskCraft
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Engineering meets <span className="text-muted-foreground">artistry.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <f.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-semibold tracking-tight">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
