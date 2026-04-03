import { motion } from "framer-motion";
import diagramDesk from "@/assets/diagram-desk.png";
import diagramInnerOuter from "@/assets/diagram-inner-outer.png";
import diagramTransform from "@/assets/diagram-transform.png";

const steps = [
  {
    number: "01",
    title: "Precision Engineered",
    description:
      "Every desk features a manual crank mechanism with a smart locking system — smooth, reliable, and built to last decades.",
    image: diagramDesk,
    alt: "Technical illustration of DeskCraft height-adjustable desk with crank mechanism",
  },
  {
    number: "02",
    title: "Inner & Outer Leg System",
    description:
      "Dual-tube telescopic legs with inner and outer steel columns provide maximum stability at any height. No wobble, ever.",
    image: diagramInnerOuter,
    alt: "Diagram showing inner and outer leg structure of height-adjustable desk",
  },
  {
    number: "03",
    title: "Sit ↔ Stand in Seconds",
    description:
      "Seamlessly transition between sitting and standing positions. Just crank, lock, and work — your posture will thank you.",
    image: diagramTransform,
    alt: "Illustration showing desk transitioning from sitting to standing height",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wider uppercase">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple by design. <span className="text-muted-foreground">Strong by nature.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="text-5xl font-bold font-mono text-muted-foreground/20">
                  {step.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight -mt-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              <div
                className={`rounded-2xl border border-border bg-card p-8 sm:p-12 flex items-center justify-center ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="w-full max-w-sm h-auto object-contain dark:invert dark:opacity-90"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
