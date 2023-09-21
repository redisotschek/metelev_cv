import { JobInfo, JobInfoList } from '../types';

const listStyle = {
  listStyle: 'square',
};

export function CompanyExperience(props: JobInfo) {
  return (
    <article key={props.company + props.date} className="my-2">
      <h2 className="text-2xl font-semibold blueText">{props.company}</h2>
      <h3 className="greenText mt-3">{props.date}</h3>
      <h3 className="text-xl font-semibold redText mt-3">{props.title}</h3>
      <div className="mt-3">
        <div className="greenText text-lg">Key responsibilities:</div>
        <ul style={listStyle} className="ml-4">
          {props.points?.map((point, index) => {
            return (
              <li className="mt-1" key={'point' + index}>
                {point}
              </li>
            );
          })}
        </ul>
        {props.results.length > 0 && (
          <>
            <b className="greenText text-lg">Results:</b>
            <ul style={listStyle} className="ml-4">
              {props.results?.map((result, index) => {
                return (
                  <li className="mt-1" key={'result' + index}>
                    {result}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}

export function WorkExperience({ jobs }: { jobs: JobInfoList }) {
  return (
    <ul>
      {jobs.map((job: JobInfo) => {
        return <CompanyExperience key={job.title} {...job} />;
      })}
    </ul>
  );
}
