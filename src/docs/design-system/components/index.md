# Component Library

The Revo Utilities component library provides a set of consistent, reusable UI components built on our design token system. These components leverage Tailwind CSS and React to deliver a modern, accessible user interface.

## Component Categories

Our components are organized into the following categories:

- [Base Components](#base-components)
- [Form Components](#form-components)
- [Layout Components](#layout-components)
- [Feedback Components](#feedback-components)
- [Navigation Components](#navigation-components)

## Base Components

Foundational components used throughout the application:

- [Button](./button.md) - Multi-variant action triggers
- [Card](./card.md) - Content containers for information grouping
- [Badge](./badge.md) - Labels and status indicators
- [Avatar](./avatar.md) - User profile representations
- [Spinner](./spinner.md) - Loading indicators

## Form Components

Components for user input and data collection:

- [Input](./input.md) - Text input fields
- [Checkbox](./checkbox.md) - Binary selection controls
- [Radio](./radio.md) - Single option selection
- [Select](./select.md) - Dropdown option selection
- [Switch](./switch.md) - Toggle controls

## Layout Components

Components for page structure and content organization:

- [Container](./container.md) - Consistent layout wrapper
- [Grid](./grid.md) - Two-dimensional layout system
- [Divider](./divider.md) - Content separators

## Feedback Components

Components for user notifications and feedback:

- [Alert](./alert.md) - Status and feedback messages
- [Toast](./toast.md) - Temporary notifications

## Navigation Components

Components for moving between different parts of the application:

- [Breadcrumb](./breadcrumb.md) - Hierarchical navigation
- [Tabs](./tabs.md) - Content organization
- [Pagination](./pagination.md) - Multi-page navigation

## Usage Guidelines

### Component Composition

Components are designed to be composed together to create complex UIs:

```jsx
<Card>
  <Card.Header>
    <Card.Title>User Profile</Card.Title>
    <Card.Description>Update your account information</Card.Description>
  </Card.Header>
  <Card.Content>
    <Input label="Name" placeholder="Enter your name" />
    <div className="mt-4">
      <Checkbox label="Receive notifications" />
    </div>
  </Card.Content>
  <Card.Footer>
    <Button>Save Changes</Button>
  </Card.Footer>
</Card>
```

### Customization

All components accept a `className` prop that can be used to extend their styles:

```jsx
<Button 
  variant="primary" 
  className="my-custom-button-class"
>
  Custom Button
</Button>
```

### Responsive Design

Components are designed to be responsive by default. Use responsive utility classes from Tailwind CSS to adjust their behavior at different breakpoints:

```jsx
<Container className="md:max-w-screen-md lg:max-w-screen-lg">
  Responsive container
</Container>
```

### Accessibility

All components are built with accessibility in mind and include appropriate ARIA attributes. Always provide descriptive text for screen readers when necessary:

```jsx
<Button aria-label="Close dialog">
  <XIcon />
</Button>
```

## Component API Reference

Each component's documentation includes:

1. **Overview** - A brief description of the component
2. **Props** - Detailed description of all available props
3. **Variants** - Visual and functional variations
4. **Examples** - Code examples showing common use cases
5. **Accessibility** - Specific accessibility considerations

For detailed documentation on each component, follow the links in the component categories above.
