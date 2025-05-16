#!/bin/bash

# Create optimized versions of the hero image
mkdir -p public/images/optimized

# Download the original image
curl -o public/images/original-hero.jpg https://www.goodfreephotos.com/albums/other-landscapes/agriculture-landscape-under-clouds-and-sky.jpg

# Install ImageMagick if not already installed
if ! command -v convert &> /dev/null; then
    echo "Installing ImageMagick..."
    brew install imagemagick
fi

# Create different sizes
convert public/images/original-hero.jpg -resize 1920x1080\> -quality 85 public/images/optimized/hero-1920w.webp
convert public/images/original-hero.jpg -resize 1280x720\> -quality 85 public/images/optimized/hero-1280w.webp
convert public/images/original-hero.jpg -resize 800x600\> -quality 85 public/images/optimized/hero-800w.webp
convert public/images/original-hero.jpg -resize 400x300\> -quality 85 public/images/optimized/hero-400w.webp

# Create a low-quality placeholder
convert public/images/original-hero.jpg -resize 20x15\> -quality 30 -blur 0x5 public/images/optimized/hero-blurred.jpg

echo "Optimized images created in public/images/optimized/"
