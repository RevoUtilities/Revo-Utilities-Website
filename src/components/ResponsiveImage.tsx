import { cn } from '../utils/cn';
import { useEffect, useState } from 'react';
import { isSafari } from '../utils/browserDetection';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  webpSupport?: boolean;
}

/**
 * ResponsiveImage component that optimizes images for different screen sizes
 * with WebP support and Safari-specific optimizations
 * 
 * @param src - The source URL of the image
 * @param alt - Alt text for accessibility
 * @param sizes - Sizes attribute for responsive images (e.g. "(max-width: 768px) 100vw, 50vw")
 * @param className - Class name for the container
 * @param imgClassName - Class name for the image element
 * @param width - Original width of the image
 * @param height - Original height of the image
 * @param priority - Whether the image should be prioritized for loading
 * @param quality - Image quality (1-100)
 * @param webpSupport - Force enable/disable WebP (auto-detects by default)
 */
const ResponsiveImage = ({
  src,
  alt,
  sizes = '100vw',
  className,
  imgClassName,
  width,
  height,
  priority = false,
  quality = 75,
  webpSupport,
}: ResponsiveImageProps) => {
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);
  
  // Check WebP support on mount
  useEffect(() => {
    // Only run this check once
    if (supportsWebP !== null) return;
    
    // If webpSupport prop is provided, use that value
    if (webpSupport !== undefined) {
      setSupportsWebP(webpSupport);
      return;
    }
    
    // Otherwise detect support
    const checkWebPSupport = async () => {
      if (!self.createImageBitmap) {
        setSupportsWebP(false);
        return;
      }
      
      const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
      try {
        const blob = await fetch(webpData).then(r => r.blob());
        await createImageBitmap(blob); // WebP is supported if this succeeds
        setSupportsWebP(true);
      } catch (_e) { // Renamed e to _e as it's unused
        setSupportsWebP(false);
      }
    };
    
    checkWebPSupport();
    
    // Also detect Safari
    setIsSafariBrowser(isSafari());
  }, [supportsWebP, webpSupport]);

  // Generate srcSet for responsive images
  // This creates multiple image sizes based on common viewport widths
  const generateSrcSet = (src: string) => {
    // Extract base URL and extension
    const baseSrc = src.split('?')[0];
    
    // Use fewer widths for Safari to reduce memory usage
    const widths = isSafariBrowser 
      ? [640, 828, 1200, 1920] 
      : [640, 750, 828, 1080, 1200, 1920, 2048];
    
    // For images from unsplash or similar services that support width parameters
    if (src.includes('unsplash.com')) {
      // Use WebP format if supported and append webp format
      if (supportsWebP) {
        return widths
          .map(w => `${baseSrc}?w=${w}&q=${quality}&fm=webp ${w}w`)
          .join(', ');
      }
      
      return widths
        .map(w => `${baseSrc}?w=${w}&q=${quality} ${w}w`)
        .join(', ');
    }
    
    // For other images, we can't generate srcSet dynamically
    // In a real app, you'd use an image optimization service or tool
    return src;
  };

  // Calculate aspect ratio for proper sizing
  const aspectRatio = width && height ? width / height : undefined;

  // Apply memory-saving techniques for Safari
  const safariOptimizations = isSafariBrowser ? {
    // Force hardware acceleration to improve performance
    transform: 'translateZ(0)',
    // Hint that this element will change
    willChange: 'transform',
    // Use crisp edges for better performance in Safari
    imageRendering: 'crisp-edges' as const
  } : {};

  return (
    <div 
      className={cn('overflow-hidden', className)}
      style={{
        ...(aspectRatio ? { aspectRatio: String(aspectRatio) } : {}),
        ...safariOptimizations
      }}
    >
      <img
        src={src}
        alt={alt}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={isSafariBrowser ? 'sync' : 'async'} // Better Safari performance for visible images
        className={cn('w-full h-full object-cover', imgClassName)}
        style={safariOptimizations}
      />
    </div>
  );
};

export default ResponsiveImage;
