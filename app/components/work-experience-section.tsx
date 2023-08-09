import { JobInfo, JobInfoList } from "../types"
import Divider from "./utils/divider"

const listStyle = {
  listStyle: 'square'
}

function CompanyExperience (props: JobInfo) {
  return (
    <li key={props.company + props.date} className='my-2'>
      <h2 className='text-2xl font-semibold'>
        { props.company }
      </h2>
      <h3>
        { props.date }
      </h3>
      <h3 className='text-xl font-semibold'>
        {props.title}
      </h3>
      <div className='ml-3'>
        {
          props.points?.map((point, index) => {
            return (
              <p key={'point' + index}>{ point }</p>
            )
          })
        }
        {props.results.length > 0 && <b className="text-lg">Results</b>}
        <ul style={listStyle} className='ml-4'>
          {
            props.points?.map((result, index) => {
              return (
                <li key={'result' + index}>{ result }</li>
              )
            })
          }
        </ul>
      </div>
      <Divider />
    </li>
  )
}

export default function WorkExperience ({jobs}: {jobs: JobInfoList}) {

  return (
    <ul>
      {
        jobs.map((job: JobInfo) => {
          return (
            <CompanyExperience key={job.title} {...job} />
          )
        })
      }
    </ul>
  )
}
