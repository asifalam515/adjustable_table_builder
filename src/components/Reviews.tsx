import { motion } from "framer-motion";
import { Star } from "lucide-react";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";
import review5 from "@/assets/review-5.jpg";

const reviews = [
  {
    name: "Rafiq Ahmed",
    role: "Software Engineer",
    model: "M1 Pro",
    rating: 5,
    text: "Best investment for my home office. The portable body means I can move it between rooms easily. Cable management keeps everything clean.",
    image: review1,
  },
  {
    name: "Tasnim Haque",
    role: "Freelance Designer",
    model: "Manual Premium",
    rating: 5,
    text: "The Manual Premium is absolutely worth every taka. Premium build quality, smooth height adjustment, and it looks stunning in my workspace.",
    image: review2,
  },
  {
    name: "Shihab Uddin",
    role: "Content Creator",
    model: "M1",
    rating: 4,
    text: "Love how it folds into 3 parts — perfect for my small apartment. Solid build and the height adjustment is smooth and quiet.",
    image: review3,
  },
  {
    name: "Nusrat Jahan",
    role: "Entrepreneur",
    model: "M1 Go",
    rating: 5,
    text: "Handcrafted with real attention to detail. Watching them spray paint and assemble gave me confidence in the quality. Amazing value at this price.",
    image: review4,
  },
  {
    name: "Arif Rahman",
    role: "Student",
    model: "M1 Go",
    rating: 5,
    text: "Finally a desk that grows with me — literally. The gear lock system is solid and the cable tray keeps my setup tidy. Highly recommend for students.",
    image: review5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${
          i < count ? "fill-foreground text-foreground" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

export const Reviews = () => {
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
            Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by <span className="text-muted-foreground">real people.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-foreground/20 transition-colors"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src={review.image}
                  alt={`${review.name}'s ${review.model} setup`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <Stars count={review.rating} />

              <p className="text-sm text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                  {review.model}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
