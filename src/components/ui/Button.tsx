import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
const variantStyles: Record<ButtonVariant, string> = {
  primary:
  'bg-gradient-to-r from-gold to-gold-light text-bg hover:from-gold-light hover:to-gold shadow-lg shadow-gold/20',
  secondary:
  'bg-orange text-white hover:bg-orange-light shadow-lg shadow-orange/20',
  outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-bg',
  ghost: 'text-gold hover:bg-gold/10'
};
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  {
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    className = '',
    disabled,
    ...props
  },
  ref) =>
  {
    return (
      <motion.button
        ref={ref}
        whileHover={{
          scale: disabled || isLoading ? 1 : 1.02
        }}
        whileTap={{
          scale: disabled || isLoading ? 1 : 0.98
        }}
        className={`
          inline-flex items-center justify-center gap-2
          font-semibold rounded-lg
          transition-all duration-300 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        disabled={disabled || isLoading}
        {...props}>

        {isLoading ?
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none" />

            <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />

          </svg> :

        <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        }
      </motion.button>);

  }
);
Button.displayName = 'Button';