import { motion } from "framer-motion";
import { Check, X, Crown } from "lucide-react";
import { products, formatPrice } from "@/data/products";

export const ComparisonTable = () => {
  const rows: { label: string; key: string }[] = [
    { label: "Price", key: "price" },
    { label: "Size", key: "size" },
    { label: "Body Type", key: "bodyType" },
    { label: "Cable Management", key: "cableManagement" },
    { label: "Cable Tray", key: "cableTray" },
    { label: "Cable Grommet", key: "cableGrommet" },
  ];

  const getValue = (product: (typeof products)[0], key: string) => {
    switch (key) {
      case "price":
        return <span className="font-bold font-mono">{formatPrice(product.price)}</span>;
      case "size":
        return product.size;
      case "bodyType":
        return product.bodyType;
      case "cableManagement":
      case "cableTray":
      case "cableGrommet":
        return (product as any)[key] ? (
          <Check className="h-4 w-4 text-success mx-auto" />
        ) : (
          <X className="h-4 w-4 text-muted-foreground mx-auto" />
        );
      default:
        return "—";
    }
  };

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
            Compare
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Find your <span className="text-muted-foreground">perfect desk.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-muted-foreground p-4 border-b border-border w-[160px]">
                  Feature
                </th>
                {products.map((p) => (
                  <th key={p.id} className="text-center p-4 border-b border-border">
                    <div className="flex flex-col items-center gap-1">
                      {p.isBestModel && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-foreground bg-secondary px-2 py-0.5 rounded-full mb-1">
                          <Crown className="h-3 w-3" />
                          Best
                        </span>
                      )}
                      <span className="text-xs font-mono text-muted-foreground">{p.model}</span>
                      <span className="font-semibold tracking-tight">{p.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.key} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="text-sm text-muted-foreground p-4 border-b border-border font-medium">
                    {row.label}
                  </td>
                  {products.map((p) => (
                    <td key={p.id} className="text-center text-sm p-4 border-b border-border">
                      {getValue(p, row.key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
