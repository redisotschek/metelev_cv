import styles from './card.module.scss';

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${styles.card} ${className} rounded-md card__text`}>
      {children}
    </div>
  );
};
