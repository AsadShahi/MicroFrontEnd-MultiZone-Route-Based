'use client';

import React from 'react';

// Combining your two ideas into one robust interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ 
  label, 
  variant = 'primary', 
  children, 
  className = '', 
  ...rest 
}: ButtonProps) => {
  
  // Using Tailwind classes (standard for Next.js 16) or Fallback styles
  const baseClass = variant === 'primary' 
    ? 'bg-blue-600 text-white' 
    : 'bg-gray-200 text-black';

  return (
    <button 
      className={`px-4 py-2 rounded transition-colors ${baseClass} ${className}`}
      {...rest}
    >
      {label || children}
    </button>
  );
};
