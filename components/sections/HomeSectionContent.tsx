import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../blocks/card';

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

export const HomeSectionContent = ({ isMobileView }) => {
  return (
    <div
      className={`section flex flex-col items-center h-full max-md:pt-12 md:w-9/12 gap-5 m-auto md:justify-center`}
    >
      <Card className="gap-4 flex max-md:flex-col-reverse md:flex-row max-md:px-2 md:px-12 items-center max-md:justify-start md:justify-around">
        <div className="md:text-left">
          <h1 className="text-xl font-bold">
            Hi! I&apos;m <span className={'blueText'}>Dima</span>
          </h1>
          <h2 className="pt-4">
            I&apos;m a <span className={'redText'}>software engineer</span> with
            <span className={'redText'}> 7 years</span> of experience in{' '}
            <span className={'greenText'}>frontend</span> and{' '}
            <span className={'greenText'}>fullstack</span> development.
          </h2>
          <div className=" mt-5">
            <Link
              href="/Metelev_CV.pdf"
              target="_blank"
              className="p-2 bg-blue-500 rounded-md"
            >
              Download CV
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/big.PNG"
            width={isMobileView ? 200 : 500}
            height={isMobileView ? 200 : 500}
            alt="me"
          ></Image>
        </div>
      </Card>
      <div
        className={
          'flex flex-row gap-5 justify-center items-center w-full text-white'
        }
      >
        {networks.map(getNetworkLink)}
      </div>
    </div>
  );
};
