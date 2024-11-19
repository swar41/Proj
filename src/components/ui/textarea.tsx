// components/ui/Textarea.tsx
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string; // Make the label prop optional
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, placeholder, ...props }) => {
  return (
    <div>
      {label && <label className="block mb-2">{label}</label>} {/* Render label only if provided */}
      <textarea
        placeholder={placeholder}
        {...props}
        className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
      />
    </div>
  );
};

export default Textarea;
