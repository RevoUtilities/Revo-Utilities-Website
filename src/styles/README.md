# Revo Utilities Design Token System

This directory contains the design token system that serves as the foundation for the Revo Utilities design system. These tokens ensure consistency across all UI components and screens.

## File Structure

- `tokens.css` - CSS variables for direct use in component styles
- `../designTokens.js` - JavaScript implementation for Tailwind integration

## Usage Guidelines

### In CSS/SCSS

Use CSS variables directly in your styles:

```css
.my-component {
  color: var(--primary-color);
  font-size: var(--font-size-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-md);
}
```

### In Tailwind Classes

Use Tailwind utility classes which reference the same tokens:

```jsx
<div className="text-primary text-lg p-4 shadow-md">
  Content
</div>
```

### In React Components

For dynamic styling in components, access token values directly:

```jsx
import designTokens from '../designTokens';

function MyComponent() {
  const dynamicStyle = {
    backgroundColor: designTokens.colors.primary[600],
    fontSize: designTokens.typography.fontSize.lg[0],
  };
  
  return <div style={dynamicStyle}>Dynamic styling</div>;
}
```

## Token Categories

### Colors

- **Brand Colors**: `primary-[50-900]` (lime/chartreuse)
- **Neutral Colors**: `neutral-[50-900]` (grays)
- **Semantic Colors**: `success`, `warning`, `danger`, `info`

### Typography

- **Font Family**: `--font-family-sans`
- **Font Sizes**: `--font-size-[xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl]`
- **Font Weights**: `--font-weight-[light, normal, medium, semibold, bold]`
- **Line Heights**: `--line-height-[none, tight, snug, normal, relaxed, loose]`

### Spacing

A consistent scale with `--space-[1-96]` tokens, based on 4px units

### Borders

Border radiuses from minimal to circular: `--radius-[sm, base, md, lg, xl, 2xl, 3xl, full]`

### Shadows

Multiple elevation levels: `--shadow-[sm, base, md, lg, xl, 2xl, inner]`

### Animation

- **Durations**: `--duration-[75, 100, 150, 200, 300, 500, 700, 1000]`
- **Easing**: `--ease-[linear, in, out, in-out, soft, elastic]`

## Backward Compatibility

The design token system maintains backward compatibility with existing code through:

1. Keeping legacy CSS variables like `--primary-color` alongside new tokens
2. Mapping old variable names to new token values
3. Maintaining specialised glassmorphism tokens

## Extending the System

When adding new tokens:

1. Add the token to `designTokens.js` first
2. Sync the token in `tokens.css` 
3. Update the Tailwind configuration if necessary
4. Document the new token in this README
