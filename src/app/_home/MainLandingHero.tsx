'use client';

import { CodeBracketIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import BackgroundGrid from '@/components/Home/BackgroundGrid';
import CustomCard from '@/components/Home/CustomCard';
import TextPressure from '@/components/Home/HeroText';

export default function MainLandingHero() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-14'>
      {theme === 'dark' && (
        <>
          <div className='absolute inset-0'>
            <BackgroundGrid
              direction='diagonal'
              speed={0.3}
              borderColor='rgba(255,255,255,0.1)'
              squareSize={40}
              hoverFillColor='rgba(59, 130, 246, 0.2)'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary pointer-events-none' />
        </>
      )}
      <div className='relative z-10 w-full max-w-7xl sm:w-[85%] md:w-[70%] mx-auto'>
        <div className='grid grid-cols-1 md:pr-8 place-items-center md:grid-cols-3 gap-8 md:gap-4 items-center'>
          <div className='col-span-2 relative z-10 flex items-center flex-col justify-center space-y-6 mt-16 md:mt-0'>
            <TextPressure
              text='Hello!!!'
              className='tracking-[0.2em] w-full !text-primary dark:!text-white'
              width
              weight
              italic
              flex
              scale
              minFontSize={120}
            />
            <p className=' text-primary dark:text-white text-xl w-[300px] md:w-[550px] translate-y-4 opacity-0 animate-fadeSlideUp [animation-fill-mode:forwards] [animation-delay:0.8s]'>
              {`I am passionate about creating seamless web experiences with modern
                technologies. My unwavering commitment to
                staying at the forefront of the industry is fueled by a goal
                for continuous learning and professional development.`}
            </p>
          </div>
          <CustomCard className='relative z-10 w-[80%]'>
            <div className='space-y-4 text-left text-primary dark:text-white'>
              <div className='relative group w-full aspect-square'>
                <Image
                  src='/images/heroProfile.png'
                  alt='Profile'
                  fill
                  className='object-cover rounded-2xl mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 filter brightness-90 hover:brightness-100'
                />
                <div className='absolute inset-0 rounded-2xl group-hover:opacity-0 transition-opacity duration-500' />
              </div>

              <h2 className='text-2xl font-bold'>Kishore Mongar</h2>
              <p className='text-lg text-gray-400'>Front-end Developer</p>
              <div className='flex gap-4 items-center'>
                <Link
                  href='https://github.com/kishoremongar'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-400 flex items-center gap-2'
                >
                  <CodeBracketIcon className='h-5 w-5' />
                  GitHub
                </Link>
                <Link
                  href='https://www.linkedin.com/in/kishore-mongar'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-400 flex items-center gap-2'
                >
                  <UserCircleIcon className='h-5 w-5' />
                  LinkedIn
                </Link>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
    </section>
  );
}
