'use client';
import Scroller from '@/components/scroller/Scroller';
import { HomeSectionContent } from '@/components/sections/HomeSectionContent';
import Link from 'next/link';
import { useEffect } from 'react';

const sections = [
  {
    title: 'Home',
    id: 'home',
    content: HomeSectionContent(),
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
  //   content: <footer className="absolute bottom-0">no rights reserved</footer>,
  // },
];

export default function Home(props) {
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
