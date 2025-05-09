import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Spinner component for loading states
 * Uses SVG animation for smooth rendering across browsers
 */

const spinnerVariants = cva(
  // Base styles
  "animate-spin",
  {
    variants: {
      variant: {
        default: "text-neutral-300 fill-primary-600",
        primary: "text-primary-200 fill-primary-600", 
        secondary: "text-neutral-200 fill-neutral-600",
        white: "text-white/30 fill-white",
      },
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

const Spinner = ({
  variant,
  size,
  className,
}: SpinnerProps) => {
  return (
    <svg
      className={cn(spinnerVariants({ variant, size }), className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Loading..."
      role="status"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentFill"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

Spinner.displayName = "Spinner";

export default Spinner;
