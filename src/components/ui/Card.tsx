import { ReactNode, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Card component that follows the design system
 * Can be used for containing content in a consistent way
 */

const cardVariants = cva(
  // Base styles
  "overflow-hidden transform transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white border border-neutral-200 shadow-sm hover:shadow-md",
        glass: "bg-white/70 backdrop-filter backdrop-blur-md border border-white/15 shadow-md hover:shadow-lg",
        outline: "bg-transparent border-2 border-neutral-200 hover:border-neutral-300",
        filled: "bg-neutral-100 hover:bg-neutral-200/80",
        gradient: "bg-gradient-to-br from-primary-50 to-primary-100 shadow-sm hover:shadow-md",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
      padding: {
        none: "p-0",
        sm: "p-3",
        md: "p-5",
        lg: "p-7",
        xl: "p-9",
      },
      interactive: {
        true: "cursor-pointer hover:-translate-y-1",
      },
      bordered: {
        true: "border",
      }
    },
    defaultVariants: {
      variant: "default",
      radius: "2xl",
      padding: "md",
      interactive: false,
      bordered: true,
    },
  }
);

export interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    children, 
    className,
    variant, 
    radius,
    padding,
    interactive,
    bordered,
    onClick,
    ...props
  }, ref) => {
    return (
      <div
        className={cn(
          cardVariants({ 
            variant, 
            radius, 
            padding,
            interactive,
            bordered,
          }),
          className
        )}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/**
 * Card.Header component
 */
const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

/**
 * Card.Title component
 */
const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

/**
 * Card.Description component
 */
const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-neutral-500", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

/**
 * Card.Content component
 */
const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

/**
 * Card.Footer component
 */
const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

// Export all components
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export default Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
