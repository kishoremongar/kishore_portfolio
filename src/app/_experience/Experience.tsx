'use client';

import NightSkyBackground from '@/components/Experience/NightSkyBackground';
import WorkExperienceTimeline from '@/components/Experience/Timeline';

export default function Experience() {
  return (
    <div
      id='experience'
      className='px-10 h-screen pt-10 md:pt-0 w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center text-primary dark:text-white '
    >
      <div className='relative w-full h-full'>
        <NightSkyBackground />
      </div>
      <div className='text-primary dark:text-white relative z-10 w-full h-full flex flex-col justify-center items-center'>
        <WorkExperienceTimeline />
      </div>
    </div>
  );
}
