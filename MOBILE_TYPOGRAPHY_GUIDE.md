# Mobile Typography Improvements Guide

## Overview

This guide documents the mobile typography improvements implemented to address font size inconsistencies and improve readability on mobile devices.

## Issues Addressed

### 1. Font Size Jumping
**Problem**: Large jumps between breakpoints (e.g., `text-4xl md:text-5xl lg:text-6xl`) created jarring transitions
**Solution**: Implemented gradual scaling with intermediate breakpoints:
- `text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl`

### 2. Mobile Readability
**Problem**: Font sizes weren't optimised for small screens and touch interaction
**Solution**: Added mobile-specific CSS with:
- `clamp()` functions for fluid typography
- Improved line heights for mobile reading
- Better touch target sizing

### 3. Design System Gaps
**Problem**: Missing intermediate font sizes for smoother scaling
**Solution**: Added intermediate sizes to design tokens:
- `3.5xl`: 2.7rem
- `4.5xl`: 3.4rem  
- `5.5xl`: 4.2rem

## Implementation Details

### Design Tokens Updated

#### `src/designTokens.js`
```javascript
fontSize: {
  // ... existing sizes
  // Mobile-optimised intermediate sizes for smoother scaling
  '3.5xl': ['2.7rem', { lineHeight: '1.1' }],
  '4.5xl': ['3.4rem', { lineHeight: '1.05' }],
  '5.5xl': ['4.2rem', { lineHeight: '1' }],
}
```

#### `src/styles/tokens.css`
```css
/* Mobile-optimised intermediate sizes for smoother scaling */
--font-size-3-5xl: 2.7rem;
--font-size-4-5xl: 3.4rem;
--font-size-5-5xl: 4.2rem;
```

### Mobile Typography CSS

#### `src/styles/mobileTypography.css`
- **Mobile-first approach**: Base styles optimised for mobile
- **Fluid typography**: Uses `clamp()` for responsive scaling
- **Accessibility**: Respects user preferences for reduced motion
- **Performance**: Optimised for high DPI displays

### Services Page Updates

Updated all major headings to use gradual scaling:

```tsx
// Before
<h1 className="text-4xl md:text-5xl lg:text-6xl">

// After  
<h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
```

## Typography Scale

### Mobile (320px - 640px)
- **H1**: 1.75rem - 2.5rem (clamp)
- **H2**: 1.5rem - 2.25rem (clamp)
- **H3**: 1.25rem - 1.875rem (clamp)
- **Body**: 16px (prevents iOS zoom)

### Tablet (641px - 1024px)
- **H1**: 2rem - 3rem (clamp)
- **H2**: 1.75rem - 2.5rem (clamp)
- **H3**: 1.5rem - 2rem (clamp)

### Desktop (1025px+)
- Uses existing design system scale
- Maintains visual hierarchy

## Best Practices

### 1. Use Gradual Scaling
```tsx
// ✅ Good - Gradual scaling
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"

// ❌ Avoid - Large jumps
className="text-2xl md:text-5xl"
```

### 2. Consider Mobile First
- Start with mobile-appropriate sizes
- Scale up gradually
- Test on actual devices

### 3. Maintain Hierarchy
- Ensure heading hierarchy is clear at all breakpoints
- Don't sacrifice readability for design
- Consider content length

### 4. Test Across Devices
- Test on various screen sizes
- Check orientation changes
- Verify accessibility compliance

## Browser Support

### Modern Features Used
- `clamp()`: Supported in all modern browsers
- CSS Grid: Full support
- Flexbox: Full support

### Fallbacks
- Progressive enhancement approach
- Graceful degradation for older browsers

## Performance Considerations

### Font Loading
- Uses system fonts where possible
- Inter font loaded efficiently
- Font display optimised

### CSS Optimisation
- Mobile-first CSS reduces unused styles
- Efficient selectors
- Minimal specificity conflicts

## Accessibility

### WCAG Compliance
- Maintains 4.5:1 contrast ratio
- Supports screen readers
- Respects user preferences

### User Preferences
- `prefers-reduced-motion`: Removes animations
- `prefers-color-scheme`: Dark mode support
- High contrast mode support

## Testing Checklist

- [ ] Test on iPhone SE (smallest common screen)
- [ ] Test on iPad (tablet breakpoint)
- [ ] Test on desktop (large screens)
- [ ] Test orientation changes
- [ ] Test with reduced motion enabled
- [ ] Test with high contrast mode
- [ ] Verify no horizontal scrolling
- [ ] Check touch target sizes (44px minimum)

## Future Improvements

### Potential Enhancements
1. **Variable fonts**: Better font weight control
2. **Container queries**: More precise responsive design
3. **Logical properties**: Better internationalisation support
4. **CSS Grid subgrid**: More flexible layouts

### Monitoring
- Track Core Web Vitals
- Monitor font loading performance
- User feedback on readability
- Analytics on mobile engagement

## Maintenance

### Regular Updates
- Review font sizes quarterly
- Update based on user feedback
- Monitor new device sizes
- Keep design tokens in sync

### Documentation
- Keep this guide updated
- Document any new patterns
- Share learnings with team
- Maintain browser support matrix

---

**Last Updated**: December 2024  
**Version**: 1.0  
**Author**: AI Assistant
