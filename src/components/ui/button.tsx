// components/ui/button.tsx
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  // Add other custom props here if needed
}

export const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
  const baseStyle = 'px-4 py-2 rounded-md text-black';
  const variantStyle = variant === 'outline' ? 'border border-blue-600 text-blue-600' : 'bg-blue-600';

  return (
    <button className={`${baseStyle} ${variantStyle}`} {...props}>
      {children}
    </button>
  );
};
