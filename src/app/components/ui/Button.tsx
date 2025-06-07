import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
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
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
      const variants = {
      primary: 'bg-syntax-primary-900 hover:bg-syntax-primary-700 text-white focus:ring-syntax-primary-500 shadow-sm hover:shadow-md border-2 border-syntax-primary-900 hover:border-syntax-primary-700',
      secondary: 'bg-syntax-primary-700 hover:bg-syntax-primary-900 text-white focus:ring-syntax-primary-500 shadow-sm hover:shadow-md border-2 border-syntax-primary-700 hover:border-syntax-primary-900',
      outline: 'border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-syntax-primary-900 focus:ring-white shadow-lg hover:shadow-xl transition-all duration-200',
      ghost: 'text-syntax-primary-700 hover:bg-syntax-primary-50 hover:text-syntax-primary-900 focus:ring-syntax-primary-500 border-2 border-transparent',
      cta: 'bg-syntax-primary-900 hover:bg-syntax-primary-700 text-white font-bold shadow-lg hover:shadow-xl focus:ring-syntax-primary-500 border-2 border-syntax-primary-900 hover:border-syntax-primary-700',
    };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
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