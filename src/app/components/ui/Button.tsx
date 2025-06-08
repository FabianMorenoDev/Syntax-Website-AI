import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  fullWidth = false,
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border';
  
  const variants = {
    primary: 'bg-syntax-primary-900 hover:bg-syntax-primary-800 text-white border-syntax-primary-900 hover:border-syntax-primary-800 shadow-sm hover:shadow-lg active:scale-95 focus:ring-syntax-primary-500',
    secondary: 'bg-white hover:bg-modern-gray-50 text-syntax-primary-900 border-modern-gray-300 hover:border-syntax-primary-900 shadow-sm hover:shadow-md focus:ring-syntax-primary-500',
    outline: 'bg-transparent hover:bg-syntax-primary-900 text-syntax-primary-900 hover:text-white border-syntax-primary-900 shadow-sm hover:shadow-lg active:scale-95 focus:ring-syntax-primary-500',
    accent: 'bg-syntax-yellow-900 hover:bg-syntax-yellow-800 text-syntax-primary-900 border-syntax-yellow-900 hover:border-syntax-yellow-800 shadow-sm hover:shadow-lg active:scale-95 focus:ring-syntax-yellow-500',
    ghost: 'bg-transparent hover:bg-syntax-primary-50 text-syntax-primary-700 hover:text-syntax-primary-900 border-transparent hover:border-syntax-primary-300 focus:ring-syntax-primary-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
} 