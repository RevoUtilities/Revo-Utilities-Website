#!/bin/bash

# Deploy script for Revo Utilities
# This script ensures clean builds and proper asset handling

echo "🚀 Starting deployment process..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Verify build output
echo "✅ Verifying build output..."
if [ ! -f "dist/index.html" ]; then
    echo "❌ Build failed - index.html not found"
    exit 1
fi

if [ ! -d "dist/assets" ]; then
    echo "❌ Build failed - assets directory not found"
    exit 1
fi

# Check for asset files
ASSET_COUNT=$(ls dist/assets/*.js dist/assets/*.css 2>/dev/null | wc -l)
if [ "$ASSET_COUNT" -eq 0 ]; then
    echo "❌ Build failed - no asset files found"
    exit 1
fi

echo "✅ Build verification complete"
echo "📊 Build statistics:"
echo "   - HTML: $(ls -la dist/index.html | awk '{print $5}') bytes"
echo "   - Assets: $ASSET_COUNT files"
echo "   - Total size: $(du -sh dist | cut -f1)"

echo "🎉 Deployment ready! Deploy the 'dist' folder to your hosting provider."
echo ""
echo "💡 If you're still experiencing issues after deployment:"
echo "   1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)"
echo "   2. Try incognito/private browsing mode"
echo "   3. Check browser console for any remaining errors" 