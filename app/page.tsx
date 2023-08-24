import Scroller from '@/components/scroller/Scroller';
import { HomeSectionContent } from '@/components/sections/HomeSectionContent';
import { headers } from 'next/headers';
import Link from 'next/link';
import { useEffect } from 'react';
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
  const headersList = headers();
  // Get the user-agent property value and assign it to a constant
  const userAgent = headersList.get('user-agent');
  let isMobileView = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
  );

  const sections = [
    {
      title: 'Home',
      id: 'home',
      content: HomeSectionContent({ isMobileView }),
    },
    // {
    //   title: 'Experience',
    //   id: 'experience',
    //   content: '',
    // },
    // {
    //   title: 'Projects',
    //   id: 'projects',
    //   content: '',
    // },
    // {
    //   title: 'Contacts',
    //   id: 'contacts',
    //   content: (
    //     <footer className="absolute bottom-0">no rights reserved</footer>
    //   ),
    // },
  ];
  // const UnderConstructionNoSSR = dynamic(() => import('@/pages/underconstruction'), {ssr: false})
  return (
    <>
      {/* <header className="fixed w-full flex flex-row justify-around py-2 top-0 z-50">
        {sections.map((section: any) => {
          return (
            <div key={section.id}>
              <Link href={`#${section.id}`}>
                <span>{section.title}</span>
              </Link>
            </div>
          );
        })}
      </header> */}
      <Scroller sections={sections}></Scroller>
      {/* <UnderConstructionNoSSR /> */}
    </>
  );
}
