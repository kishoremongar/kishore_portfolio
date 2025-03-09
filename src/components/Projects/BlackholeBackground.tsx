import { useEffect, useState } from 'react';

function BlackholeBackground() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById('video-background');
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.target as HTMLVideoElement;
    video.currentTime = 0;
    video.play();
  };

  return (
    <div
      id='video-background'
      className='relative w-full h-screen overflow-hidden'
    >
      {isInView && (
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          autoPlay
          muted
          playsInline
          preload='auto'
          onEnded={handleVideoEnded}
        >
          <source src='/videos/blackhole1.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}
      <div className='absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-primary to-transparent' />
      <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-primary to-transparent' />
      <div className='absolute top-0 left-0 w-full h-full bg-primary/75' />
    </div>
  );
}

export default BlackholeBackground;
