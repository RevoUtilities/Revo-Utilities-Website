#!/bin/bash

# Create optimized versions of vendor logos
mkdir -p public/logos/optimized

# Function to handle errors
error_exit() {
    echo "ERROR: $1" >&2
    exit 1
}

# Check required commands
command -v convert >/dev/null 2>&1 || error_exit "ImageMagick (convert) is required but not installed."
command -v cwebp >/dev/null 2>&1 || error_exit "WebP tools (cwebp) are required but not installed."

# Optimize each logo
for logo in public/logos/*.{png,svg,avif,webp,jpg,jpeg}; do
  # Skip if no files match the pattern
  [ -e "$logo" ] || continue
  
  if [ -f "$logo" ]; then  # Check if it's a file
    filename=$(basename -- "$logo")
    name="${filename%.*}"
    extension="${filename##*.}"
    
    # Skip if already optimized
    if [[ "$filename" == *"@2x"* ]] || [[ "$filename" == *.webp ]]; then
      continue
    fi
    
    echo "Optimizing $filename..."
    
    # For PNG/JPEG/AVIF files
    if [[ "$extension" =~ ^(png|jpg|jpeg|avif|webp)$ ]]; then
      # Convert to WebP with quality 80
      cwebp -q 80 "$logo" -o "public/logos/optimized/$name.webp" || echo "Warning: Failed to create WebP for $filename"
      
      # Create a 2x version for high DPI displays
      convert "$logo" -resize 200% -quality 80 "public/logos/optimized/$name@2x.png" || echo "Warning: Failed to create 2x PNG for $filename"
      
      # Create WebP version of 2x
      if [ -f "public/logos/optimized/$name@2x.png" ]; then
        cwebp -q 80 "public/logos/optimized/$name@2x.png" -o "public/logos/optimized/$name@2x.webp" || echo "Warning: Failed to create 2x WebP for $filename"
      fi
    
    # For SVG files
    elif [ "$extension" = "svg" ]; then
      # Copy SVG as is (already vector)
      cp "$logo" "public/logos/optimized/$name.svg" || echo "Warning: Failed to copy SVG $filename"
      
      # Create PNG fallback
      convert -background none "$logo" -resize 200x "public/logos/optimized/$name@2x.png" || echo "Warning: Failed to create PNG from SVG for $filename"
      
      # Create WebP version of 2x
      if [ -f "public/logos/optimized/$name@2x.png" ]; then
        cwebp -q 80 "public/logos/optimized/$name@2x.png" -o "public/logos/optimized/$name@2x.webp" || echo "Warning: Failed to create WebP from SVG for $filename"
      fi
    else
      echo "Skipping unsupported file format: $filename"
    fi
  fi
done

echo "Optimization complete. Optimized logos are in public/logos/optimized/"
