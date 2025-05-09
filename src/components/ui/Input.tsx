import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Input component that follows the design system
 * Supports multiple variants, sizes, and states
 */

const inputVariants = cva(
  // Base styles
  "w-full transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-600 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-white border border-neutral-200 text-neutral-800 placeholder:text-neutral-400",
        filled: "bg-neutral-100 border border-neutral-200 text-neutral-800 placeholder:text-neutral-500 focus:bg-white",
        glass: "bg-white/80 backdrop-blur-md border border-white/20 text-neutral-800 placeholder:text-neutral-500",
        outline: "bg-transparent border-2 border-neutral-300 text-neutral-800 placeholder:text-neutral-400",
        unstyled: "border-0 bg-transparent shadow-none focus:ring-0 focus:ring-offset-0 px-0",
      },
      size: {
        sm: "py-1.5 px-3 text-sm rounded-lg",
        md: "py-2 px-3 sm:py-2.5 sm:px-4 text-base rounded-lg",
        lg: "py-2.5 px-4 sm:py-3 sm:px-5 text-lg rounded-lg",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
      validation: {
        success: "border-success text-success focus:ring-success",
        error: "border-danger text-danger focus:ring-danger",
        warning: "border-warning text-warning focus:ring-warning",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "lg",
    },
  }
);

export interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    containerClassName,
    variant, 
    size,
    radius,
    validation,
    leftIcon,
    rightIcon,
    label,
    helperText,
    errorText,
    id,
    ...props
  }, ref) => {
    return (
      <div className={cn("space-y-1.5", containerClassName)}>
        {label && (
          <label 
            htmlFor={id} 
            className="block text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
              {leftIcon}
            </span>
          )}
          <input
            id={id}
            className={cn(
              inputVariants({ 
                variant, 
                size, 
                radius,
                validation,
              }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-500">
              {rightIcon}
            </span>
          )}
        </div>
        {(helperText || errorText) && (
          <p className={cn(
            "text-sm", 
            errorText ? "text-danger" : "text-neutral-500"
          )}>
            {errorText || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
