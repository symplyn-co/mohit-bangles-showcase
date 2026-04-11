import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import OptimizedImage from "@/components/OptimizedImage";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-400">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-5">
        <span className="font-body text-xs font-medium text-primary uppercase tracking-widest">
          {product.category}
        </span>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-heading text-lg font-semibold mt-1 text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
        <Link
          to={`/products/${product.id}`}
          className="inline-flex items-center gap-2 mt-4 font-body text-sm font-medium text-primary hover:text-gold-dark transition-colors duration-300"
        >
          View Details
          <i className="fas fa-arrow-right text-xs" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
