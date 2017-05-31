import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class JobList extends React.Component {

    render() {
        console.log(this.props)
        const jobList = [];
        this.props.jobs.forEach((job, index) => {
            jobList.push(<li key={index}> 
                <Link to={{ pathname: `/job/${job.id}`, state: { job: job } }}>
                    <div>{job.job} {job.company} {job.link}</div>
                </Link>
             </li>)
        })
        return (
            <div className="job-list">
                <Link to='/createjob'>
                <button>Create New Job</button>
               </Link> <h1>Job View</h1>
                <h2>Job List</h2>
                <h3>Create New Job</h3>
                <ul>
                    {jobList}
                </ul>
            </div>
        )
    }
}

export default JobList