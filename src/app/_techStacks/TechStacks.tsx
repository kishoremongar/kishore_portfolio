/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import SectionLabel from '@/components/common/SectionLabel';
import StarryBackground from '@/components/TechStacks/StarryBackground';

const skillSections = [
  {
    title: 'Front-end',
    skills: [
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'CSS3', icon: '/icons/css.svg' },
      { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
      { name: 'Redux Toolkit', icon: '/icons/redux.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '/icons/node-js.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'Express', icon: '/icons/express-js.svg' },
      { name: 'MongoDB', icon: '/icons/mongoDB.svg' },
      { name: 'Mongoose', icon: '/icons/mongoose.svg' },
    ],
  },
  {
    title: 'Tools & Libraries',
    skills: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'Jira', icon: '/icons/jira.svg' },
      { name: 'MaterialUI', icon: '/icons/material-ui.svg' },
      { name: 'JEST', icon: '/icons/jest.svg' },
    ],
  },
];

export default function TechStacks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile threshold
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // To check on initial load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('tech_stack');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Calculate relative position within the section
      const relativePosition = scrollPosition - sectionTop;
      const sectionProgress = relativePosition / (sectionHeight - viewportHeight);

      // Add threshold for first section
      if (sectionProgress < 0.2) {
        setActiveIndex(0);
      } else if (sectionProgress >= 0.2 && sectionProgress < 0.6) {
        // Middle section
        setActiveIndex(1);
      } else if (sectionProgress >= 0.6) {
        // Last section with threshold to keep it visible
        setActiveIndex(2);
      } else if (sectionProgress > 0.95) {
        // Trigger smooth transition out
        const techStack = document.getElementById('tech_stack');
        const projects = document.getElementById('projects');

        if (techStack && projects) {
          techStack.style.opacity = `${1 - (sectionProgress - 0.95) * 20}`;
          projects.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Motion animation values based on screen size
  const getMotionProps = (direction: 'left' | 'right') => {
    if (isMobile) {
      // For mobile, animate from left to right or vice versa
      return {
        initial: { opacity: 0, x: direction === 'left' ? -100 : 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction === 'left' ? 100 : -100 },
      };
    }
    // For desktop, apply the same animation as before
    return {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
    };
  };

  return (
    <div
      id='tech_stack'
      className='h-[300vh] relative transition-opacity duration-500'
    >
      <div className='sticky top-0 h-screen w-full overflow-hidden'>
        <div className='absolute inset-0'>
          <StarryBackground />
        </div>
        <div className='relative z-10 h-full flex items-center w-full max-w-7xl sm:w-[85%] md:w-[65%] mx-auto'>
          <div className='mx-auto px-10 md:px-0 flex md:items-start flex-col sm:flex-row'>
            {/* Left Section: Title */}
            <motion.div
              className='w-full sm:w-1/2 flex items-center md:justify-center'
              key={activeIndex}
              {...getMotionProps('left')} // Mobile: Slide in from left
              transition={{ duration: 0.5 }}
            >
              <h2 className='text-4xl sm:text-8xl font-bold dark:text-white text-primary'>
                <SectionLabel text='Tech Stack' />
                {skillSections[activeIndex].title}
                {!skillSections[activeIndex].title.startsWith('Tools') && (
                  <span className='font-cormorant italic'> Skills</span>
                )}
              </h2>
            </motion.div>
            {/* Right Section: Skills */}
            <motion.div
              className='w-full sm:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-0'
              key={`skills-${activeIndex}`}
              {...getMotionProps('right')}
              transition={{ duration: 0.5 }}
            >
              {skillSections[activeIndex].skills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex flex-col items-center p-2 sm:p-4 dark:bg-white/5 bg-gray-50/80 shadow-xl hover:bg-gray-100/90 rounded-lg backdrop-blur-sm border border-gray-100 dark:border-transparent transition-colors'
                >
                  <div className='h-[40px] sm:h-[48px] flex items-center justify-center mb-2'>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className='object-contain'
                    />
                  </div>
                  <span className='dark:text-white text-primary text-sm sm:text-base'>
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
