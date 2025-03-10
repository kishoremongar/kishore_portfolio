'use client';

import React from 'react';

import NightSkyBackground from '@/components/Experience/NightSkyBackground';
import WorkExperienceTimeline from '@/components/Experience/Timeline';

export default function Experience() {
  return (
    <div id='experience' className='h-[100vh] relative mt-48 md:mt-0'>
      <div className='relative z-10 h-full flex items-center w-full max-w-7xl sm:w-[85%] md:w-[70%] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-x-24 px-10 md:px-0'>
          <div className='relative w-full h-full'>
            <NightSkyBackground />
          </div>
          <div className='text-primary dark:text-white relative z-10 w-full h-full flex flex-col justify-center items-center'>
            <WorkExperienceTimeline />
          </div>
        </div>
      </div>
    </div>
  );
}
