import axios from "axios";
// import { div } from "motion/react-client";
import { useEffect, useState } from "react";


const AllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/all-jobs?sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`)
            .then(res => setJobs(res.data))
    }, [sort, search, minSalary, maxSalary])


    return (
        <div className="mt-20">
            <div className="flex justify-between items-center mb-10 px-2 bg-slate-400 p-5">
                <h1 className="text-4xl font-bold text-center text-gray-600">All jobs</h1>
                <div className="flex items-center gap-2">
                    <div className="flex gap-2 items-center">
                        <label className="input input-bordered flex items-center gap-2">
                            <input onKeyUp={(e) => setMinSalary(e.target.value)} type="text" className="grow" placeholder="Min Salary" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <input onKeyUp={(e) => setMaxSalary(e.target.value)} type="text" className="grow" placeholder="Max Salary" />
                        </label>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input onKeyUp={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search By Loation" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && "btn-info"}`}>
                        {
                            sort ? "Sorted By Price" : "Sort by price"
                        }
                    </button>
                </div>
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
                                <p>Min Salary: {job?.salaryRange.min}</p>
                                <p>Max Salary: {job?.salaryRange.max}</p>
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