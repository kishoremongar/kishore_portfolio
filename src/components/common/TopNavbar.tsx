'use client';

import {
  SunIcon,
  MoonIcon,
  CodeBracketIcon,
  FolderIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function TopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [currentSection, setCurrentSection] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['tech_stack', 'projects', 'experience', 'contact'];
      const isInMainHero = window.scrollY < window.innerHeight / 2;

      if (isInMainHero) {
        setCurrentSection('');
        return;
      }

      sections.some((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section);
            return true;
          }
        }
        return false;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
        style={{
          backgroundColor:
            isScrolled && window.innerWidth >= 768
              ? 'rgba(255,255,255,.05)'
              : 'transparent',
        }}
        className={`
          fixed left-1/2 -translate-x-1/2
           transform-gpu
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-50
          ${
            isScrolled
              ? 'w-[95%] sm:w-[85%] md:w-[70%] md:backdrop-blur-md md:rounded-full md:shadow-xl top-3 md:top-6'
              : 'w-full md:rounded-2xl top-1 md:top-4'
          }
        `}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16'>
          <div className='flex items-center justify-between h-full text-primary dark:text-white'>
            <Link href='/' className='flex-shrink-0'>
              <span
                className={`
                  text-xl font-bold relative px-4 py-2
                  ${
                    isScrolled
                      ? 'after:content-[""] after:absolute after:inset-0 after:border-2 after:border-current after:rounded-lg after:origin-left after:animate-[drawBoxBorder_0.3s_ease-out_forwards]'
                      : ''
                  }
                `}
              >
                Kishore.
              </span>
            </Link>
            <div className='hidden md:flex items-center space-x-8'>
              {['Tech Stack', 'Projects', 'Experience', 'Contact'].map(
                (item) => {
                  const sectionId = item.toLowerCase().replace(' ', '_');
                  const isSelected = currentSection === sectionId && currentSection !== '';

                  return (
                    <Link
                      key={item}
                      href={`/#${sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(sectionId);
                        element?.scrollIntoView({ behavior: 'smooth' });
                        router.push('/', { scroll: false });
                      }}
                      className={`relative overflow-hidden inline-block transition-colors
                        ${
                          isSelected
                            ? 'text-primary dark:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current'
                            : 'hover:text-primary/75 dark:hover:text-gray-300 group'
                        }`}
                    >
                      {!isSelected && (
                        <>
                          <span className='relative inline-block animate-slideDown group-hover:animate-slideUp'>
                            {item}
                          </span>
                          <span className='group-hover:scale-x-100 absolute bottom-0 left-0 w-full h-[2px] bg-primary dark:bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out' />
                        </>
                      )}
                      {isSelected && <span>{item}</span>}
                    </Link>
                  );
                },
              )}
            </div>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300'
              aria-label='Toggle theme'
              type='button'
            >
              <div className='relative w-6 h-6'>
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </div>
            </button>
          </div>
        </div>
      </nav>
      {/* Bottom Mobile Navigation */}
      {/* Bottom Mobile Navigation */}
      <nav
        style={{
          backgroundColor: 'rgba(255,255,255,.05)',
        }}
        className='md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full backdrop-blur-md transform-gpu shadow-lg z-50'
      >
        <div className='grid grid-cols-4 gap-1 px-4 py-4'>
          {[
            {
              icon: CodeBracketIcon,
              label: 'Tech Stack',
              href: '/#tech_stack',
            },
            { icon: FolderIcon, label: 'Projects', href: '/#projects' },
            { icon: BriefcaseIcon, label: 'Experience', href: '/#experience' },
            { icon: EnvelopeIcon, label: 'Contact', href: '/#contact' },
          ].map(({ icon: Icon, label, href }) => {
            const sectionId = label.toLowerCase().replace(' ', '_');
            const isSelected = currentSection === sectionId && currentSection !== '';

            return (
              <Link
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(sectionId);
                  element?.scrollIntoView({ behavior: 'smooth' });
                  router.push('/', { scroll: false });
                }}
                className={`flex flex-col items-center gap-1 transition-colors duration-300
            ${
              isSelected ? 'text-blue-400' : 'text-gray-200 hover:text-blue-400'
            }`}
              >
                <Icon
                  className={`w-6 h-6 ${isSelected ? 'text-blue-400' : ''}`}
                />
                <span
                  className={`text-xs font-medium ${
                    isSelected ? 'text-blue-400' : ''
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
