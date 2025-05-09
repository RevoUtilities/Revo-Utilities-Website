import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
};

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  icon,
  iconPosition = 'right',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-200 overflow-hidden';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] text-black font-semibold shadow-md hover:shadow-lg hover:shadow-[var(--primary-color)]/20',
    secondary: 'glass text-[var(--secondary-color)] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 backdrop-blur-sm',
    glass: 'glass-dark text-white shadow-md hover:shadow-lg'
  };
  
  const sizeStyles = {
    sm: 'py-1.5 px-4 text-sm rounded-full',
    md: 'py-2.5 px-6 text-base rounded-full',
    lg: 'py-3 px-8 text-lg rounded-full'
  };
  
  const disabledStyles = disabled ? 'opacity-70 cursor-not-allowed pointer-events-none' : '';
  
  // Allow for specific buttons to keep animations if needed
  const preserveAnimation = className.includes('preserve-animation');
  
  // Create animation styles that can be optionally applied
  const animationStyles = preserveAnimation ? 'transform hover:-translate-y-1' : '';
  
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${animationStyles} ${disabledStyles} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (to && !disabled) {
    return (
      <Link to={to} className={allStyles}>
        {content}
      </Link>
    );
  }
  
  if (href && !disabled) {
    return (
      <a href={href} className={allStyles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  
  return (
    <button type={type} className={allStyles} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
