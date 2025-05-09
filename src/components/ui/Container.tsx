import { ReactNode, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Container component that follows the design system
 * Provides consistent width and padding for page layouts
 */

const containerVariants = cva(
  // Base styles
  "mx-auto px-4 sm:px-6 w-full",
  {
    variants: {
      size: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
      },
      responsive: {
        true: "lg:px-8",
      },
      centered: {
        true: "flex items-center justify-center",
      },
    },
    defaultVariants: {
      size: "xl",
      responsive: true,
    },
  }
);

export interface ContainerProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    children, 
    className,
    as: Component = "div",
    size, 
    responsive,
    centered,
    ...props
  }, ref) => {
    return (
      <Component
        className={cn(
          containerVariants({ 
            size, 
            responsive,
            centered,
          }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export default Container;
