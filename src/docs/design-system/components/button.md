# Button

The Button component is a versatile interactive element used to trigger actions throughout the application. It supports multiple variants, sizes, and states to accommodate different use cases and design contexts.

## Import

```tsx
import { Button } from '../components/ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'glass' \| 'ghost' \| 'link' \| 'danger'` | `'primary'` | Visual style of the button |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Size of the button |
| `fullWidth` | `boolean` | `false` | Whether the button should take up the full width of its container |
| `iconPosition` | `'left' \| 'right'` | `'right'` | Position of the icon relative to the button text |
| `icon` | `ReactNode` | - | Icon to display in the button |
| `isLoading` | `boolean` | `false` | Whether the button is in a loading state |
| `loadingText` | `string` | - | Text to display while the button is loading |
| `to` | `string` | - | React Router link destination |
| `href` | `string` | - | External link destination |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Button content |

Plus all standard button HTML attributes.

## Variants

### Primary (Default)

The primary button is used for the main action in a section or page.

```tsx
<Button variant="primary">Primary Button</Button>
```

![Primary Button](../assets/button-primary.png)

### Secondary

Used for secondary actions that are less prominent than the primary action.

```tsx
<Button variant="secondary">Secondary Button</Button>
```

![Secondary Button](../assets/button-secondary.png)

### Outline

A button with a transparent background and colored border.

```tsx
<Button variant="outline">Outline Button</Button>
```

![Outline Button](../assets/button-outline.png)

### Glass

A button with a glassmorphic effect, typically used on darker backgrounds.

```tsx
<Button variant="glass">Glass Button</Button>
```

![Glass Button](../assets/button-glass.png)

### Ghost

A minimal button that only shows its background on hover.

```tsx
<Button variant="ghost">Ghost Button</Button>
```

![Ghost Button](../assets/button-ghost.png)

### Link

A button that looks like a text link.

```tsx
<Button variant="link">Link Button</Button>
```

![Link Button](../assets/button-link.png)

### Danger

Used for destructive actions that require user attention.

```tsx
<Button variant="danger">Danger Button</Button>
```

![Danger Button](../assets/button-danger.png)

## Sizes

The button comes in three sizes:

```tsx
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>
<Button size="icon" icon={<PlusIcon />} />
```

![Button Sizes](../assets/button-sizes.png)

## With Icons

Buttons can include icons on either side of the text:

```tsx
<Button icon={<PlusIcon />} iconPosition="left">
  Left Icon
</Button>

<Button icon={<ArrowRightIcon />}>
  Right Icon (Default)
</Button>
```

![Button with Icons](../assets/button-icons.png)

## Loading State

Buttons can display a loading state:

```tsx
<Button isLoading>Loading</Button>
<Button isLoading loadingText="Processing...">Submit</Button>
```

![Loading Button](../assets/button-loading.png)

## As Links

Buttons can function as links using the `to` or `href` props:

```tsx
// Internal link using React Router
<Button to="/dashboard">Go to Dashboard</Button>

// External link
<Button href="https://example.com" target="_blank">
  External Link
</Button>
```

## Full Width

Make a button take up 100% of its container's width:

```tsx
<Button fullWidth>Full Width Button</Button>
```

![Full Width Button](../assets/button-full-width.png)

## Combining Props

Props can be combined for different effects:

```tsx
<Button 
  variant="primary" 
  size="lg" 
  icon={<SaveIcon />} 
  iconPosition="left"
  fullWidth
>
  Save Changes
</Button>
```

## Accessibility

- Buttons use native HTML `<button>` elements when not functioning as links
- When acting as links, they use `<a>` or React Router's `<Link>` component
- Loading states include a loading spinner with appropriate ARIA attributes
- Focus states are visually indicated for keyboard navigation
- For icon-only buttons, always provide an `aria-label` for screen readers:

```tsx
<Button 
  variant="ghost"
  size="icon" 
  icon={<CloseIcon />} 
  aria-label="Close dialog"
/>
```

## Best Practices

1. **Use clear, action-oriented text** (e.g., "Save Changes" instead of "OK")
2. **Be consistent with button styles** across the application
3. **Use the appropriate variant** for the action's importance
4. **Avoid using too many buttons** in a single section
5. **Primary buttons should be used sparingly** (typically one per section)
6. **Use color to communicate purpose**, not just for decoration
7. **Include loading states** for actions that take time to complete
