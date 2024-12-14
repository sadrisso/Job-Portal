import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobs(data)
            })
    }, [user?.email])

    return (
        <div>
            {jobs.length}
        </div>
    );
};

export default MyApplications;