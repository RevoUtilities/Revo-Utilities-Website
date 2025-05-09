/** @type {import('tailwindcss').Config} */
import designTokens from './src/designTokens.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: designTokens.colors,
      fontFamily: designTokens.typography.fontFamily,
      fontSize: designTokens.typography.fontSize,
      fontWeight: designTokens.typography.fontWeight,
      lineHeight: designTokens.typography.lineHeight,
      letterSpacing: designTokens.typography.letterSpacing,
      borderRadius: designTokens.borderRadius,
      boxShadow: designTokens.boxShadow,
      backdropBlur: designTokens.backdropBlur,
      animation: designTokens.animation,
      keyframes: designTokens.keyframes,
      transitionProperty: designTokens.transitionProperty,
      transitionTimingFunction: designTokens.transitionTimingFunction,
      transitionDuration: designTokens.transitionDuration,
    },
    // Spacing is a core part of the design system, so we're replacing the default 
    // rather than extending it to ensure consistency
    spacing: designTokens.spacing,
  },
  plugins: [],
}
