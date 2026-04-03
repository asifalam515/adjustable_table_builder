import product1Main from "@/assets/product-1-main.jpg";
import product2Main from "@/assets/product-2-main.jpg";
import product3Main from "@/assets/product-3-main.jpg";
import product4Main from "@/assets/product-4-main.jpg";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  model: string;
  tagline: string;
  description: string;
  price: number;
  size: string;
  images: string[];
  features: string[];
  specs: ProductSpec[];
  components: string[];
  bodyType: string;
  cableManagement: boolean;
  cableTray: boolean;
  cableGrommet: boolean;
  isBestModel?: boolean;
  customizable: boolean;
  youtubeUrl: string;
  whatsappNumber: string;
}

const commonSpecs: ProductSpec[] = [
  { label: "Tabletop Dimensions", value: "2.0 feet × 4 feet" },
  { label: "Height Adjustment Range", value: "2.5 feet – 4 feet" },
  { label: "Adjustment Mechanism", value: "Manual crank with gear system" },
  { label: "Frame Material", value: "Mild Steel (well grade inner part)" },
  { label: "Tabletop Material", value: "Board" },
  { label: "Base Support", value: "Horizontal crossbar" },
  { label: "Load Capacity", value: "~80–100 kg" },
];

const commonComponents = [
  "Board tabletop",
  "Inner MS box (mild steel)",
  "Manual crank handle",
  "Crossbar for structural strength",
  "PC case tray",
];

export const products: Product[] = [
  {
    id: "m1-go",
    name: "M1 Go",
    model: "MODEL M1 Go",
    tagline: "The Essential Starter",
    description:
      "The M1 Go is your perfect entry into height-adjustable desks. With a fixed body design, integrated cable management tray, and cable grommet — it delivers solid performance at an unbeatable price. Features a gear system with locking mechanism for secure height adjustment.",
    price: 7800,
    size: "4/2 feet",
    images: [product1Main, product1Main, product1Main],
    features: [
      "Fixed body — rock solid stability",
      "Cable management tray + cable grommet",
      "Gear system with locking mechanism",
      "New strong build quality",
      "New smart locking system",
      "Manual height adjustment",
    ],
    specs: commonSpecs,
    components: commonComponents,
    bodyType: "Fixed",
    cableManagement: true,
    cableTray: true,
    cableGrommet: true,
    customizable: true,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappNumber: "8801630411689",
  },
  {
    id: "m1",
    name: "M1",
    model: "MODEL M1",
    tagline: "Portable & Versatile",
    description:
      "The M1 brings portability to the table — literally. With a lightweight portable body and built-in cable management, it's designed for flexibility. Easily foldable to 3 parts for convenient storage and movement.",
    price: 10600,
    size: "4/2 feet",
    images: [product2Main, product2Main, product2Main],
    features: [
      "Portable body — move it anywhere",
      "Cable management system",
      "Foldable to 3 parts for easy storage",
      "New strong build quality",
      "New smart locking system",
      "Manual height adjustment",
    ],
    specs: commonSpecs,
    components: commonComponents,
    bodyType: "Portable",
    cableManagement: true,
    cableTray: false,
    cableGrommet: false,
    customizable: true,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappNumber: "8801630411689",
  },
  {
    id: "m1-pro",
    name: "M1 Pro",
    model: "MODEL M1 Pro",
    tagline: "Pro-Grade Portable",
    description:
      "The M1 Pro combines the best of both worlds — full portability with premium cable management. Features cable management tray, cable grommet, and a foldable design that breaks into 3 parts. The professional's choice for a versatile workspace.",
    price: 11700,
    size: "4/2 feet",
    images: [product3Main, product3Main, product3Main],
    features: [
      "Portable body — full mobility",
      "Cable management tray + cable grommet",
      "Foldable to 3 parts for easy storage",
      "New strong build quality",
      "New smart locking system",
      "Manual height adjustment",
    ],
    specs: commonSpecs,
    components: commonComponents,
    bodyType: "Portable",
    cableManagement: true,
    cableTray: true,
    cableGrommet: true,
    customizable: true,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappNumber: "8801630411689",
  },
  {
    id: "manual-premium",
    name: "Manual Premium",
    model: "MANUAL PREMIUM",
    tagline: "Our Best Model",
    description:
      "The crown jewel of our collection. The Manual Premium delivers the ultimate height-adjustable desk experience — portable body, full cable management with tray and grommet, premium build quality, and our strongest frame. Foldable to 3 parts for effortless portability.",
    price: 15400,
    size: "4/2 feet",
    images: [product4Main, product4Main, product4Main],
    features: [
      "Portable body — premium mobility",
      "Cable management tray + cable grommet",
      "Foldable to 3 parts for easy storage",
      "New strong premium-grade build",
      "New smart locking system",
      "Manual height adjustment",
      "Premium frame & finish",
    ],
    specs: commonSpecs,
    components: commonComponents,
    bodyType: "Portable",
    cableManagement: true,
    cableTray: true,
    cableGrommet: true,
    isBestModel: true,
    customizable: true,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappNumber: "8801630411689",
  },
];

export const formatPrice = (price: number) =>
  `৳${price.toLocaleString("en-BD")}`;
