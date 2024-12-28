import axios from "axios";
// import { div } from "motion/react-client";
import { useEffect, useState } from "react";


const AllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [sort, setSort] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/all-jobs?sort=${sort}`)
            .then(res => setJobs(res.data))
    }, [sort])


    return (
        <div className="mt-20">
            <div className="flex justify-between mb-10 px-2">
                <h1 className="text-4xl font-bold text-center text-gray-600">All jobs</h1>
                <button onClick={() => setSort(!sort)} className={ `btn btn-neutral ${sort && "btn-info"}`}>
                    {
                        sort ? "Sorted By Price" : "Sort by price"
                    }
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-2">
                {
                    jobs.map((job, i) =>
                        <div className="card card-compact border p-2" key={i}>
                            <figure>
                                <img
                                    className="w-[70px] my-5"
                                    src={job?.company_logo}
                                    alt="Shoes" />
                            </figure>
                            <hr />
                            <div className="my-5">
                                <h2 className="card-title">{job?.location}</h2>
                                <p>Job Type: {job?.jobType}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllJobs;