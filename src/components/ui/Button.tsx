import { ReactNode, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Button component that follows the design system
 * Supports multiple variants, sizes, and states
 */

const buttonVariants = cva(
  // Base styles
  "relative inline-flex items-center justify-center font-medium transition-all gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary-600 to-primary-500 text-black font-semibold shadow-md hover:shadow-lg hover:shadow-primary-600/20 transform hover:-translate-y-1",
        secondary: "bg-neutral-100 text-neutral-700 border border-neutral-200 shadow-sm hover:bg-neutral-200 hover:text-neutral-800",
        outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600/10 backdrop-blur-sm",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-md hover:shadow-lg hover:bg-white/20 transform hover:-translate-y-1",
        ghost: "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
        link: "text-primary-600 underline-offset-4 hover:underline",
        danger: "bg-danger text-white hover:bg-danger-600",
      },
      size: {
        sm: "py-2 px-4 min-h-[44px] min-w-[44px] text-sm rounded-full",
        md: "py-2.5 px-6 min-h-[44px] min-w-[44px] text-base rounded-full",
        lg: "py-3 px-8 min-h-[48px] min-w-[48px] text-lg rounded-full",
        icon: "p-3 min-h-[44px] min-w-[44px] rounded-full",
      },
      fullWidth: {
        true: "w-full",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      iconPosition: "right",
    },
  }
);

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  to?: string;
  href?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    className,
    variant, 
    size,
    fullWidth,
    iconPosition,
    to,
    href,
    icon,
    isLoading = false,
    loadingText,
    ...props
  }, ref) => {
    const Icon = icon || (variant !== 'link' && iconPosition === 'right' ? <ArrowRight size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} /> : null);
    const ButtonContent = (
      <>
        {isLoading && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
        {isLoading && loadingText ? loadingText : children}
        {!isLoading && Icon && (
          <span className={cn("inline-block", 
            size === 'icon' && "m-0")}>
            {Icon}
          </span>
        )}
      </>
    );

    const buttonClasses = cn(
      buttonVariants({ 
        variant, 
        size, 
        fullWidth,
        iconPosition,
      }),
      isLoading && "opacity-80 pointer-events-none",
      className
    );

    if (to) {
      return (
        <Link to={to} className={buttonClasses}>
          {ButtonContent}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
          {ButtonContent}
        </a>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {ButtonContent}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
