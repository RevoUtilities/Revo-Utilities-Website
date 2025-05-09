import { ReactNode, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Alert component that follows the design system
 * Used for notifications, warnings, and feedback messages
 */

const alertVariants = cva(
  // Base styles
  "relative w-full flex items-start",
  {
    variants: {
      variant: {
        default: "bg-neutral-50 text-neutral-800 border-neutral-200",
        info: "bg-info-50 text-info-800 border-info-200",
        success: "bg-success-50 text-success-800 border-success-200",
        warning: "bg-warning-50 text-warning-800 border-warning-200",
        danger: "bg-danger-50 text-danger-800 border-danger-200",
      },
      size: {
        sm: "p-3 text-sm",
        md: "p-4 text-base",
        lg: "p-5 text-lg",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      bordered: {
        true: "border",
        left: "border-l-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "lg",
      bordered: true,
    },
  }
);

export interface AlertProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  description?: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
  className?: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    children, 
    className,
    variant = "default", 
    size,
    radius,
    bordered,
    title,
    description,
    icon,
    onClose,
    ...props
  }, ref) => {
    // Default icons based on variant
    const defaultIcon = () => {
      switch (variant) {
        case "info": return <Info className="h-5 w-5" />;
        case "success": return <CheckCircle className="h-5 w-5" />;
        case "warning": return <AlertTriangle className="h-5 w-5" />;
        case "danger": return <AlertCircle className="h-5 w-5" />;
        default: return <Info className="h-5 w-5" />;
      }
    };

    return (
      <div
        className={cn(
          alertVariants({ 
            variant, 
            size, 
            radius,
            bordered,
          }),
          className
        )}
        ref={ref}
        role="alert"
        {...props}
      >
        {(icon || variant !== "default") && (
          <div className="flex-shrink-0 mr-3 mt-0.5">
            {icon || defaultIcon()}
          </div>
        )}
        <div className="flex-1">
          {title && (
            <h5 className="font-medium">{title}</h5>
          )}
          {description && (
            <div className={cn("text-sm opacity-90", title && "mt-1")}>
              {description}
            </div>
          )}
          {children}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto -mr-1 -mt-1 bg-transparent p-1 opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Close alert"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";

export default Alert;
