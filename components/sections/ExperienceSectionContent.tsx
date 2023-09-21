'use client';
import { useState } from 'react';
import { Zeppelin } from '../blocks/Zeppelin';
import styles from './experience.module.scss';
import { JobInfoList } from '@/app/types';
import { Modal } from '../blocks/modal';
import { CompanyExperience } from '@/app/components/work-experience-section';

const jobs: JobInfoList = [
  {
    title: 'Fullstack Developer',
    company: 'Chainstack',
    date: 'Aug 2022 - Aug 2023',
    src: '/images/logos/chainstack.png',
    points: [
      'Developed and maintained multiple large features for the Chainstack platform',
      'Collaborated with the UX team to design user-friendly interfaces (of course, I also implemented them)',
      'Refactored legacy code to improve performance and maintainability',
      'Mentored junior developers',
      'Participated in the hiring process, conducted multiple interviews',
      'Participated in the product development process',
    ],
    results: [
      'Implemented a new feature that allows users to create and manage multiple projects and data instances',
      'The important features (more than 90%) were always released on time',
      'New team members were onboarded quickly and efficiently (4 new frontenders - 80% of frontend team - were onboarded by myself in 4 months)',
      'Many older modules were refactored to improve performance and maintainability, number of lines decreased by 60% due to refactoring',
    ],
  },
  {
    title: 'Frontend Developer, Development Team Lead',
    company: 'KMS Lighthouse',
    date: 'Sep 2019 - Apr 2022',
    src: '/images/logos/kms.png',
    points: [
      'Developed and maintained multiple large features for the KMS Lighthouse platform',
      'Led a crossfunctional team of 6 developers',
      'Refactored legacy code to improve performance and maintainability',
      'Mentored junior developers',
      'Participated in the hiring process, conducted multiple interviews',
      'Resolved multiple people conflicts and misunderstandings',
      "Conducted multiple performance reviews, corrected the team's behavior",
      'Led a crossfunctional team of developers, managed projects, and implemented SCRUM methodologies.',
      'Mentored team members, resolved conflicts, and facilitated career growth.',
    ],
    results: [
      'Many modules were refactored and/or rewritten to newer technologies to improve performance and maintainability',
      'Many new modules were developed and released',
      'Junior developers were able to grow professionally',
      "New processes were introduced to improve the team's and whole company's performance",
      'The team was able to deliver a large number of features',
      'Team members realised their potential and grew professionally',
      'Some team members were promoted to senior positions',
      'Some team members decided where they want to grow and what they want to do next',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'GROTEM',
    date: 'Dec 2018 - Jun 2019',
    src: '/images/logos/grotem.png',
    points: [
      'Built and refactored a b2b application using Angular.js and Angular 4',
      'Collaborated with cross-functional teams to deliver high-quality products',
      'Contributed to the development of a b2b application involving maps, routes, and payments using Angular.js and Angular 4',
    ],
    results: [
      'The application was migrated to newest versions of Angular instead of AngularJS',
      'Modules for maps and routes were implemented using Google Maps API and Yandex Maps API',
    ],
  },
];

export default function ExperienceSectionContent() {
  const [activeZeppelin, setZeppelin] = useState(null);
  console.count('counter');
  function handleClick(index) {
    console.log(index);
    setZeppelin(index);
  }
  const closeModal = () => {
    setZeppelin(null);
  };
  return (
    <div className="p-5 flex flex-col h-full w-full justify-center gap-10 flex-nowrap">
      {jobs.map((zeppelin, index) => {
        return (
          <div
            key={zeppelin.company + index + 'container'}
            className={`${styles.zeppelinContainer} w-full relative justify-start`}
          >
            <Zeppelin
              key={zeppelin.company + index}
              className={`${styles.zeppelin} ${
                activeZeppelin === index ? styles.stop : ''
              }`}
              src={zeppelin.src}
              title={zeppelin.company}
              onClick={() => handleClick(index)}
            ></Zeppelin>
          </div>
        );
      })}
      <Modal
        className={activeZeppelin === null ? 'hidden' : ''}
        closeFn={closeModal}
        isOpen={activeZeppelin !== null}
      >
        {activeZeppelin !== null && (
          <CompanyExperience {...jobs[activeZeppelin]} />
        )}
      </Modal>
    </div>
  );
}
