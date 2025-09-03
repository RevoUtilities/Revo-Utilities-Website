#!/bin/bash

# Generate favicon from Navbar-logo.webp
echo "Generating favicon from Navbar-logo.webp..."

# Source logo path
SOURCE_LOGO="public/logos/Revo/Navbar-logo.webp"
OUTPUT_FAVICON="public/logos/Revo/revo-utilities-favicon.ico"

# Check if source exists
if [ ! -f "$SOURCE_LOGO" ]; then
    echo "Error: Source logo not found at $SOURCE_LOGO"
    exit 1
fi

# Create temporary directory for intermediate files
TEMP_DIR=$(mktemp -d)
echo "Using temporary directory: $TEMP_DIR"

# Create different sizes for the favicon
echo "Creating favicon sizes..."
convert "$SOURCE_LOGO" -background transparent -resize 16x16 "$TEMP_DIR/favicon-16.png"
convert "$SOURCE_LOGO" -background transparent -resize 32x32 "$TEMP_DIR/favicon-32.png"
convert "$SOURCE_LOGO" -background transparent -resize 48x48 "$TEMP_DIR/favicon-48.png"

# Combine into ICO file
echo "Creating ICO file..."
convert "$TEMP_DIR/favicon-16.png" "$TEMP_DIR/favicon-32.png" "$TEMP_DIR/favicon-48.png" "$OUTPUT_FAVICON"

# Clean up temporary files
rm -rf "$TEMP_DIR"

echo "Favicon created successfully at $OUTPUT_FAVICON"
echo "File sizes:"
ls -la "$OUTPUT_FAVICON"
