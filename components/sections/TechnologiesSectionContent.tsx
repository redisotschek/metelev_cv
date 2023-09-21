import styles from './technologies.module.scss';
import { Satellite } from '../blocks/Satellite';
import { Card } from '../blocks/card';

const satellites = [
  {
    title: 'JavaScript',
    src: '/images/logos/js.png',
    years: 10,
  },
  {
    title: 'TypeScript',
    src: '/images/logos/ts.png',
    years: 7,
  },
  {
    title: 'Vue.js',
    src: '/images/logos/vue.png',
    years: 7,
  },
  {
    title: 'Angular',
    src: '/images/logos/angular.png',
    years: 5,
  },
  {
    title: 'React',
    src: '/images/logos/react.png',
    years: 2,
  },
  {
    title: 'SASS',
    src: '/images/logos/sass.png',
    years: 7,
  },
  {
    title: 'jQuery',
    src: '/images/logos/jquery.png',
    years: 9,
  },
];

export const TechnologiesSectionContent = () => {
  return (
    <div className="flex h-full justify-center flex-col gap-10">
      <Card className="w-2/3 p-12">
        <h2 className="text-lg">Technologies</h2>
        <p className="mt-5">
          This is the list of frontend technologies I{`'`}m most experienced
          with.
        </p>
      </Card>
      <div
        className={`flex justify-around flex-wrap w-screen items-center gap-3 ${styles.container}`}
      >
        {satellites.map((satellite) => (
          <Satellite
            title={satellite.title}
            src={satellite.src}
            years={satellite.years}
            key={satellite.title}
          />
        ))}
      </div>
    </div>
  );
};
