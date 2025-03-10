'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

import ShinyText from '@/components/common/ShinyText';
import ContactForm from '@/components/Contacts/ContactForm';

const ParticleHead = dynamic(
  () => import('@/components/Contacts/ParticleHead'),
  {
    ssr: false,
  },
);

export default function Contact() {
  return (
    <div id='contact' className='min-h-screen relative pt-6'>
      <div className='relative z-10 h-full flex items-center w-full max-w-7xl sm:w-[85%] md:w-[70%] mx-auto'>
        <div className='flex w-full gap-x-24 justify-center px-10 md:px-0'>
          <div className='w-full lg:w-1/3 p-6 flex flex-col gap-y-4'>
            <div className='flex items-center gap-2'>
              <Image
                src='/icons/star.svg'
                alt='Section Icon'
                width={42}
                height={42}
              />
              <ShinyText
                text='Contact Me'
                className='text-2xl md:text-3xl font-bold uppercase'
              />
            </div>
            <ContactForm />
          </div>
          <div className='hidden lg:block lg:w-[40%] bg-cover bg-center rounded-l-xl'>
            <ParticleHead />
          </div>
        </div>
      </div>
    </div>
  );
}
