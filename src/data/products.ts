import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  code: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Filigree Bangle",
    category: "Bridal",
    image: product1,
    description: "Exquisite handcrafted filigree work in 22K gold, perfect for bridal occasions. Each piece is meticulously crafted by our master artisans with over 40 years of experience.",
    code: "MB-BR-001",
  },
  {
    id: "2",
    name: "Meenakari Heritage Kada",
    category: "Fancy",
    image: product2,
    description: "Traditional Rajasthani meenakari enamel work with vibrant red and green stones set in pure gold. A statement piece for festive celebrations.",
    code: "MB-FN-002",
  },
  {
    id: "3",
    name: "Diamond Cut Modern Bangle",
    category: "Fancy",
    image: product3,
    description: "Contemporary diamond-cut pattern with geometric precision. A modern take on traditional bangle design, perfect for the fashion-forward woman.",
    code: "MB-FN-003",
  },
  {
    id: "4",
    name: "Sleek Daily Wear Set",
    category: "Daily Wear",
    image: product4,
    description: "A set of elegant thin gold bangles with delicate engravings. Lightweight and comfortable for everyday elegance.",
    code: "MB-DW-004",
  },
  {
    id: "5",
    name: "Kundan Bridal Set",
    category: "Bridal",
    image: product5,
    description: "Opulent kundan-studded bridal bangles set with intricate detailing. The ultimate statement for your special day.",
    code: "MB-BR-005",
  },
  {
    id: "6",
    name: "Antique Temple Bangle",
    category: "Fancy",
    image: product6,
    description: "Antique finish bangle with traditional temple design motifs inspired by South Indian artistry. Rich heritage in every curve.",
    code: "MB-FN-006",
  },
];

export const categories = [
  { name: "Bridal", slug: "bridal" },
  { name: "Fancy", slug: "fancy" },
  { name: "Daily Wear", slug: "daily-wear" },
];
