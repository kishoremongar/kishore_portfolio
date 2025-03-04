'use client';

import { useTheme } from 'next-themes';
import React, { useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const CustomCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)',
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const { theme } = useTheme();

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border ${
        theme === 'dark'
          ? 'border-neutral-800 bg-neutral-900'
          : 'border-neutral-200 bg-gray-100 hover:bg-white'
      } p-8 overflow-hidden ${className}`}
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out'
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${
            position.y
          }px, ${
            theme === 'dark' ? spotlightColor : 'rgba(0, 0, 0, 0.1)'
          }, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default CustomCard;
