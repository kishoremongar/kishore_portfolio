// src/components/Timeline.tsx

import { BriefcaseIcon } from '@heroicons/react/24/solid'; // Heroicons briefcase icon
import { motion } from 'framer-motion';

import SectionLabel from '../common/SectionLabel'; // Assuming you have a SectionLabel component

interface WorkExperience {
  company: string;
  position: string;
  timePeriod: string;
  description: string;
  id: number;
}

interface TimelineProps {
  experiences: WorkExperience[];
}

function Timeline({ experiences }: Readonly<TimelineProps>) {
  return (
    <div className='w-full flex flex-col gap-y-4 max-w-screen-lg mx-auto py-16'>
      <SectionLabel
        text='Work Experience'
        textClassName='!text-2xl font-semibold text-center'
      />
      <div className='relative z-10 timeline_layout before:dark:bg-[#041524] before:bg-textLightGray'>
        {experiences.map((exp) => (
          <motion.div
            key={exp?.id}
            className='timeline-item flex items-center py-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Animate opacity when in view
            exit={{ opacity: 0 }} // Fade out when exiting
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }} // Trigger animation only once when it enters the viewport
          >
            <div className='relative flex justify-center items-center w-14 h-6 md:size-10 bg-textLightGray dark:bg-[#0b2231] rounded-full text-white'>
              <BriefcaseIcon className='size-4 md:size-6' />
            </div>
            <div className='ml-6 md:ml-12 flex flex-col md:text-left'>
              <h3 className='font-semibold text-xl'>{exp.company}</h3>
              <p className='text-sm dark:text-neonGreen'>{exp.position}</p>
              <p className='text-sm dark:text-textLightGray'>
                {exp.timePeriod}
              </p>
              <p className='text-md dark:text-secondary mt-2 w-full'>
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WorkExperienceTimeline() {
  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      company: 'Aptagrim Limited',
      position: 'Front-end Developer',
      timePeriod: 'Aug 2022 - Present',
      description:
        'Worked on the development of psyHire(Product) and actively supported various projects.',
    },
    {
      id: 2,
      company: 'Amazon',
      position: 'SDS Associate',
      timePeriod: 'Oct 2021 - Jan 2022',
      description:
        'Resolve customer issues related to Amazon shipping and delivery for North America.',
    },
  ];

  return (
    <div className='w-full max-w-screen-lg mx-auto py-16'>
      <Timeline experiences={workExperiences} />
    </div>
  );
}

export default WorkExperienceTimeline;
