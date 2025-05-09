# Design Tokens

Design tokens are the foundational building blocks of our design system. They represent the smallest visual elements like colors, typography, spacing, and effects that are used across the application to ensure visual consistency.

## Color Tokens

Our color palette consists of primary brand colors, neutral colors, and semantic colors for feedback and status indicators.

### Primary Colors

The primary color palette is a lime/chartreuse family that represents the brand's energy and environmental focus:

| Token | Value | Example |
|-------|-------|---------|
| `primary-50` | `#F8FADC` | <div style="width: 20px; height: 20px; background-color: #F8FADC; display: inline-block; border: 1px solid #ccc;"></div> |
| `primary-100` | `#F2F5BA` | <div style="width: 20px; height: 20px; background-color: #F2F5BA; display: inline-block; border: 1px solid #ccc;"></div> |
| `primary-200` | `#E5EB8F` | <div style="width: 20px; height: 20px; background-color: #E5EB8F; display: inline-block; border: 1px solid #ccc;"></div> |
| `primary-300` | `#D8E164` | <div style="width: 20px; height: 20px; background-color: #D8E164; display: inline-block; border: 1px solid #ccc;"></div> |
| `primary-400` | `#CCD738` | <div style="width: 20px; height: 20px; background-color: #CCD738; display: inline-block; border: 1px solid #ccc;"></div> |
| `primary-500` | `#C5D200` | <div style="width: 20px; height: 20px; background-color: #C5D200; display: inline-block; border: 1px solid #ccc;"></div> |
| `primary-600` | `#9EA800` | <div style="width: 20px; height: 20px; background-color: #9EA800; display: inline-block; border: 1px solid #ccc;"></div> |
| `primary-700` | `#778000` | <div style="width: 20px; height: 20px; background-color: #778000; display: inline-block; border: 1px solid #ccc;"></div> |
| `primary-800` | `#4F5500` | <div style="width: 20px; height: 20px; background-color: #4F5500; display: inline-block; border: 1px solid #ccc;"></div> |
| `primary-900` | `#282B00` | <div style="width: 20px; height: 20px; background-color: #282B00; display: inline-block; border: 1px solid #ccc;"></div> |

### Neutral Colors

Neutral colors are used for text, backgrounds, and UI elements:

| Token | Value | Example |
|-------|-------|---------|
| `neutral-50` | `#F8F9FA` | <div style="width: 20px; height: 20px; background-color: #F8F9FA; display: inline-block; border: 1px solid #ccc;"></div> |
| `neutral-100` | `#F1F3F5` | <div style="width: 20px; height: 20px; background-color: #F1F3F5; display: inline-block; border: 1px solid #ccc;"></div> |
| `neutral-200` | `#E9ECEF` | <div style="width: 20px; height: 20px; background-color: #E9ECEF; display: inline-block; border: 1px solid #ccc;"></div> |
| `neutral-300` | `#DEE2E6` | <div style="width: 20px; height: 20px; background-color: #DEE2E6; display: inline-block; border: 1px solid #ccc;"></div> |
| `neutral-400` | `#CED4DA` | <div style="width: 20px; height: 20px; background-color: #CED4DA; display: inline-block; border: 1px solid #ccc;"></div> |
| `neutral-500` | `#ADB5BD` | <div style="width: 20px; height: 20px; background-color: #ADB5BD; display: inline-block; border: 1px solid #ccc;"></div> |
| `neutral-600` | `#6C757D` | <div style="width: 20px; height: 20px; background-color: #6C757D; display: inline-block; border: 1px solid #ccc;"></div> |
| `neutral-700` | `#495057` | <div style="width: 20px; height: 20px; background-color: #495057; display: inline-block; border: 1px solid #ccc;"></div> |
| `neutral-800` | `#343A40` | <div style="width: 20px; height: 20px; background-color: #343A40; display: inline-block; border: 1px solid #ccc;"></div> |
| `neutral-900` | `#212529` | <div style="width: 20px; height: 20px; background-color: #212529; display: inline-block; border: 1px solid #ccc;"></div> |

### Semantic Colors

Semantic colors communicate feedback and status:

