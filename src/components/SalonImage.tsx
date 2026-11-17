import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SalonImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function SalonImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Saba Beauty Salon',
  loading = 'lazy',
}: SalonImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F3EFE9] via-[#EAE3D7] to-[#DFD5C5] text-[#5C534A] p-6 text-center ${className}`}
      >
        <Sparkles className="w-6 h-6 text-[#9A7B4F] mb-2" aria-hidden="true" />
        <span className="font-display text-lg font-semibold text-[#181615]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
