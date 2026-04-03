import { motion } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <article>
        <Link
          to={`/product/${product.id}`}
          className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/20 transition-all duration-500 hover:shadow-lg"
          aria-label={`View ${product.name} — ${formatPrice(product.price)}`}
        >
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {product.isBestModel && (
              <Badge className="absolute top-4 left-4 bg-foreground text-background font-mono text-xs gap-1">
                <Crown className="h-3 w-3" />
                Best Model
              </Badge>
            )}
          </div>

          <div className="p-6 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-1">{product.model}</p>
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-gradient transition-all">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">{product.tagline}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-xl font-bold font-mono">{formatPrice(product.price)}</span>
              <span className="text-xs text-muted-foreground font-mono">{product.size}</span>
            </div>
          </div>
        </Link>
      </article>
    </motion.div>
  );
};
