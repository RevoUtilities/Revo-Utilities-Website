# UI Patterns & Layouts

This document outlines common UI patterns and layouts used throughout the Revo Utilities application. These patterns ensure consistent user experiences across different sections and features.

## Layout Patterns

### Page Structure

All pages follow a consistent structure:

```
┌────────────────────────────────────────┐
│               Navbar                   │
├────────────────────────────────────────┤
│                                        │
│                                        │
│                                        │
│             Page Content               │
│                                        │
│                                        │
│                                        │
├────────────────────────────────────────┤
│               Footer                   │
└────────────────────────────────────────┘
```

Implementation example:

```jsx
<div className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-grow">
    <Container>
      {/* Page content */}
    </Container>
  </main>
  <Footer />
</div>
```

### Content Sections

Each content section should follow this structure:

```
┌────────────────────────────────────────┐
│ Section Title                          │
│ Optional subtitle or description       │
├────────────────────────────────────────┤
│                                        │
│             Section Content            │
│                                        │
└────────────────────────────────────────┘
```

Implementation example:

```jsx
<section className="py-12">
  <Container>
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-3">Section Title</h2>
      <p className="text-neutral-600 max-w-2xl mx-auto">
        Optional subtitle or description that provides more context about this section.
      </p>
    </div>
    
    <div className="mt-8">
      {/* Section content */}
    </div>
  </Container>
</section>
```

### Card Grids

For displaying multiple items in a grid:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id}>
      <CardContent>
        {/* Card content */}
      </CardContent>
    </Card>
  ))}
</div>
```

### Two-Column Layout

For side-by-side content:

```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <div>
    {/* Left column content */}
  </div>
  <div>
    {/* Right column content */}
  </div>
</div>
```

## Common UI Patterns

### Hero Sections

Hero sections appear at the top of key pages and should follow this pattern:

```jsx
<section className="py-16 md:py-24">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Primary Headline
        </h1>
        <p className="text-xl text-neutral-600 mb-8">
          Supporting subtitle that expands on the headline.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg">Primary Action</Button>
          <Button variant="outline" size="lg">Secondary Action</Button>
        </div>
      </div>
      <div className="flex justify-center">
        {/* Hero image or illustration */}
      </div>
    </div>
  </Container>
</section>
```

### Feature Sections

For highlighting key features:

```jsx
<section className="py-16 bg-neutral-50">
  <Container>
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Our Features</h2>
      <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
        Description of the feature set.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map(feature => (
        <div key={feature.id} className="text-center">
          <div className="bg-primary-100 text-primary-700 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-neutral-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </Container>
</section>
```

### CTA Sections

For call-to-action areas:

```jsx
<section className="py-16 bg-primary-600 text-white">
  <Container>
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        Join thousands of users saving money on their utility bills.
      </p>
      <Button 
        variant="glass" 
        size="lg"
      >
        Sign Up Now
      </Button>
    </div>
  </Container>
</section>
```

### Form Patterns

Forms should follow a consistent pattern:

```jsx
<Card>
  <CardHeader>
    <CardTitle>Form Title</CardTitle>
    <CardDescription>Form description or instructions.</CardDescription>
  </CardHeader>
  
  <CardContent>
    <form className="space-y-4">
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        required
      />
      
      <Input
        label="Password"
        type="password"
        required
      />
      
      <Checkbox label="Remember me" />
      
      <Button type="submit" fullWidth>
        Submit
      </Button>
    </form>
  </CardContent>
</Card>
```

### Data Tables

For displaying tabular data:

```jsx
<div className="overflow-x-auto">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-neutral-50 border-b">
        <th className="py-3 px-4 text-left">Column 1</th>
        <th className="py-3 px-4 text-left">Column 2</th>
        <th className="py-3 px-4 text-left">Column 3</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id} className="border-b">
          <td className="py-3 px-4">{item.col1}</td>
          <td className="py-3 px-4">{item.col2}</td>
          <td className="py-3 px-4">{item.col3}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

## Responsive Behavior

All patterns should follow these responsive guidelines:

1. **Mobile-first approach** - Design for smallest screens first
2. **Breakpoint consistency** - Use Tailwind's standard breakpoints
3. **Stack on mobile** - Convert multi-column layouts to single column
4. **Adjust spacing** - Reduce padding and margins on smaller screens
5. **Scale typography** - Use smaller text sizes on mobile devices
6. **Hide secondary elements** - Simplify UI on smaller screens

Example responsive implementation:

```jsx
<div className="py-8 md:py-12 lg:py-16">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      <div className="order-2 lg:order-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Title</h2>
        <p className="text-base md:text-lg text-neutral-600">
          Description text that adjusts size based on screen width.
        </p>
      </div>
      <div className="order-1 lg:order-2 mb-6 lg:mb-0">
        {/* Image or content that appears first on mobile */}
      </div>
    </div>
  </Container>
</div>
```

## Animation Patterns

Use consistent animation patterns throughout the application:

### Page Transitions

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Page content */}
</motion.div>
```

### Element Entry Animations

```jsx
<motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ 
    duration: 0.4,
    ease: "easeOut" 
  }}
>
  {/* Element content */}
</motion.div>
```

### Staggered List Animations

```jsx
<motion.ul>
  {items.map((item, index) => (
    <motion.li
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.3
      }}
    >
      {item.content}
    </motion.li>
  ))}
</motion.ul>
```

## Utility Comparison Pattern

Specific to Revo Utilities, use a consistent pattern for comparing utility services:

```jsx
<Card variant="glass">
  <CardHeader>
    <CardTitle>Compare Providers</CardTitle>
    <CardDescription>See which provider offers the best rates</CardDescription>
  </CardHeader>
  
  <CardContent>
    <div className="space-y-6">
      {providers.map(provider => (
        <div key={provider.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img 
              src={provider.logo} 
              alt={provider.name} 
              className="w-10 h-10 mr-3"
            />
            <div>
              <h3 className="font-medium">{provider.name}</h3>
              <p className="text-sm text-neutral-600">{provider.description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold">${provider.rate}/mo</div>
            <Badge variant={provider.isBest ? "primary" : "default"}>
              {provider.isBest ? "Best Value" : "Compare"}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  </CardContent>
  
  <CardFooter>
    <Button fullWidth>View Full Comparison</Button>
  </CardFooter>
</Card>
```

## Consistent Patterns for Common Components

### Empty States

When content is missing or not found:

```jsx
<div className="flex flex-col items-center justify-center text-center py-12">
  <div className="text-neutral-400 mb-4">
    <EmptyIcon size={64} />
  </div>
  <h3 className="text-xl font-medium mb-2">No Results Found</h3>
  <p className="text-neutral-600 mb-6">
    We couldn't find any items matching your criteria.
  </p>
  <Button variant="outline">Try Different Filters</Button>
</div>
```

### Error States

For error handling:

```jsx
<div className="flex flex-col items-center justify-center text-center py-12">
  <div className="text-danger mb-4">
    <AlertTriangleIcon size={64} />
  </div>
  <h3 className="text-xl font-medium mb-2">Something Went Wrong</h3>
  <p className="text-neutral-600 mb-6">
    We encountered an error while processing your request.
  </p>
  <Button onClick={retryFunction}>Try Again</Button>
</div>
```

### Loading States

For loading content:

```jsx
<div className="flex flex-col items-center justify-center py-12">
  <Spinner size="xl" variant="primary" />
  <p className="mt-4 text-neutral-600">Loading...</p>
</div>
```
