import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Play, Check, X, Crown } from "lucide-react";
import { products, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${product.whatsappNumber}?text=${encodeURIComponent(
    `Hi! I'm interested in the ${product.name} (${formatPrice(product.price)}). Can you share more details?`
  )}`;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
                {product.isBestModel && (
                  <Badge className="absolute top-4 left-4 bg-foreground text-background font-mono gap-1">
                    <Crown className="h-3 w-3" />
                    Our Best Model
                  </Badge>
                )}
              </div>
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? "border-foreground" : "border-border hover:border-foreground/40"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-sm font-mono text-muted-foreground mb-2 tracking-wider uppercase">
                  {product.model}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {product.name}
                </h1>
                <p className="text-muted-foreground mt-1">{product.tagline}</p>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold font-mono">{formatPrice(product.price)}</span>
                <span className="text-sm text-muted-foreground font-mono">/ {product.size}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground font-mono uppercase">Size</span>
                  <span className="text-sm font-medium">{product.size}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground font-mono uppercase">Body</span>
                  <span className="text-sm font-medium">{product.bodyType}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground font-mono uppercase">Cable Tray</span>
                  <span className="text-sm font-medium flex items-center gap-1">
                    {product.cableTray ? (
                      <><Check className="h-3.5 w-3.5 text-success" /> Yes</>
                    ) : (
                      <><X className="h-3.5 w-3.5 text-muted-foreground" /> No</>
                    )}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-sm">Key Features</h3>
                <ul className="flex flex-col gap-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 pt-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Buy via WhatsApp
                  </Button>
                </a>
                <a href={product.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <Play className="h-4 w-4" />
                    Watch Video Review
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Full Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid md:grid-cols-2 gap-6"
          >
            {/* Specs Table */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold tracking-tight mb-4">Specifications</h2>
              <div className="flex flex-col divide-y divide-border">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-3 text-sm">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Components + Customization */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold tracking-tight mb-4">Components</h2>
                <ul className="flex flex-col gap-2">
                  {product.components.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {product.customizable && (
                <div className="rounded-2xl border border-border bg-secondary/50 p-6">
                  <h2 className="text-lg font-semibold tracking-tight mb-2">Customizable</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You can customize any component — tabletop size, color, material, and more. 
                    Contact us via WhatsApp for custom orders (৳2,000 advance, ready in 8 days).
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
