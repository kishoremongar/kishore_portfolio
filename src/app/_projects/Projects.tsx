import { useState } from 'react';

import SectionLabel from '../../components/common/SectionLabel';
import ProjectCard from '../../components/Projects/ProjectCard';

export default function Project() {
  const projects = [
    {
      title: 'Flea Pasal',
      description: 'E-commerce application for selling second-hand goods',
      year: '2024',
      imageUrl: '/images/flea.jpg',
      hoverColor: '#f8e1e1',
      projectURL: 'https://flea-pasal.vercel.app',
      githubURL: 'https://github.com/kishoremongar/flea-pasal',
    },
    {
      title: 'Ping Pal',
      description: 'Chat application for connecting with friends',
      year: '2025',
      imageUrl: 'https://placehold.co/300x400?text=Coming+soon...',
      hoverColor: '#c6f6d5',
      projectURL: '',
      githubURL: 'https://github.com/kishoremongar/ping-pal',
    },
    {
      title: 'Popcorn Movie',
      description: 'Movie App using TMDB API',
      year: '2022',
      imageUrl: '/images/movie.jpg',
      hoverColor: '#d4a5a5',
      projectURL: 'https://popcorncinema.netlify.app',
      githubURL: 'https://github.com/kishoremongar/popcorn-cinema',
    },
    {
      title: 'Orb Social',
      description: 'A Web3 based SDK integration with Lens Protocol.',
      year: '2022',
      imageUrl: '/images/orb-socio.jpg',
      hoverColor: '#e0e7ff',
      projectURL: 'https://orb-socio.vercel.app',
      githubURL: 'https://github.com/kishoremongar/orb-socio',
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardHover = (title: string | null) => {
    setHoveredCard(title);
  };

  return (
    <div
      id='projects'
      className='gap-y-6 min-h-screen text-primary dark:text-white p-8 w-full flex flex-col items-center relative z-10 h-full max-w-7xl sm:w-[85%] md:w-[65%] mx-auto px-6 py-12'
    >
      <div className='flex flex-col gap-y-2'>
        <SectionLabel
          text='Selected Projects'
          textClassName='!text-2xl md:!text-4xl !font-bold !text-center'
          imageSize={28}
        />
        <p className='mb-8 md:text-base text-sm text-center'>
          Here’s a curated selection of Projects
        </p>
      </div>
      <div className='px-8 md:px-0 flex flex-col md:flex-row justify-center w-full gap-8 md:gap-x-20'>
        <div className='flex flex-col space-y-8 -mt-4 w-full md:w-auto items-center md:items-start'>
          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              year={project.year}
              imageUrl={project.imageUrl}
              hoverColor={project.hoverColor}
              hoveredCard={hoveredCard}
              onCardHover={handleCardHover}
              projectURL={project.projectURL}
              githubURL={project.githubURL}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className='flex flex-col space-y-8 mt-4 w-full md:w-auto items-center md:items-start'>
          {projects.slice(2, 4).map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              year={project.year}
              imageUrl={project.imageUrl}
              hoverColor={project.hoverColor}
              hoveredCard={hoveredCard}
              onCardHover={handleCardHover}
              projectURL={project.projectURL}
              githubURL={project.githubURL}
            />
          ))}
        </div>
      </div>

      {/* <button
        disabled
        type='button'
        className='mt-8 px-6 py-2 bg-white text-black rounded-full'
      >
        View All Projects
      </button> */}
    </div>
  );
}
