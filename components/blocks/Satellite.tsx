import styles from './satellite.module.scss';
import Image from 'next/image';

export const Satellite = ({
  title,
  src,
  years,
}: {
  title: string;
  src: string;
  years: number;
}) => {
  return (
    <div
      className={`satellite-container flex flex-col justify-center ${styles.satelliteContainer}`}
    >
      <h1 className="text-center mb-5">{title}</h1>
      <Image
        className="m-auto"
        src={src}
        height={64}
        width={64}
        alt={title}
      ></Image>
      <h2 className="text-center mt-2">
        <span className="redText">{years}</span> years
      </h2>
    </div>
  );
};
