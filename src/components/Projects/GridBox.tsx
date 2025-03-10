import { useTransition, a } from '@react-spring/web';
import {
  useState, useEffect, useMemo, useRef,
} from 'react';

interface MasonryItem {
  id: string | number;
  height: number;
  image: string;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface MasonryProps {
  data: MasonryItem[];
}

function GridBox({ data }: Readonly<MasonryProps>) {
  const [columns, setColumns] = useState<number>(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(2);
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(2);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(2);
      } else {
        setColumns(1); // Mobile devices
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [columnHeights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const gridHeights = new Array(columns).fill(0);
    const items = data.map((child) => {
      const column = gridHeights.indexOf(Math.min(...gridHeights));
      const x = (width / columns) * column;
      const y = (gridHeights[column] += child.height / 2) - child.height / 2;
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });
    return [gridHeights, items];
  }, [columns, data, width]);

  const transitions = useTransition<
    GridItem,
    { x: number; y: number; width: number; height: number; opacity: number }
  >(gridItems, {
    keys: (item) => item.id,
    from: ({
      x, y, width: itemWidth, height,
    }) => ({
      x,
      y,
      width: itemWidth,
      height,
      opacity: 0,
    }),
    enter: ({
      x, y, width: itemWidth, height,
    }) => ({
      x,
      y,
      width: itemWidth,
      height,
      opacity: 1,
    }),
    update: ({
      x, y, width: itemWidth, height,
    }) => ({
      x,
      y,
      width: itemWidth,
      height,
    }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className='relative w-full h-full'
      style={{ height: Math.max(...columnHeights) }}
    >
      {transitions((style, item) => (
        <a.div
          key={item.id}
          style={style}
          className='absolute p-[15px] [will-change:transform,width,height,opacity]'
        >
          <div
            className='relative w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] rounded-[4px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition duration-300 ease hover:scale-110'
            style={{
              backgroundColor: '#ffffff',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </a.div>
      ))}
    </div>
  );
}

export default GridBox;
