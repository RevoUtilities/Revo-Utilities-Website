import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Switch component that follows the design system
 * Used for toggling between two states
 */

const switchVariants = cva(
  // Base styles
  "relative inline-flex flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-neutral-200 data-[checked=true]:bg-primary-600",
        primary: "bg-neutral-200 data-[checked=true]:bg-primary-600",
        success: "bg-neutral-200 data-[checked=true]:bg-success-600",
        danger: "bg-neutral-200 data-[checked=true]:bg-danger-600",
        warning: "bg-neutral-200 data-[checked=true]:bg-warning-600",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const thumbVariants = cva(
  // Base styles
  "pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0 transition-transform duration-200",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5 data-[checked=false]:translate-x-1 data-[checked=true]:translate-x-5",
        md: "h-4.5 w-4.5 data-[checked=false]:translate-x-1 data-[checked=true]:translate-x-6",
        lg: "h-5.5 w-5.5 data-[checked=false]:translate-x-1.5 data-[checked=true]:translate-x-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SwitchProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof switchVariants> {
  label?: string;
  description?: string;
  className?: string;
  thumbClassName?: string;
  containerClassName?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ 
    className,
    thumbClassName,
    containerClassName,
    variant,
    size,
    label,
    description,
    id,
    checked,
    defaultChecked,
    ...props
  }, ref) => {
    // Infer checked state for styling
    const isChecked = checked !== undefined ? checked : defaultChecked;

    return (
      <div className={cn("flex items-center", containerClassName)}>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            ref={ref}
            checked={checked}
            defaultChecked={defaultChecked}
            {...props}
          />
          <div
            className={cn(
              switchVariants({ variant, size }),
              className
            )}
            data-checked={isChecked}
          >
            <span 
              className={cn(
                thumbVariants({ size }),
                thumbClassName
              )}
              data-checked={isChecked}
            />
          </div>
        </label>
        {(label || description) && (
          <div className="ml-2">
            {label && (
              <label 
                htmlFor={id}
                className={cn(
                  "text-neutral-700 font-medium cursor-pointer",
                  size === 'sm' && "text-sm",
                  size === 'md' && "text-base",
                  size === 'lg' && "text-lg"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p className={cn(
                "text-neutral-500",
                size === 'sm' && "text-xs",
                size === 'md' && "text-sm",
                size === 'lg' && "text-base"
              )}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
