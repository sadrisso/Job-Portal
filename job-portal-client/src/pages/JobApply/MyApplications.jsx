import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyApplications = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/job-applications/?email=${user?.email}`, { withCredentials: true })
            .then(res => { (setJobs(res.data)) })

    }, [user?.email])

    const handleRemove = id => {
        const remaining = jobs.filter((job) => job._id !== id)
        setJobs(remaining)
    }

    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-10">My Applications: {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job.title}</div>
                                        <div className="text-sm opacity-50">{job.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button onClick={() => handleRemove(job._id)} className="btn btn-ghost btn-xs">X</button>
                            </th>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;