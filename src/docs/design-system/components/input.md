# Input

The Input component provides a consistent way to collect user text input with support for various states, icons, and validation feedback.

## Import

```tsx
import { Input } from '../components/ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'filled' \| 'glass' \| 'outline' \| 'unstyled'` | `'default'` | Visual style of the input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the input |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `'lg'` | Border radius of the input |
| `validation` | `'success' \| 'error' \| 'warning'` | - | Validation state |
| `leftIcon` | `ReactNode` | - | Icon to display at the left side of the input |
| `rightIcon` | `ReactNode` | - | Icon to display at the right side of the input |
| `label` | `string` | - | Label text for the input |
| `helperText` | `string` | - | Helper text displayed below the input |
| `errorText` | `string` | - | Error message displayed below the input |
| `containerClassName` | `string` | - | Additional CSS classes for the container |
| `className` | `string` | - | Additional CSS classes for the input element |

Plus all standard HTML input attributes.

## Variants

### Default

Standard input with a white background and border.

```tsx
<Input placeholder="Default input" />
```

![Default Input](../assets/input-default.png)

### Filled

Input with a light background that changes to white on focus.

```tsx
<Input variant="filled" placeholder="Filled input" />
```

![Filled Input](../assets/input-filled.png)

### Glass

Input with a translucent glass effect, ideal for overlay forms.

```tsx
<Input variant="glass" placeholder="Glass input" />
```

![Glass Input](../assets/input-glass.png)

### Outline

Input with a more pronounced border.

```tsx
<Input variant="outline" placeholder="Outline input" />
```

![Outline Input](../assets/input-outline.png)

### Unstyled

A minimal input without borders or background, useful for custom styling.

```tsx
<Input variant="unstyled" placeholder="Unstyled input" />
```

![Unstyled Input](../assets/input-unstyled.png)

## Sizes

The input comes in three sizes:

```tsx
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />
```

![Input Sizes](../assets/input-sizes.png)

## With Label and Helper Text

Add context to your inputs with labels and helper text:

```tsx
<Input 
  label="Email Address"
  placeholder="Enter your email"
  helperText="We'll never share your email with anyone else."
/>
```

![Input with Label and Helper](../assets/input-with-label.png)

## With Icons

Add icons to either side of the input for additional context:

```tsx
<Input 
  leftIcon={<MailIcon />}
  placeholder="Enter your email"
/>

<Input 
  rightIcon={<SearchIcon />}
  placeholder="Search..."
/>
```

![Input with Icons](../assets/input-with-icons.png)

## Validation States

Display validation feedback:

```tsx
<Input 
  validation="success"
  value="valid@email.com"
  label="Email"
  helperText="Email is valid"
/>

<Input 
  validation="error"
  value="invalid@email"
  label="Email"
  errorText="Please enter a valid email address"
/>

<Input 
  validation="warning"
  value="temporary@email.com"
  label="Email"
  helperText="Consider using a permanent email address"
/>
```

![Input Validation](../assets/input-validation.png)

## Disabled State

Inputs can be disabled:

```tsx
<Input 
  disabled
  value="Disabled input"
  label="Status"
/>
```

![Disabled Input](../assets/input-disabled.png)

## Full Example

A comprehensive example combining multiple features:

```tsx
<Input 
  variant="filled"
  size="md"
  radius="xl"
  label="Email Address"
  placeholder="Enter your email"
  leftIcon={<MailIcon />}
  helperText="We'll never share your email with anyone else."
  id="email-input"
  name="email"
  type="email"
  required
/>
```

## Form Integration

The Input component works seamlessly with form libraries like React Hook Form:

```tsx
import { useForm } from 'react-hook-form';
import { Input, Button } from '../components/ui';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        label="Email"
        validation={errors.email ? "error" : undefined}
        errorText={errors.email?.message}
        {...register("email", { 
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })}
      />
      
      <div className="mt-4">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}
```

## Accessibility

- Inputs are associated with their labels using the `id` attribute
- Validation states include appropriate ARIA attributes
- Focus states are clearly visible for keyboard navigation
- Error messages are linked to inputs for screen readers
- Helper text provides additional context for all users

## Best Practices

1. **Always use labels** for form inputs
2. **Provide clear error messages** when validation fails
3. **Use helper text** to provide additional context
4. **Choose appropriate input types** (email, password, etc.)
5. **Use icons thoughtfully** to enhance understanding
6. **Group related inputs** using consistent spacing
7. **Maintain consistent validation** across all form inputs
