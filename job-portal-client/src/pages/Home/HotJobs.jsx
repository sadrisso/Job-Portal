import React, { useEffect, useState } from 'react';
import HotJob from './HotJob';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])


    return (
        <div className='mt-20'>
            <div>
                <h1 className='text-3xl font-semibold text-center my-10'>All Hot Jobs For You</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {jobs.map((job) => <HotJob job={job} key={job._id} />)}
            </div>
        </div>
    );
};

export default HotJobs;