import { motion } from "framer-motion";
import { Package, Truck, Paintbrush, MapPin, Phone, AlertCircle } from "lucide-react";

const orderSteps = [
  {
    icon: Package,
    title: "Standard Order",
    items: [
      "৳1,000 advance to confirm order (delivery cost included)",
      "Sundarban Courier delivery — ৳380 all over Bangladesh",
      "Table ready in 5 days",
    ],
  },
  {
    icon: Paintbrush,
    title: "Custom Order",
    items: [
      "৳2,000 advance for custom size/color orders",
      "Table ready in 8 days",
    ],
  },
  {
    icon: Truck,
    title: "Home Delivery",
    items: [
      "Home delivery available via Steadfast courier (additional charge applies)",
    ],
  },
];

const paymentMethods = [
  { label: "Bkash", value: "+8801630411689" },
  { label: "Nagad", value: "+8801944460132" },
];

export const OrderProcess = () => {
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
            Order & Delivery
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            How to <span className="text-muted-foreground">order.</span>
          </h2>
        </motion.div>

        {/* Order Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {orderSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
            >
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <step.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-semibold tracking-tight text-lg">{step.title}</h3>
              <ul className="flex flex-col gap-2">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Important Note + Payment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Important Note */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-foreground" />
              <h3 className="font-semibold tracking-tight">Important Note</h3>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                Advance payment is required via invoice before production begins.
              </li>
            </ul>
          </div>

          {/* Payment & Location */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-5">
            <div>
              <h3 className="font-semibold tracking-tight mb-3">Payment Methods</h3>
              <div className="flex flex-col gap-2">
                {paymentMethods.map((method) => (
                  <div key={method.label} className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-sm">
                      <span className="font-medium">{method.label}:</span>{" "}
                      <span className="font-mono text-muted-foreground">{method.value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-border">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Baitul Aman Jame Mosque, Salna, Gazipur Chowrasta
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
