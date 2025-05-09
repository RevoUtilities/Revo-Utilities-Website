# Card

The Card component is a versatile container for grouping related content and actions. It provides visual separation and structure to information, supporting various visual styles and content layouts.

## Import

```tsx
import { Card } from '../components/ui';

// Compound components
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '../components/ui';
```

## Props

### Card Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'glass' \| 'outline' \| 'filled' \| 'gradient'` | `'default'` | Visual style of the card |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| 'full'` | `'2xl'` | Border radius of the card |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Internal padding of the card |
| `interactive` | `boolean` | `false` | Whether the card has hover effects |
| `bordered` | `boolean` | `true` | Whether the card has a border |
| `onClick` | `() => void` | - | Click handler function |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Card content |

Plus all standard HTML div attributes.

### Child Components

All child components (`CardHeader`, `CardTitle`, etc.) accept standard HTML attributes plus a `className` prop for additional styling.

## Variants

### Default

The standard card with a white background and subtle shadow.

```tsx
<Card>
  <CardContent>Default Card</CardContent>
</Card>
```

![Default Card](../assets/card-default.png)

### Glass

A card with a translucent glass effect, ideal for overlay content.

```tsx
<Card variant="glass">
  <CardContent>Glass Card</CardContent>
</Card>
```

![Glass Card](../assets/card-glass.png)

### Outline

A minimal card with just a border and no background.

```tsx
<Card variant="outline">
  <CardContent>Outline Card</CardContent>
</Card>
```

![Outline Card](../assets/card-outline.png)

### Filled

A card with a light gray background.

```tsx
<Card variant="filled">
  <CardContent>Filled Card</CardContent>
</Card>
```

![Filled Card](../assets/card-filled.png)

### Gradient

A card with a subtle gradient background using the primary color.

```tsx
<Card variant="gradient">
  <CardContent>Gradient Card</CardContent>
</Card>
```

![Gradient Card](../assets/card-gradient.png)

## Border Radius

Cards support various border radius options:

```tsx
<Card radius="none">Sharp Corners</Card>
<Card radius="sm">Small Radius</Card>
<Card radius="md">Medium Radius</Card>
<Card radius="lg">Large Radius</Card>
<Card radius="xl">Extra Large Radius</Card>
<Card radius="2xl">2XL Radius (Default)</Card>
<Card radius="3xl">3XL Radius</Card>
<Card radius="full">Fully Rounded</Card>
```

## Padding

Control the internal spacing of the card:

```tsx
<Card padding="none">No Padding</Card>
<Card padding="sm">Small Padding</Card>
<Card padding="md">Medium Padding (Default)</Card>
<Card padding="lg">Large Padding</Card>
<Card padding="xl">Extra Large Padding</Card>
```

## Interactive Cards

Make cards respond to hover with elevation and movement:

```tsx
<Card interactive>
  <CardContent>This card has hover effects</CardContent>
</Card>
```

## Compound Structure

The Card component follows a compound component pattern for structured content:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>This is a description of the card.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

![Card Structure](../assets/card-structure.png)

## As Interactive Elements

Cards can function as clickable elements:

```tsx
<Card 
  interactive 
  onClick={() => console.log('Card clicked')}
  aria-label="View details"
>
  <CardContent>Click this card</CardContent>
</Card>
```

## Combining Props

Properties can be combined for different effects:

```tsx
<Card 
  variant="glass" 
  radius="xl" 
  padding="lg" 
  interactive
>
  <CardContent>Custom card</CardContent>
</Card>
```

## Nesting Cards

Cards can be nested for complex layouts:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Parent Card</CardTitle>
  </CardHeader>
  <CardContent>
    <Card variant="outline">
      <CardContent>Nested Card</CardContent>
    </Card>
  </CardContent>
</Card>
```

## Accessibility

- Use appropriate heading levels within cards for proper content hierarchy
- If a card is clickable (`interactive` + `onClick`), ensure it has an `aria-label`
- Maintain sufficient color contrast between card background and text
- When using cards as navigation, consider using proper semantic elements

## Best Practices

1. **Use consistent card variations** for similar content types
2. **Avoid overcrowding** cards with too much content
3. **Maintain consistent spacing** between cards in a grid or list
4. **Use the card header** for titles and metadata
5. **Place primary actions** in the card footer
6. **Consider the information hierarchy** when structuring card content
7. **Use interactive cards sparingly** and only when the entire card represents a single action
