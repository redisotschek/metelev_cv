import styles from './home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import mePixel from '@/app/assets/images/big.png';

const networks = [
  {
    name: 'linkedin',
    pathToIcon: 'linkedin.png',
    link: 'https://www.linkedin.com/in/dmitrymetelev/',
  },
  {
    name: 'github',
    pathToIcon: 'github.png',
    link: 'https://github.com/redisotschek/',
  },
  {
    name: 'telegram',
    pathToIcon: 'telegram.png',
    link: 'https://t.me/gayboyberserker/',
  },
];

const getNetworkLink = ({ name, pathToIcon, link }) => {
  const iconsPrefix = '/icons/';
  const iconSize = 30;
  return (
    <Link href={link} key={name} target="_blank">
      <Image
        src={`${iconsPrefix}${pathToIcon}`}
        width={iconSize}
        height={iconSize}
        alt={name}
      ></Image>
    </Link>
  );
};

export const HomeSectionContent = () => {
  return (
    <div
      className={`section flex flex-col items-center h-full md:w-9/12 gap-5 m-auto justify-center`}
    >
      <div
        className={`${styles.card} py-12 px-12 card__text flex flex-row gap-4 items-center justify-around`}
      >
        <div>
          <h1 className="text-xl font-bold text-left">
            Hi! I'm <span className={`${styles.blueText}`}>Dima</span>
          </h1>
          <h2>
            I'm a <span className={`${styles.redText}`}>software engineer</span>{' '}
            with 7 years of experience in{' '}
            <span className={`${styles.greenText}`}>frontend</span> and{' '}
            <span className={`${styles.greenText}`}>fullstack</span>{' '}
            development.
          </h2>
        </div>
        <div>
          <Image src={mePixel} width={400} height={400} alt="me"></Image>
        </div>
      </div>
      <div
        className={
          'flex flex-row gap-5 justify-center items-center w-full text-white'
        }
      >
        {networks.map(getNetworkLink)}
        <Link
          href="/Metelev_CV.pdf"
          target="_blank"
          className="p-2 bg-blue-500 rounded-md"
        >
          Download CV
        </Link>
      </div>
    </div>
  );
};
