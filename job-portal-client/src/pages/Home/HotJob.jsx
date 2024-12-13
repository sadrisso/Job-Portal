import React from 'react';
import { Link } from 'react-router-dom';

const HotJob = ({ job }) => {

    const { _id, title, location, category, description, company, company_logo } = job;

    return (
        <div>
            <div className="card bg-base-100 border h-[500px] py-5">
                <figure>
                    <img
                        className='w-[70px]'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>Category: {category}</p>
                    <p>Company: {company}</p>
                    <p>Location: {location}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/job/${_id}`}><button className="btn">Apply Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJob;




// {
//     "_id": "675c2723c033f487d9c935d9",
//     "title": "Mobile App Developer",
//     "location": "Bashundhara, Dhaka",
//     "jobType": "Hybrid",
//     "category": "Development",
//     "applicationDeadline": "2024-12-25",
//     "salaryRange": {
//         "min": 50000,
//         "max": 80000,
//         "currency": "bdt"
//     },
//     "description": "Develop and maintain mobile applications for Android and iOS platforms.",
//     "company": "AppCrafter",
//     "requirements": [
//         "Flutter",
//         "Kotlin",
//         "Swift",
//         "Firebase"
//     ],
//     "responsibilities": [
//         "Develop mobile apps",
//         "Ensure app performance",
//         "Collaborate with backend teams"
//     ],
//     "status": "active",
//     "hr_email": "jobs@appcrafter.com",
//     "hr_name": "Tareq Anwar",
//     "company_logo": "https://i.ibb.co/BLVwZzZ/icons8-whatsapp-logo-94.png"
// }