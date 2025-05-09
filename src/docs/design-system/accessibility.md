# Accessibility Guidelines

This document outlines the accessibility standards and practices for the Revo Utilities design system. All components and patterns should follow these guidelines to ensure our application is usable by people of all abilities.

## Standards

The Revo Utilities application aims to conform to [WCAG 2.1 AA standards](https://www.w3.org/WAI/standards-guidelines/wcag/). This means our interfaces must be:

1. **Perceivable** - Information and UI components must be presentable to users in ways they can perceive
2. **Operable** - UI components and navigation must be operable by all users
3. **Understandable** - Information and operation of the UI must be understandable
4. **Robust** - Content must be robust enough to be interpreted by a wide variety of user agents and assistive technologies

## Design Principles

### Color and Contrast

- Maintain a **minimum contrast ratio of 4.5:1** for normal text and 3:1 for large text
- Never use color as the only means of conveying information
- Ensure focus states have sufficient contrast against all backgrounds
- Provide alternate visual indicators alongside color-based states

Example of proper contrast implementation:

```css
/* Good contrast */
.text-primary-800 { /* Dark primary color with sufficient contrast */ }

/* Text on colored backgrounds */
.bg-primary-600 .text-white { /* Passes contrast check */ }
```

### Typography

- Maintain a minimum font size of **16px for body text**
- Use relative units (em, rem) instead of fixed pixel sizes
- Ensure adequate line spacing (1.5 for body text)
- Allow text to be resized up to 200% without loss of functionality
- Maintain left-aligned text for readability (not justified)

### Focus Management

- Ensure all interactive elements have visible focus states
- Maintain logical tab order that follows visual layout
- Skip navigation links for keyboard users
- Ensure custom components maintain focus appropriately

Example focus styling:

```css
:focus-visible {
  outline: 2px solid var(--primary-600);
  outline-offset: 2px;
}
```

### Keyboard Navigation

- All functionality must be accessible via keyboard only
- Use standard keyboard interactions for components:
  - Buttons and links: Enter/Space
  - Dropdowns: Arrow keys, Enter, Escape
  - Modals: Escape to close
  - Focus trapping in dialogs and popups

### Screen Reader Support

- Provide meaningful text alternatives for non-text content
- Use semantic HTML elements appropriately
- Include proper ARIA attributes when necessary
- Test with popular screen readers (NVDA, VoiceOver, JAWS)

## Component-Specific Guidelines

### Buttons

- Always provide descriptive text for buttons
- For icon-only buttons, include `aria-label`
- Ensure minimum touch target size of 44x44px for mobile

```jsx
// Icon-only button with proper accessibility
<Button 
  variant="ghost" 
  size="icon" 
  icon={<CloseIcon />} 
  aria-label="Close dialog"
/>
```

### Forms

- Associate labels with form controls using `for` and `id` attributes
- Provide clear error messages for validation errors
- Group related form elements with `fieldset` and `legend`
- Use appropriate input types (email, tel, etc.)

```jsx
<Input
  id="email-input"
  label="Email Address"
  type="email"
  required
  aria-describedby="email-helper"
/>
<p id="email-helper" className="text-sm">We'll never share your email.</p>
```

### Images and Media

- Provide alt text for all images
- Include captions and transcripts for video content
- Ensure media is not set to autoplay

```jsx
<img 
  src="/path/to/image.jpg" 
  alt="Description of the image content" 
/>
```

### Tables

- Use proper table structure with `<thead>`, `<tbody>`, and `<th>` elements
- Add column and row headers as appropriate
- Include caption or summary for complex tables

```jsx
<table>
  <caption>Monthly utility costs by provider</caption>
  <thead>
    <tr>
      <th scope="col">Provider</th>
      <th scope="col">Gas</th>
      <th scope="col">Electricity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Provider A</th>
      <td>$75</td>
      <td>$95</td>
    </tr>
  </tbody>
</table>
```

### Interactive Elements

- Ensure all custom components support keyboard interaction
- Provide appropriate ARIA roles and states
- Test with assistive technologies

### Motion and Animation

- Respect user preferences for reduced motion
- Provide alternatives for content that moves or blinks
- Keep animations under 5 seconds or provide controls to pause/stop

```jsx
// Respect prefers-reduced-motion
const prefersReducedMotion = 
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const animationSettings = prefersReducedMotion 
  ? { duration: 0 } // No animation
  : { duration: 0.3 }; // Normal animation
```

## Testing and Validation

### Automated Testing

- Use automated tools as a first pass:
  - Lighthouse Accessibility audit
  - axe DevTools
  - WAVE Web Accessibility Evaluation Tool

### Manual Testing

- Keyboard-only navigation testing
- Screen reader testing with NVDA, VoiceOver, or JAWS
- Color contrast checking
- Zoom testing (up to 200%)

### Testing Checklist

- [ ] All interactive elements are keyboard accessible
- [ ] Proper heading structure (h1-h6) in logical order
- [ ] Text alternatives for images and media
- [ ] Sufficient color contrast
- [ ] Form inputs have associated labels
- [ ] ARIA attributes are used correctly
- [ ] Page works with screen readers
- [ ] Page is usable at 200% zoom

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Inclusive Components](https://inclusive-components.design/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Deque University](https://dequeuniversity.com/)
