import Image from 'next/image';

import ShinyText from './ShinyText';

interface SectionLabelProps {
  readonly text: string;
  readonly textClassName?: string;
}

export default function SectionLabel({
  text,
  textClassName = '',
}: SectionLabelProps) {
  return (
    <div className='flex items-center gap-2'>
      <Image src='/icons/star.svg' alt='Section Icon' width={16} height={16} />
      <ShinyText
        text={text}
        className={`${textClassName} text-sm uppercase tracking-wider font-medium`}
      />
    </div>
  );
}
