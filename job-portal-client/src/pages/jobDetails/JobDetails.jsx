import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const data = useLoaderData();
    const { _id, title, location, category, description, company, company_logo } = data;

    return (
        <div>
            <h2>This is the job about <span className='text-2xl font-bold'>{title}</span></h2>
        </div>
    );
};

export default JobDetails;