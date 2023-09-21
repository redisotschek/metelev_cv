import Scroller from '@/components/scroller/Scroller';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dima Metelev',
  description: 'Frontend Developer - Vue, Angular, React, SCSS, TypeScript',
  openGraph: {
    title: 'Dima Metelev | Frontend Developer',
    description: 'Vue, Angular 2+, React, Next.js, SCSS, TypeScript',
    images: '/images/thumbnail.png',
  },
};

export default function Home(props) {
  // const UnderConstructionNoSSR = dynamic(() => import('@/pages/underconstruction'), {ssr: false})
  return (
    <>
      <Scroller></Scroller>
      {/* <UnderConstructionNoSSR /> */}
    </>
  );
}
