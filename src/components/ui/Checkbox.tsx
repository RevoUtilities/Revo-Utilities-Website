import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Checkbox component that follows the design system
 * Supports multiple variants, sizes, and states
 */

const checkboxVariants = cva(
  // Base styles
  "peer shrink-0 appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-600 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-white border border-neutral-300 checked:bg-primary-600 checked:border-primary-600 text-white",
        filled: "bg-neutral-100 border border-neutral-300 checked:bg-primary-600 checked:border-primary-600 text-white",
        outline: "bg-transparent border-2 border-neutral-300 checked:border-primary-600 checked:bg-primary-600 text-white",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "md",
    },
  }
);

export interface CheckboxProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
  className?: string;
  containerClassName?: string;
  checkClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className,
    containerClassName,
    checkClassName,
    variant, 
    size,
    radius,
    label,
    description,
    id,
    ...props
  }, ref) => {
    return (
      <div className={cn("flex items-start", containerClassName)}>
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id={id}
            className={cn(
              checkboxVariants({ 
                variant, 
                size, 
                radius,
              }),
              className
            )}
            ref={ref}
            {...props}
          />
          <Check 
            className={cn(
              "absolute pointer-events-none opacity-0 transition-opacity peer-checked:opacity-100 text-white",
              size === 'sm' && "h-3 w-3",
              size === 'md' && "h-3.5 w-3.5", 
              size === 'lg' && "h-4 w-4",
              checkClassName
            )} 
            aria-hidden="true"
          />
        </div>
        {(label || description) && (
          <div className={cn("ml-2", size === 'sm' ? "mt-0" : "mt-0.5")}>
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

Checkbox.displayName = "Checkbox";

export default Checkbox;