| Token | Description | Value | Example |
|-------|-------------|-------|---------|
| `success-500` | Success state | `#10B981` | <div style="width: 20px; height: 20px; background-color: #10B981; display: inline-block; border: 1px solid #ccc;"></div> |
| `warning-500` | Warning state | `#F59E0B` | <div style="width: 20px; height: 20px; background-color: #F59E0B; display: inline-block; border: 1px solid #ccc;"></div> |
| `danger-500` | Error state | `#EF4444` | <div style="width: 20px; height: 20px; background-color: #EF4444; display: inline-block; border: 1px solid #ccc;"></div> |
| `info-500` | Information state | `#3B82F6` | <div style="width: 20px; height: 20px; background-color: #3B82F6; display: inline-block; border: 1px solid #ccc;"></div> |

## Typography

Typography tokens define font families, sizes, weights, and line heights.

### Font Family

| Token | Value |
|-------|-------|
| `font-family-sans` | `'Inter', sans-serif` |
| `font-family-mono` | `'JetBrains Mono', monospace` |

### Font Size

| Token | Value (px/rem) | Example |
|-------|---------------|---------|
| `font-size-xs` | `12px / 0.75rem` | <span style="font-size: 12px;">Extra Small Text</span> |
| `font-size-sm` | `14px / 0.875rem` | <span style="font-size: 14px;">Small Text</span> |
| `font-size-base` | `16px / 1rem` | <span style="font-size: 16px;">Base Text</span> |
| `font-size-lg` | `18px / 1.125rem` | <span style="font-size: 18px;">Large Text</span> |
| `font-size-xl` | `20px / 1.25rem` | <span style="font-size: 20px;">Extra Large Text</span> |
| `font-size-2xl` | `24px / 1.5rem` | <span style="font-size: 24px;">2XL Text</span> |
| `font-size-3xl` | `30px / 1.875rem` | <span style="font-size: 30px;">3XL Text</span> |
| `font-size-4xl` | `36px / 2.25rem` | <span style="font-size: 36px;">4XL Text</span> |
| `font-size-5xl` | `48px / 3rem` | <span style="font-size: 48px;">5XL Text</span> |
| `font-size-6xl` | `60px / 3.75rem` | <span style="font-size: 60px;">6XL Text</span> |

### Font Weight

| Token | Value | Example |
|-------|-------|---------|
| `font-weight-light` | `300` | <span style="font-weight: 300;">Light Text</span> |
| `font-weight-normal` | `400` | <span style="font-weight: 400;">Normal Text</span> |
| `font-weight-medium` | `500` | <span style="font-weight: 500;">Medium Text</span> |
| `font-weight-semibold` | `600` | <span style="font-weight: 600;">Semibold Text</span> |
| `font-weight-bold` | `700` | <span style="font-weight: 700;">Bold Text</span> |

### Line Height

| Token | Value | Description |
|-------|-------|-------------|
| `line-height-none` | `1` | No leading |
| `line-height-tight` | `1.25` | Tight leading |
| `line-height-snug` | `1.375` | Snug leading |
| `line-height-normal` | `1.5` | Normal leading |
| `line-height-relaxed` | `1.625` | Relaxed leading |
| `line-height-loose` | `2` | Loose leading |

## Spacing

Spacing tokens provide consistent measurements for layout, padding, and margins.

| Token | Value (px/rem) |
|-------|---------------|
| `space-1` | `4px / 0.25rem` |
| `space-2` | `8px / 0.5rem` |
| `space-3` | `12px / 0.75rem` |
| `space-4` | `16px / 1rem` |
| `space-5` | `20px / 1.25rem` |
| `space-6` | `24px / 1.5rem` |
| `space-8` | `32px / 2rem` |
| `space-10` | `40px / 2.5rem` |
| `space-12` | `48px / 3rem` |
| `space-16` | `64px / 4rem` |
| `space-20` | `80px / 5rem` |
| `space-24` | `96px / 6rem` |
| `space-32` | `128px / 8rem` |
| `space-40` | `160px / 10rem` |
| `space-48` | `192px / 12rem` |
| `space-56` | `224px / 14rem` |
| `space-64` | `256px / 16rem` |
| `space-72` | `288px / 18rem` |
| `space-80` | `320px / 20rem` |
| `space-96` | `384px / 24rem` |

## Borders & Radii

Border radius tokens control the roundness of elements.

