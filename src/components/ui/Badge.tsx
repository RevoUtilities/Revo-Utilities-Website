import { ReactNode, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Badge component that follows the design system
 * Used for status indicators, labels, and counters
 */

const badgeVariants = cva(
  // Base styles
  "inline-flex items-center font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-neutral-800",
        primary: "bg-primary-100 text-primary-800",
        success: "bg-success/10 text-success-700",
        warning: "bg-warning/10 text-warning-700",
        danger: "bg-danger/10 text-danger-700",
        info: "bg-info/10 text-info-700",
        outline: "bg-transparent border text-neutral-700",
      },
      size: {
        sm: "py-0.5 px-2 text-xs",
        md: "py-1 px-3 text-sm",
        lg: "py-1.5 px-4 text-base",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      bordered: {
        true: "border",
      },
      gradient: {
        true: "bg-gradient-to-r",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        gradient: true,
        className: "from-primary-500 to-primary-600 text-white",
      },
      {
        variant: "success",
        gradient: true,
        className: "from-success-500 to-success-600 text-white",
      },
      {
        variant: "warning",
        gradient: true,
        className: "from-warning-500 to-warning-600 text-white",
      },
      {
        variant: "danger",
        gradient: true,
        className: "from-danger-500 to-danger-600 text-white",
      },
      {
        variant: "info",
        gradient: true,
        className: "from-info-500 to-info-600 text-white",
      },
      {
        variant: "outline",
        bordered: true,
        className: "border-current",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "full",
      bordered: false,
      gradient: false,
    },
  }
);

export interface BadgeProps 
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    children, 
    className,
    variant, 
    size,
    radius,
    bordered,
    gradient,
    icon,
    ...props
  }, ref) => {
    return (
      <span
        className={cn(
          badgeVariants({ 
            variant, 
            size, 
            radius,
            bordered,
            gradient,
          }),
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && (
          <span className="mr-1 -ml-0.5">{icon}</span>
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
