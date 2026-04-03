import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Reviews } from "@/components/Reviews";
import { Features } from "@/components/Features";
import { OrderProcess } from "@/components/OrderProcess";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <HowItWorks />
        <ComparisonTable />
        <Reviews />
        <OrderProcess />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Index;
