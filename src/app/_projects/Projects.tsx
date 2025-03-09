'use client';

import BlackholeBackground from '@/components/Projects/BlackholeBackground';
// import GridBox from '@/components/Projects/GridBox';

export default function ProjectsSection() {
  // const data = [
  //   { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
  //   { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
  //   { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
  //   { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
  //   { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
  //   { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
  //   { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
  //   { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
  //   { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
  //   { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 },
  // ];
  return (
    <div id='projects' className='h-screen text-primary dark:text-white'>
      <div className='overflow-hidden relative'>
        <BlackholeBackground />
        {/* <div className='absolute w-full bottom-1/4'>
          <GridBox data={data} />
        </div> */}
      </div>
    </div>
  );
}
