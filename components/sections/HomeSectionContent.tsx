import styles from './home.module.scss';
import Image from 'next/image';

export const HomeSectionContent = () => {
  return (
    <div className={`section flex items-center justify-center h-full`}>
      <div
        className={`flex flex-row items-center gap-5 justify-between md:w-9/12`}
      >
        <div className={`${styles.card} py-12 px-12 card__text`}>
          <h1 className="text-xl font-bold text-left">
            Hi, I'm <span className={`${styles.blueText}`}>Dima</span>
          </h1>
          <h2>
            I'm a <span className={`${styles.redText}`}>software engineer</span>{' '}
            with 7 years of experience
          </h2>
        </div>
        <div>
          <Image src="/me.jpg" width={300} height={300} alt="me"></Image>
        </div>
      </div>
    </div>
  );
};
