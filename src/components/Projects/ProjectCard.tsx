import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  imageUrl: string;
  hoverColor: string;
  hoveredCard: string | null; // Track the hovered card from the parent
  onCardHover: (title: string | null) => void; // Notify parent about hover
}

export default function ProjectCard({
  title,
  description,
  year,
  imageUrl,
  hoverColor,
  hoveredCard,
  onCardHover,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter event
  const handleHover = () => {
    setIsHovered(true);
    onCardHover(title); // Notify the parent that this card is being hovered
  };

  // Handle mouse leave event
  const handleLeave = () => {
    setIsHovered(false);
    onCardHover(null); // Reset the hover state in parent when mouse leaves
  };

  return (
    <motion.div
      className={`project-card relative w-[300px] h-[400px] overflow-hidden rounded-xl bg-[rgba(255,255,255,0.1)] card-${title
        .replace(/\s/g, '-')
        .toLowerCase()}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.05 }} // Scale effect on hover
      animate={{
        backgroundColor:
          isHovered || hoveredCard === title
            ? hoverColor
            : 'rgba(255, 255, 255, 0.1)', // Change bg color when hovered or selected
        filter: hoveredCard === title ? 'brightness(100%)' : 'brightness(100%)', // Keep brightness normal for hovered card
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className='object-cover'
        sizes='(max-width: 300px) 100vw'
        priority
      />
      <div className='absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent'>
        <h3 className='text-xl font-bold text-white'>{title}</h3>
        <p className='text-sm text-gray-300'>{description}</p>
        <p className='text-xs text-gray-400'>{year}</p>
      </div>
    </motion.div>
  );
}
