// import dynamic from 'next/dynamic'
// const ScrollerSection = dynamic(() => import('@/components/ScrollerSection'), {ssr: false})
import styles from './styles.module.scss';
import { HomeSectionContent } from '@/components/sections/HomeSectionContent';
import { TechnologiesSectionContent } from '@/components/sections/TechnologiesSectionContent';
import { headers } from 'next/headers';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Card } from '../blocks/card';

const FarmSectionContent = dynamic(() => import('../sections/FarmSection'), {
  ssr: false,
});
const ExperienceSectionContent = dynamic(
  () => import('../sections/ExperienceSectionContent'),
  {
    ssr: false,
  },
);

export default function Scroller(props) {
  const headersList = headers();
  // Get the user-agent property value and assign it to a constant
  const userAgent = headersList.get('user-agent');
  let isMobileView = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
  );

  function getSectionsAround(arr, id) {
    const index = arr.findIndex((el) => el.id === id);
    const aroundSections: any[] = [];
    if (index === 0) {
      aroundSections.push(arr[index + 1]);
    } else if (index === arr.length - 1) {
      aroundSections.push(arr[index - 1]);
    } else {
      aroundSections.push(arr[index - 1]);
      aroundSections.push(arr[index + 1]);
    }

    return aroundSections;
  }

  let sections = [
    {
      title: 'Home',
      id: 'home',
      content: HomeSectionContent({ isMobileView }),
    },
    // {
    //   title: 'Technologies',
    //   id: 'technologies',
    //   content: TechnologiesSectionContent(),
    // },
    // {
    //   title: 'Experience',
    //   id: 'experience',
    //   //@ts-ignore
    //   content: ExperienceSectionContent(),
    // },
    // {
    //   title: 'My Place',
    //   id: 'farm',
    //   //@ts-ignore
    //   content: FarmSectionContent(),
    // },
    // {
    //   title: 'Contacts',
    //   id: 'contacts',
    //   content: (
    //     <footer className="absolute w-full bottom-0 text-center">
    //       no rights reserved
    //     </footer>
    //   ),
    // },
  ];

  // const sectionsWithRemovedContent = sections.map((section) => {
  //   const { content, ...rest } = section;
  //   return rest;
  // });

  const getSections = () => {
    if (isMobileView) {
      return [sections[0]];
    }
    return sections;
  };

  return (
    <main className={styles.scroller}>
      {getSections().map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="scroller__section relative"
        >
          {section.content}
          {/* <nav
            key={section.id + 'nav'}
            className={`flex flex-col ${
              index === 0 ? 'justify-end' : 'justify-around'
            } items-end py-2 px-2 gap-10 z-50 w-max text-right ${styles.nav}`}
          >
            {!isMobileView &&
              getSectionsAround(sectionsWithRemovedContent, section.id).map(
                (s: any) => {
                  return (
                    <Link key={s.id + 'link'} href={`#${s.id}`}>
                      <Card className="p-2 py-1 w-max">
                        <span key={s.id + 'span'}>&gt;{s.title}</span>
                      </Card>
                    </Link>
                  );
                },
              )}
          </nav> */}
        </section>
      ))}
    </main>
  );
}
