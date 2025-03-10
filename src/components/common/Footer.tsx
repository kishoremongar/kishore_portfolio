import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import Aurora from './AuroraBackground';

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  const { theme } = useTheme();
  const socialLinks = [
    {
      id: 1,
      title: 'LinkedIn',
      icon: '/icons/linkedin.svg',
      pathname: 'https://www.linkedin.com/in/kishore-mongar',
    },
    {
      id: 2,
      title: 'Github',
      icon: '/icons/github.svg',
      pathname: 'https://github.com/kishoremongar',
    },
    {
      id: 3, // Corrected duplicate id
      title: 'Hashnode',
      icon: '/icons/hashnode.svg',
      pathname: 'https://kishoremongar.hashnode.dev',
    },
  ];

  return (
    <footer className='w-full md:mt-10 relative h-full'>
      {/* Aurora Background - Full Width */}
      <Aurora
        colorStops={
          theme === 'dark'
            ? ['#4B0082', '#FF94B4', '#00FFFF']
            : ['#00c6ff', '#a0f0a0', '#f0a0f0']
        }
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      {/* Content Container */}
      <div className='relative z-10 px-8 py-10 w-full text-white container mx-auto gap-y-6 flex flex-col items-center'>
        {/* Social Links */}
        <div className='flex flex-wrap gap-6 justify-center mb-6 md:mb-0'>
          {socialLinks.map((item) => (
            <motion.div
              key={item?.id}
              className='hover:text-gray-400 transition flex items-center gap-x-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: item.id * 0.2 }}
            >
              <Link href={item?.pathname} target='_blank'>
                <Image
                  src={item?.icon}
                  alt={`${item?.title} Icon`}
                  width={24}
                  height={24}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Navigation Links */}
        <div className='flex flex-wrap gap-6 justify-center mb-6 md:mb-0'>
          {['Tech Stack', 'Projects', 'Experience', 'Contact'].map(
            (item, idx) => (
              <motion.div
                key={item}
                className='hover:text-gray-400 transition flex items-center gap-x-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: (idx + 1) * 0.2 }}
              >
                <Link
                  key={item}
                  href={`/#${item.toLowerCase().replace(' ', '_')}`}
                  className='group relative overflow-hidden inline-block dark:text-white text-primary hover:text-primary/75 dark:hover:text-gray-300 transition-colors'
                >
                  <span className='text-sm font-medium md:text-base relative inline-block animate-slideDown group-hover:animate-slideUp'>
                    {item}
                  </span>
                  <span className='group-hover:scale-x-100 absolute bottom-0 left-0 w-full h-[2px] bg-primary dark:bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out' />
                </Link>
              </motion.div>
            ),
          )}
        </div>
        <div className='text-center'>
          <p className='text-sm dark:text-white text-primary'>
            ©
            {' '}
            {currentYear}
            {' '}
            Kishore Mongar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
