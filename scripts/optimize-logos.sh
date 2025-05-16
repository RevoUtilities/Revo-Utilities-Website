#!/bin/bash

# Create optimized versions of vendor logos
mkdir -p public/logos/optimized

# Optimize each logo
for logo in public/logos/*.png public/logos/*.svg; do
  if [ -f "$logo" ]; then  # Check if it's a file
    filename=$(basename -- "$logo")
    name="${filename%.*}"
    extension="${filename##*.}"
    
    echo "Optimizing $filename..."
    
    # For PNG files
    if [ "$extension" = "png" ]; then
      # Convert to WebP with quality 80
      cwebp -q 80 "$logo" -o "public/logos/optimized/$name.webp"
      
      # Create a 2x version for high DPI displays
      convert "$logo" -resize 200% -quality 80 "public/logos/optimized/$name@2x.png"
      cwebp -q 80 "public/logos/optimized/$name@2x.png" -o "public/logos/optimized/$name@2x.webp"
    
    # For SVG files
    elif [ "$extension" = "svg" ]; then
      # Copy SVG as is (already vector)
      cp "$logo" "public/logos/optimized/$name.svg"
      
      # Create PNG fallback
      convert -background none "$logo" -resize 200x "public/logos/optimized/$name@2x.png"
      cwebp -q 80 "public/logos/optimized/$name@2x.png" -o "public/logos/optimized/$name@2x.webp"
    fi
  fi
done

echo "Optimized logos created in public/logos/optimized/"
