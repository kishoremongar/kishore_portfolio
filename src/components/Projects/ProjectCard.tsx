import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  imageUrl: string;
  hoverColor: string;
  hoveredCard: string | null;
  // eslint-disable-next-line no-unused-vars
  onCardHover: (title: string | null) => void;
  projectURL: string;
  githubURL: string;
}

export default function ProjectCard({
  title,
  description,
  year,
  imageUrl,
  hoverColor,
  hoveredCard,
  onCardHover,
  projectURL,
  githubURL,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    onCardHover(title);
  };

  const handleLeave = () => {
    setIsHovered(false);
    onCardHover(null);
  };

  return (
    <motion.div
      className='flex flex-col items-center w-full sm:w-[400px]'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Image Card */}
      <motion.div
        className='relative w-full sm:w-[400px] h-[250px] overflow-hidden rounded-xl bg-[rgba(255,255,255,0.1)]'
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        whileHover={{ scale: 1.05 }}
        animate={{
          backgroundColor:
            isHovered || hoveredCard === title
              ? hoverColor
              : 'rgba(255, 255, 255, 0.1)',
          filter:
            hoveredCard && hoveredCard !== title
              ? 'brightness(50%)'
              : 'brightness(100%)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {projectURL !== '' ? (
          <Link href={projectURL} target='_blank' rel='noopener noreferrer'>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className='object-cover object-center'
              sizes='(max-width: 768px) 100vw, 400px'
              priority
            />
          </Link>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className='object-cover object-center cursor-not-allowed'
            sizes='(max-width: 768px) 100vw, 400px'
            priority
          />
        )}
      </motion.div>

      {/* Text Content Below the Card */}
      <div className='w-full sm:w-[400px] mt-2 text-left'>
        <div className='flex items-center gap-2'>
          <h3 className='text-xl font-bold text-primary dark:text-white'>
            {title}
            {' '}
          </h3>
          {githubURL && (
            <Link href={githubURL} target='_blank' rel='noopener noreferrer'>
              <Image
                src='/icons/github.svg'
                alt='github icon'
                width={24}
                height={24}
                className='transition-transform duration-300 hover:scale-110'
              />
            </Link>
          )}
        </div>
        <div className='flex md:items-center items-start md:flex-row md:justify-between justify-normal flex-col'>
          <p className='text-sm text-textLightGray'>{description}</p>
          <p className='text-xs text-textLightGray'>{year}</p>
        </div>
      </div>
    </motion.div>
  );
}
