import { ReactNode, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Divider component that follows the design system
 * Used to separate content areas or list items
 */

const dividerVariants = cva(
  // Base styles for non-text dividers
  "w-full border-t",
  {
    variants: {
      variant: {
        default: "border-neutral-200",
        primary: "border-primary-200",
        subtle: "border-neutral-100",
        dashed: "border-dashed border-neutral-300",
        dotted: "border-dotted border-neutral-300",
      },
      thickness: {
        thin: "border-t",
        medium: "border-t-2",
        thick: "border-t-4",
      },
      withLabel: {
        true: "border-0 flex items-center",
      },
      orientation: {
        horizontal: "",
        vertical: "border-t-0 border-l h-full w-0",
      },
    },
    defaultVariants: {
      variant: "default",
      thickness: "thin",
      withLabel: false,
      orientation: "horizontal",
    },
  }
);

export interface DividerProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  children?: ReactNode;
  className?: string;
  decorative?: boolean;
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ 
    className,
    variant, 
    thickness,
    withLabel = false,
    orientation,
    children,
    decorative = true,
    ...props
  }, ref) => {
    // If we have children, we render a divider with content in the middle
    if (withLabel && children) {
      return (
        <div 
          className="w-full flex items-center" 
          ref={ref}
          {...props}
        >
          <div className={cn(
            dividerVariants({ 
              variant, 
              thickness,
              orientation: "horizontal",
              withLabel: false,
            })
          )} />
          <span className={cn(
            "px-3 flex-shrink-0 text-sm font-medium text-neutral-500",
            className
          )}>
            {children}
          </span>
          <div className={cn(
            dividerVariants({ 
              variant, 
              thickness,
              orientation: "horizontal",
              withLabel: false,
            })
          )} />
        </div>
      );
    }

    // For semantic correctness - if not decorative, we use a separate hr component
    if (!decorative) {
      return (
        <hr
          className={cn(
            dividerVariants({ 
              variant, 
              thickness,
              orientation,
              withLabel,
            }),
            className
          )}
          {...props}
        />
      );
    }

    // Default decorative divider
    return (
      <div
        className={cn(
          dividerVariants({ 
            variant, 
            thickness,
            orientation,
            withLabel,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export default Divider;
