import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  title: string;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'sm' | 'md' | 'full';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, size = 'md', shape = 'md', className }) => {
  const baseStyles = 'text-white bg-blue-600 hover:bg-blue-700 font-medium transition duration-300';
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const shapeStyles = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    full: 'rounded-full',
  };

  const combinedClasses = classNames(baseStyles, sizeStyles[size], shapeStyles[shape], className);

  return <button className={combinedClasses}>{title}</button>;
};

export default Button; // ✅ default export
