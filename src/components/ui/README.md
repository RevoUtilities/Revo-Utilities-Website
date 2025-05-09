# Revo Utilities Component Library

This component library provides a consistent set of UI components that follow the Revo Utilities design system. All components utilize the design tokens defined in `src/designTokens.js` and `src/styles/tokens.css`.

## Component Types

The library is organized into several categories:

### Base Components
- `Button` - Multi-variant, accessible button component with icon support
- `Card` - Container component for content grouping
- `Badge` - Label and status indicators
- `Avatar` - User profile images and initials
- `Spinner` - Loading indicators

### Form Components
- `Input` - Text input fields with icons and validation states
- `Checkbox` - Binary selection component
- `Radio` - Single option selection
- `Select` - Option selection with dropdown
- `Switch` - Toggle control

### Layout Components
- `Container` - Layout wrapper with responsive behavior
- `Grid` - Two-dimensional layout system
- `Divider` - Content separators with optional labels

### Feedback Components
- `Alert` - Notifications and messages
- `Toast` - Temporary feedback notifications

### Navigation Components
- `Breadcrumb` - Hierarchical navigation
- `Tabs` - Content organization
- `Pagination` - Multi-page navigation

## Usage

All components are available from a single import:

```tsx
import { Button, Card, Input } from '../components/ui';

function MyComponent() {
  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>Example Card</Card.Title>
          <Card.Description>This is an example of a card component.</Card.Description>
        </Card.Header>
        
        <Card.Content>
          <Input 
            label="Name" 
            placeholder="Enter your name"
          />
          
          <div className="mt-4">
            <Button>Submit</Button>
          </div>
        </Card.Content>
      </Card>
    </Container>
  );
}
```

## Component Design Principles

All components follow these design principles:

1. **Consistent API** - Similar props across components (variant, size, etc.)
2. **Composition-based** - Components can be combined in flexible ways
3. **Accessible by default** - ARIA attributes, keyboard navigation
4. **Responsive** - Adapts to different screen sizes
5. **Theme-aware** - Utilizes design tokens for styling
6. **Customizable** - Accept className props for extending styles

## Customization

Each component accepts a `className` prop that is merged with the default styles, allowing for custom styling:

```tsx
<Button 
  variant="primary" 
  className="my-custom-button-class"
>
  Custom Button
</Button>
```

## Compound Components

Some components like `Card` follow the compound component pattern:

```tsx
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
  </Card.Header>
  <Card.Content>Content</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

## Utility Function

The `cn` function from `src/utils/cn.ts` is used throughout the component library to merge class names and handle Tailwind conflicts:

```tsx
import { cn } from '../../utils/cn';

// Example usage inside a component
className={cn(
  'base-classes',
  variant === 'primary' && 'primary-classes',
  className // User-provided classes
)}
```
