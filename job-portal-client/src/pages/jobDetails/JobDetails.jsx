import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const data = useLoaderData();
    const { _id, title, location, category, description, company, company_logo } = data;

    return (
        <div className='p-5 border text-center flex items-center justify-evenly h-[500px] mt-20'>
            <div>
                <h2>This is the job about <span className='text-2xl font-bold'>{title}</span></h2>
                <img src={company_logo} alt="" />
            </div>
            <div>
                <p>{company}</p>
                <p>{location}</p>
                <div>
                    <Link to={`/jobApply/${_id}`}><button className='btn btn-sm'>Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;