| Token | Value | Example |
|-------|-------|---------|
| `radius-none` | `0px` | <div style="width: 40px; height: 40px; background-color: #CCD738; display: inline-block; border-radius: 0px;"></div> |
| `radius-sm` | `2px` | <div style="width: 40px; height: 40px; background-color: #CCD738; display: inline-block; border-radius: 2px;"></div> |
| `radius-base` | `4px` | <div style="width: 40px; height: 40px; background-color: #CCD738; display: inline-block; border-radius: 4px;"></div> |
| `radius-md` | `6px` | <div style="width: 40px; height: 40px; background-color: #CCD738; display: inline-block; border-radius: 6px;"></div> |
| `radius-lg` | `8px` | <div style="width: 40px; height: 40px; background-color: #CCD738; display: inline-block; border-radius: 8px;"></div> |
| `radius-xl` | `12px` | <div style="width: 40px; height: 40px; background-color: #CCD738; display: inline-block; border-radius: 12px;"></div> |
| `radius-2xl` | `16px` | <div style="width: 40px; height: 40px; background-color: #CCD738; display: inline-block; border-radius: 16px;"></div> |
| `radius-3xl` | `24px` | <div style="width: 40px; height: 40px; background-color: #CCD738; display: inline-block; border-radius: 24px;"></div> |
| `radius-full` | `9999px` | <div style="width: 40px; height: 40px; background-color: #CCD738; display: inline-block; border-radius: 9999px;"></div> |

## Shadows

Shadow tokens define elevation and depth in the interface.

| Token | Value | Example |
|-------|-------|---------|
| `shadow-sm` | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | <div style="width: 50px; height: 50px; background-color: white; display: inline-block; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"></div> |
| `shadow-md` | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)` | <div style="width: 50px; height: 50px; background-color: white; display: inline-block; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"></div> |
| `shadow-lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)` | <div style="width: 50px; height: 50px; background-color: white; display: inline-block; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"></div> |
| `shadow-xl` | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)` | <div style="width: 50px; height: 50px; background-color: white; display: inline-block; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);"></div> |
| `shadow-2xl` | `0 25px 50px -12px rgba(0, 0, 0, 0.25)` | <div style="width: 50px; height: 50px; background-color: white; display: inline-block; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"></div> |
| `shadow-inner` | `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)` | <div style="width: 50px; height: 50px; background-color: white; display: inline-block; box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);"></div> |
| `shadow-none` | `none` | <div style="width: 50px; height: 50px; background-color: white; display: inline-block; border: 1px dashed #ccc;"></div> |

## Animations & Transitions

Animation tokens define timing and easing functions for motion.

### Durations

| Token | Value | Description |
|-------|-------|-------------|
| `duration-75` | `75ms` | Extra fast |
| `duration-100` | `100ms` | Very fast |
| `duration-150` | `150ms` | Fast |
| `duration-200` | `200ms` | Quick |
| `duration-300` | `300ms` | Normal |
| `duration-500` | `500ms` | Medium |
| `duration-700` | `700ms` | Slow |
| `duration-1000` | `1000ms` | Very slow |

### Easing Functions

| Token | Value | Description |
|-------|-------|-------------|
| `ease-linear` | `linear` | Constant speed |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Accelerating |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Decelerating |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Accelerate then decelerate |
| `ease-soft` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Gentle acceleration/deceleration |
| `ease-elastic` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Elastic motion |

## Implementation

### CSS Variables

Design tokens are available as CSS variables defined in `src/styles/tokens.css`:

```css
:root {
  /* Colors */
  --primary-50: #F8FADC;
  --primary-100: #F2F5BA;
  /* ...and so on */

  /* Typography */
  --font-family-sans: 'Inter', sans-serif;
  --font-size-base: 1rem;
  /* ...and so on */
}
```

### Tailwind Configuration

Tokens are also configured in Tailwind through `tailwind.config.js`:

```js
import designTokens from './src/designTokens';

export default {
  theme: {
    extend: {
      colors: designTokens.colors,
      fontFamily: designTokens.typography.fontFamily,
      fontSize: designTokens.typography.fontSize,
      /* ...other token categories */
    }
  }
}
```

### JavaScript Access

For dynamic applications, tokens can be accessed directly in JavaScript:

```js
import designTokens from '../designTokens';

// Example: Get primary color
const primaryColor = designTokens.colors.primary[500]; // "#C5D200"
```
