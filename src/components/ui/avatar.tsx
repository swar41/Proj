// components/ui/avatar.tsx
import React from 'react';

interface AvatarProps {
  src?: string; // The source of the avatar image
  alt?: string; // Alternative text for the avatar image (optional)
  className?: string; // Optional className for custom styling
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = 'User', className }) => {
  return (
    <div className={`relative w-12 h-12 rounded-full overflow-hidden ${className}`}>
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : (
        <AvatarFallback>{alt.charAt(0) || 'U'}</AvatarFallback> // Default to 'U' if alt is empty
      )}
    </div>
  );
};

// AvatarImage component
export const AvatarImage: React.FC<AvatarProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="object-cover w-full h-full" />
);

// AvatarFallback component
export const AvatarFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-700">
    {children}
  </div>
);