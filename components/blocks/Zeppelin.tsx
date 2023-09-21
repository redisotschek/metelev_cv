import styles from './zeppelin.module.scss';
import Image from 'next/image';

export const Zeppelin = ({
  src,
  title,
  className,
  onClick,
}: {
  src: string;
  title: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.zeppelin} ${className} relative w-max h-max flex justify-center items-center`}
    >
      <div className={`${styles.companyInfo} flex items-center justify-around`}>
        <Image src={src} width={24} height={24} alt={title}></Image>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};
