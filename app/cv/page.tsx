import styles from './styles.module.scss'
import { JobInfoList, DegreeInfo } from '../types'
import { FaFilePdf } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import WorkExperience from '../components/work-experience-section'
import Contacts from '../components/contacts'
import AsideBlock from '../components/utils/aside-block'
import Divider from '../components/utils/divider'

const jobs: JobInfoList = [
  {
    title: 'Fullstack Developer',
    company: 'Chainstack',
    date: 'Aug 2022 - July 2023',
    points: [
      'Developed and maintained multiple large features for the Chainstack platform',
      'Collaborated with the UX team to design user-friendly interfaces (of course, I also implemented them)',
      'Refactored legacy code to improve performance and maintainability',
      'Mentored junior developers',
      'Participated in the hiring process, conducted multiple interviews',
      'Participated in the product development process'
    ],
    results: [
      'Implemented a new feature that allows users to create and manage multiple projects and data instances',
      'The important features were always released on time',
      'New team members were onboarded quickly and efficiently',
      'Many older modules were refactored to improve performance and maintainability',
    ]
  },
  {
    title: 'Development Team Lead',
    company: 'KMS Lighthouse',
    date: 'Jan 2020 - Apr 2022',
    points: [
      'Led a crossfunctional team of developers, managed projects, and implemented SCRUM methodologies.',
      'Mentored team members, resolved conflicts, and facilitated career growth.',
    ],
    results: [
      'The team was able to deliver a large number of features',
      'Team members realised their potential and grew professionally',
      'Some team members were promoted to senior positions',
      'Some team members decided where they want to grow and what they want to do next'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'KMS Lighthouse',
    date: 'Sep 2019 - Jan 2020',
    points: [
      'Developed and maintained multiple large features for the KMS Lighthouse platform',
      'Led a crossfunctional team of 6 developers',
      'Refactored legacy code to improve performance and maintainability',
      'Mentored junior developers',
      'Participated in the hiring process, conducted multiple interviews',
      'Resolved multiple people conflicts and misunderstandings',
      'Conducted multiple performance reviews, corrected the team\'s behavior',
    ],
    results: [
      'Many modules were refactored and/or rewritten to newer technologies to improve performance and maintainability',
      'Many new modules were developed and released',
      'Junior developers were able to grow professionally',
      'New processes were introduced to improve the team\'s and whole company\'s performance',
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'GROTEM',
    date: 'Dec 2018 - Jun 2019',
    points: [
      'Built and refactored a b2b application using Angular.js and Angular 4',
      'Collaborated with cross-functional teams to deliver high-quality products',
      'Contributed to the development of a b2b application involving maps, routes, and payments using Angular.js and Angular 4',
    ],
    results: [
      'The application was migrated to newest versions of Angular instead of AngularJS',
      'Modules for maps and routes were implemented using Google Maps API and Yandex Maps API',
    ]
  }
]

const technologies = ['Vue.js','Angular','React','JavaScript','TypeScript', 'Pixi.js']

const degree: DegreeInfo =  {
  title: 'Bachelor of Software Engineering',
  school: ' Bonch Bruevich State University of Saint Petersburg',
  location: 'Saint Petersburg, Russia',
  date: 'Sep 2014 - Jun 2018',
  courses: 'Courses:',
  points: [
    'Web Development',
    'Software Engineering',
    'Algorithms and Data Structures',
    'Computer Architecture',
    'Computer Networks',
    'Database Systems',
    'Operating Systems',
  ]
}

export default function CV() {
    return (
      <article className='flex min-h-screen md:flex-row max-sm:flex-col max-sm:items-center md:items-start justify-around bg-white text-black'>
        <aside id='about-me' className={`flex flex-col md:sticky md:max-w-max md:w-1/3 md:h-screen max-sm:w-full max-sm:gap-2 top-0 px-1 ${styles.aside}`}>
          <div id='name-title' className='my-3'>
            <div className='flex sm:flex-col max-sm:flex-row items-center'>
              <Image
                  className={`rounded-full p-2`}
                  src='/me.jpg'
                  width={100}
                  height={100}
                  alt='My photo'
              ></Image>
              <h1 className='text-4xl text-left'>Dmitry <span className='font-semibold'>Metelev</span></h1>
            </div>
            <h2 className='text-2xl max-sm:text-center'>Software Developer</h2>
          </div>
          <div className='flex sm:flex-col max-sm:flex-row items-start justify-between flex-wrap'>
            <Contacts className='max-sm:px-2'/>
            <div className='flex items-center text-lg mt-3'>
              <FaFilePdf/>
              <Link href='/Metelev_CV.pdf'>
                Download CV
              </Link>
            </div>
            <Divider className='max-sm:hidden'/>
            <AsideBlock className='max-sm:hidden' title='Technologies' items={technologies}/>
          </div>
        </aside>
        <Divider className='sm:hidden'/>
        <section className='min-h-screen md:w-2/3'>
          <h1 className='text-3xl font-semibold text-left'>About me</h1>
          <Divider className='max-sm:hidden'/>
          <ul className={styles.list}>
            <li>Six years of experience specializing in <b>frontend and fullstack development</b>.</li>
            <li>Skilled in <b>team leadership</b> and working across diverse industries including B2B, B2C, and Web3.</li>
            <li>Able to work <b>both as a team-player and solo</b></li>
            <li>Vast <b>international communication</b> experience</li>
          </ul>
          <h1 id='work-experience' className='text-3xl font-semibold text-left'>Work experience</h1>
          <Divider className='max-sm:hidden' />
          <WorkExperience jobs={jobs}></WorkExperience>
        </section>
      </article>
    )
  }