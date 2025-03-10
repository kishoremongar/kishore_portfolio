import ProjectCard from '../../components/Projects/ProjectCard';
import { useState } from 'react';

export default function Project() {
  const projects = [
    {
      title: 'Flea Pasal',
      description: 'E-commerce website for selling second-hand goods',
      year: '2024',
      imageUrl: '/images/flea.jpg',
      hoverColor: '#f8e1e1',
    },
    {
      title: 'Ping Pal',
      description: 'Chat application for connecting with friends',
      year: '2025',
      imageUrl: 'https://placehold.co/300x400?text=Coming+soon...',
      hoverColor: '#c6f6d5',
    },
    {
      title: 'Popcorn Movie',
      description: 'Movie App using TMDB API',
      year: '2022',
      imageUrl: '/images/movie.jpg',
      hoverColor: '#d4a5a5',
    },
    {
      title: 'Trail Addek',
      description: 'Hiking website for finding hiking trails',
      year: '2022',
      imageUrl: '/images/trail.jpg',
      hoverColor: '#e0e7ff',
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Handle hover event
  const handleCardHover = (title: string | null) => {
    setHoveredCard(title); // Track which card is being hovered
  };

  return (
    <div className='min-h-screen text-white p-8 w-full flex flex-col items-center'>
      <h1 className='text-4xl font-bold mb-4 text-center'>Selected Projects</h1>
      <p className='mb-8 text-center'>Here’s a curated selection of Projects</p>

      <div className='flex justify-center w-full'>
        <div className='flex w-full gap-x-20 justify-center'>
          <div className='flex flex-col space-y-8 -mt-4'>
            {projects.slice(0, 2).map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                year={project.year}
                imageUrl={project.imageUrl}
                hoverColor={project.hoverColor}
                hoveredCard={hoveredCard} // Pass the hovered card to each child
                onCardHover={handleCardHover} // Pass hover handler
              />
            ))}
          </div>
          <div className='flex flex-col space-y-8 mt-4'>
            {projects.slice(2, 4).map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                year={project.year}
                imageUrl={project.imageUrl}
                hoverColor={project.hoverColor}
                hoveredCard={hoveredCard} // Pass the hovered card to each child
                onCardHover={handleCardHover} // Pass hover handler
              />
            ))}
          </div>
        </div>
      </div>

      <button
        disabled
        type='button'
        className='mt-8 px-6 py-2 bg-white text-black rounded-full'
      >
        View All Projects
      </button>
    </div>
  );
}
