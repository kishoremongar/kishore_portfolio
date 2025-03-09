'use client';

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
  const resumeLink = `https://drive.google.com/uc?export=download&id=${process.env.NEXT_PUBLIC_RESUME_FILE_ID}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-14'>
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
          <div className='col-span-2 relative z-10 flex items-center flex-col justify-center gap-y-10 md:gap-y-6'>
            <div className='flex w-[300px] md:w-[550px]'>
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
            </div>
            <p className='mt-8 md:mt-0 text-primary dark:text-white text-xl w-[300px] md:w-[550px] translate-y-4 opacity-0 animate-fadeSlideUp [animation-fill-mode:forwards] [animation-delay:0.8s]'>
              {`I am passionate about creating seamless web experiences with modern
                technologies. My unwavering commitment to
                staying at the forefront of the industry is fueled by a goal
                for continuous learning and professional development.`}
            </p>
            <Link
              href={resumeLink}
              download
              className='w-36 self-start border rounded-3xl bg-transparent dark:text-white text-primary hover:text-white hover:bg-primary dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 px-4 py-2 text-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2'
            >
              Resume
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='transform'
              >
                <line x1='7' y1='17' x2='17' y2='7' />
                <polyline points='7 7 17 7 17 17' />
              </svg>
            </Link>
          </div>
          <CustomCard className='relative z-10 w-[80%] shadow-xl'>
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
                  href='https://www.linkedin.com/in/kishore-mongar'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-400 flex items-center gap-2'
                  title='LinkedIn'
                >
                  <Image
                    src='/icons/linkedin.svg'
                    alt='Github Icon'
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href='https://github.com/kishoremongar'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-400 flex items-center gap-2'
                  title='GitHub'
                >
                  <Image
                    src='/icons/github.svg'
                    alt='Github Icon'
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href='https://kishoremongar.hashnode.dev'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-400 flex items-center gap-2'
                  title='Hashnode'
                >
                  <Image
                    src='/icons/hashnode.svg'
                    alt='Github Icon'
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
    </section>
  );
}
