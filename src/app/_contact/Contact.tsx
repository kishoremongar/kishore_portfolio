'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

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
    <div
      id='contact'
      className='min-h-screen w-full max-w-[1536px] flex items-center justify-center text-primary dark:text-white'
    >
      <div className='flex w-full gap-x-12 justify-center'>
        <div className='w-full lg:w-1/4 p-6 flex flex-col gap-y-4'>
          <div className='flex items-center gap-2'>
            <Image
              src='/icons/star.svg'
              alt='Section Icon'
              width={42}
              height={42}
            />
            <ShinyText
              text='Contact Me'
              className='text-3xl font-bold uppercase'
            />
          </div>
          <ContactForm />
        </div>
        <div className='hidden lg:block lg:w-[40%] bg-cover bg-center rounded-l-xl'>
          <ParticleHead />
        </div>
      </div>
    </div>
  );
}
