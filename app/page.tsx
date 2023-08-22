'use client';
import Scroller from '@/components/scroller/Scroller';
import { HomeSectionContent } from '@/components/sections/HomeSectionContent';
import { useEffect } from 'react';

const sections = [
  {
    title: 'Home',
    id: 'home',
    content: HomeSectionContent(),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: '',
  },
  {
    title: 'Projects',
    id: 'projects',
    content: '',
  },
  {
    title: 'Contacts',
    id: 'contacts',
    content: '',
  },
];

export default function Home(props) {
  useEffect(() => {
    // var screenOrientation = window.screen.orientation;
    // if (screenOrientation.lock) {
    //   screenOrientation.lock('landscape');
    // }
  }, []);
  // const UnderConstructionNoSSR = dynamic(() => import('@/pages/underconstruction'), {ssr: false})
  return (
    <Scroller sections={sections}></Scroller>
    // <UnderConstructionNoSSR />
  );
}
