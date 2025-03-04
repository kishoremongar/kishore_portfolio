'use client';

import TopNavbar from '@/components/common/TopNavbar';

import Contact from './_contact/Contact';
import Experience from './_experience/Experience';
import MainLandingHero from './_home/MainLandingHero';
import ProjectsSection from './_projects/Projects';
import TechStacks from './_techStacks/TechStacks';

export default function Home() {
  return (
    <main className='min-h-screen w-full bg-white dark:bg-primary'>
      <TopNavbar />
      <MainLandingHero />
      <div className='w-full max-w-7xl sm:w-[85%] md:w-[70%] mx-auto px-10 flex flex-col gap-y-4 mt-4 md:px-16'>
        <TechStacks />
        <ProjectsSection />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
