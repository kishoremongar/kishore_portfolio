'use client';

import anime from 'animejs';
import { useEffect, useRef } from 'react';

export default function StarryBackground() {
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    // Stars animation
    animationRef.current = anime({
      targets: '#sky .star',
      opacity: [
        { duration: 700, value: '0' },
        { duration: 700, value: '1' },
      ],
      easing: 'linear',
      loop: true,
      delay: (el, i) => 50 * i,
    });

    // Shooting stars animation
    anime({
      targets: '#shootingstars .wish',
      easing: 'linear',
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [{ duration: 700, value: '1' }],
      translateX: 350,
      width: [{ value: '150px' }, { value: '0px' }],
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  return (
    <div className='w-full h-full'>
      <svg id='sky' className='w-full h-full absolute'>
        {[...Array(60)].map((_, i) => (
          <circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={Math.random() * 0.7 + 0.6}
            fill='white'
            className='star'
          />
        ))}
      </svg>
      <div
        id='shootingstars'
        className='w-full h-full absolute rotate-[135deg]'
      >
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className='wish h-[2px] w-[100px] opacity-0 absolute bg-gradient-to-l from-white to-transparent drop-shadow-[0_0_6px_white]'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
