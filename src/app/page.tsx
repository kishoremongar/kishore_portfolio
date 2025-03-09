'use client';

import Footer from '@/components/common/Footer';
import TopNavbar from '@/components/common/TopNavbar';

import Contact from './_contact/Contact';
import Experience from './_experience/Experience';
import MainLandingHero from './_home/MainLandingHero';
import ProjectsSection from './_projects/Projects';
import TechStacks from './_techStacks/TechStacks';

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col gap-y-20 md:gap-y-0 bg-lightModeBackground dark:bg-primary'>
      <TopNavbar />
      <MainLandingHero />
      <TechStacks />
      <ProjectsSection />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
