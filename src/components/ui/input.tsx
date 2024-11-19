// components/ui/input.tsx
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return <input {...props} className={`border px-4 py-2 rounded ${props.className}`} />;
};
