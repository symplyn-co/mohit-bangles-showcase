import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

const OptimizedImage = ({ src, alt, className = "", width, height, loading = "lazy" }: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-secondary animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default OptimizedImage;
