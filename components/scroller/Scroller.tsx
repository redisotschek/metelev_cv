// import dynamic from 'next/dynamic'
// const ScrollerSection = dynamic(() => import('@/components/ScrollerSection'), {ssr: false})
import styles from './styles.module.scss';
import ScrollerSection from '../ScrollerSection';

export default function Scroller(props) {
  const { sections } = props;
  const sectionsWithRemovedContent = sections.map((section) => {
    const { content, ...rest } = section;
    return rest;
  });
  return (
    <main className={styles.scroller}>
      {sections.map((section) => (
        <ScrollerSection
          key={section.id}
          {...section}
          sections={sectionsWithRemovedContent}
        />
      ))}
    </main>
  );
}
