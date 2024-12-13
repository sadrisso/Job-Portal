import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const JobApply = () => {

    const { id } = useParams()
    const { user } = useAuth();
    console.log(user)

    const handleApply = e => {
        e.preventDefault()

        const form = e.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;

        console.log(linkdin, github)

        const jobApplication = {
            jobId: id,
            applicant_email: user?.email,
            linkdin,
            github
        }

        fetch("http://localhost:5000/job-applications", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='mt-20 text-center'>
            <h1 className="text-3xl font-bold my-10">Apply For This Job Now!</h1>
            <div className="card bg-base-100 w-full shadow-2xl">
                <form className="card-body" onSubmit={handleApply}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkdIn URL</span>
                        </label>
                        <input type="url" name='linkdin' placeholder="LinkdIn URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github URL</span>
                        </label>
                        <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-success">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;