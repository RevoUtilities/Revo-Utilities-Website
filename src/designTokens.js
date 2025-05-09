/**
 * Revo Utilities Design Tokens
 * 
 * This file serves as the single source of truth for all design tokens in the application.
 * Any changes to the design system should be reflected here first.
 */

// COLORS
const colors = {
  // Brand colors
  primary: {
    DEFAULT: '#c5d200',
    50: '#f8fadd',
    100: '#f1f5bb',
    200: '#e9f099',
    300: '#e2eb77',
    400: '#dbe655',
    500: '#d4e133',
    600: '#c5d200', // Primary
    700: '#a6b100', // Primary Dark
    800: '#879000',
    900: '#687000',
  },
  // Neutral Colors
  neutral: {
    DEFAULT: '#333333',
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#6c757d',
    600: '#495057',
    700: '#333333', // Secondary
    800: '#212121', // Accent
    900: '#0a0a0a',
  },
  // Semantic Colors
  success: {
    DEFAULT: '#28a745',
    50: '#eaf7ee',
    100: '#c3e6cb',
    200: '#9fdb9d',
    300: '#7bc77c',
    400: '#5cb85c',
    500: '#28a745',
    600: '#208e3c',
    700: '#1a7431',
    800: '#145b26',
    900: '#0e421c',
  },
  warning: {
    DEFAULT: '#ffc107',
    50: '#fff9e6',
    100: '#fff3cd',
    200: '#ffe69c',
    300: '#ffda6a',
    400: '#ffcd39',
    500: '#ffc107',
    600: '#e0a800',
    700: '#ba8b00',
    800: '#946e00',
    900: '#6e5200',
  },
  danger: {
    DEFAULT: '#dc3545',
    50: '#f8d7da',
    100: '#f5c6cb',
    200: '#eda1aa',
    300: '#e27c88',
    400: '#d95767',
    500: '#dc3545',
    600: '#c82333',
    700: '#a71d2a',
    800: '#86151f',
    900: '#650f19',
  },
  info: {
    DEFAULT: '#17a2b8',
    50: '#e9f9fc',
    100: '#d1f2f8',
    200: '#abebf5',
    300: '#85e0ed',
    400: '#5fd5e6',
    500: '#17a2b8',
    600: '#138496',
    700: '#106e7d',
    800: '#0c5560',
    900: '#083f47',
  },
};

// TYPOGRAPHY
const typography = {
  fontFamily: {
    sans: ['Inter', 'SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  },
  // Type scale with 1.25 ratio (Major Third)
  fontSize: {
    xs: ['0.64rem', { lineHeight: '1rem' }],
    sm: ['0.8rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.25rem', { lineHeight: '1.75rem' }],
    xl: ['1.563rem', { lineHeight: '2rem' }],
    '2xl': ['1.953rem', { lineHeight: '2.25rem' }],
    '3xl': ['2.441rem', { lineHeight: '2.5rem' }],
    '4xl': ['3.052rem', { lineHeight: '1' }],
    '5xl': ['3.815rem', { lineHeight: '1' }],
    '6xl': ['4.768rem', { lineHeight: '1' }],
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// SPACING
const spacing = {
  // Base spacing unit: 4px
  0: '0',
  px: '1px',
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem',     // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem',    // 12px
  3.5: '0.875rem', // 14px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px
  11: '2.75rem',   // 44px
  12: '3rem',      // 48px
  14: '3.5rem',    // 56px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  28: '7rem',      // 112px
  32: '8rem',      // 128px
  36: '9rem',      // 144px
  40: '10rem',     // 160px
  44: '11rem',     // 176px
  48: '12rem',     // 192px
  52: '13rem',     // 208px
  56: '14rem',     // 224px
  60: '15rem',     // 240px
  64: '16rem',     // 256px
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px
};

// BORDERS
const borderRadius = {
  'none': '0',
  'sm': '0.125rem',   // 2px
  'DEFAULT': '0.25rem', // 4px
  'md': '0.5rem',     // 8px
  'lg': '0.75rem',    // 12px
  'xl': '1rem',       // 16px
  '2xl': '1.5rem',    // 24px
  '3xl': '2rem',      // 32px
  'full': '9999px',
};

// SHADOWS
const boxShadow = {
  'none': 'none',
  'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  // Glassmorphism-specific shadows
  'glass': '0 10px 30px rgba(0, 0, 0, 0.05)',
  'glass-strong': '0 15px 35px rgba(0, 0, 0, 0.1)',
};

// BLUR
const backdropBlur = {
  'none': '0',
  'xs': '2px',
  'sm': '4px',
  'md': '8px',
  'lg': '12px',
  'xl': '16px',
  '2xl': '24px',
  '3xl': '32px',
};

// ANIMATION
const animation = {
  none: 'none',
  spin: 'spin 1s linear infinite',
  ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  bounce: 'bounce 1s infinite',
  float: 'float 6s ease-in-out infinite',
  'scale-in': 'scale-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
};

const keyframes = {
  spin: {
    to: {
      transform: 'rotate(360deg)',
    },
  },
  ping: {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0',
    },
  },
  pulse: {
    '0%, 100%': {
      opacity: '1',
    },
    '50%': {
      opacity: '0.5',
    },
  },
  bounce: {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
    },
    '50%': {
      transform: 'translateY(0)',
      animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
  float: {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0px)' },
  },
  'scale-in': {
    '0%': { transform: 'scale(0.5)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
};

// GLASSMORPHISM
const glassStyles = {
  light: {
    background: 'rgba(255, 255, 255, 0.08)',
    border: 'rgba(255, 255, 255, 0.12)',
    shadow: 'rgba(0, 0, 0, 0.05)',
  },
  dark: {
    background: 'rgba(20, 20, 22, 0.7)',
    border: 'rgba(255, 255, 255, 0.05)',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(255, 255, 255, 0.15)',
    shadow: 'rgba(0, 0, 0, 0.05)',
  },
};

// TRANSITIONS
const transitionProperty = {
  none: 'none',
  all: 'all',
  DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  colors: 'background-color, border-color, color, fill, stroke',
  opacity: 'opacity',
  shadow: 'box-shadow',
  transform: 'transform',
};

const transitionTimingFunction = {
  DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  'soft': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  'elastic': 'cubic-bezier(0.16, 1, 0.3, 1)',
};

const transitionDuration = {
  DEFAULT: '150ms',
  75: '75ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  300: '300ms',
  500: '500ms',
  700: '700ms',
  1000: '1000ms',
};

// Export all design tokens
export default {
  colors,
  typography,
  spacing,
  borderRadius,
  boxShadow,
  backdropBlur,
  animation,
  keyframes,
  glassStyles,
  transitionProperty,
  transitionTimingFunction,
  transitionDuration,
};
