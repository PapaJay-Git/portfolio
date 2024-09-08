import { useState } from 'react';

export default function ImageWithLoading({src, classNames, alt}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${classNames} ${isLoading ? 'bg-gray-200 animate-pulse' : ''}`}>
      <img
        src={src}
        loading="lazy"
        className="h-full w-full object-cover"
        alt={alt ?? "Image Banner"}
        onLoad={() => setIsLoading(false)} 
      />
    </div>
  );
}