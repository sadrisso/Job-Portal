import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {

    const navigate = useNavigate()
    const { user } = useAuth()

    const handleSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)

        const { max, min, currency, ...newData } = initialData

        newData.salaryRange = { min, max, currency }
        newData.requirements = newData.requirements.split("\n")
        newData.responsibilities = newData.responsibilities.split("\n")

        console.log(newData)

        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Successfully Added")
                    navigate("/")
                }
            })
    }

    return (
        <div>
            <form className="card-body" onSubmit={handleSubmit}>
                {/* title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="job title" className="input input-bordered" required />
                </div>

                {/* location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name="location" placeholder="job location" className="input input-bordered" required />
                </div>

                {/* job type */}
                <div>
                    <select className="select select-bordered w-full max-w-xs" name="jobType" defaultValue="JobType?">
                        <option disabled>JobType?</option>
                        <option>Full time</option>
                        <option>Part time</option>
                    </select>
                </div>

                {/* deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name="deadline" placeholder="deadline" className="input input-bordered" required />
                </div>

                {/* salary range */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <div className="flex gap-2">
                        <input type="number" name="min" placeholder="min" className="input input-bordered" required />
                        <input type="number" name="max" placeholder="max" className="input input-bordered" required />
                        <select className="select select-bordered w-full max-w-xs" name="currency" defaultValue="Currency">
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                        </select>
                    </div>
                </div>

                {/* description */}
                <div>
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered resize-none h-[80px] w-full" name="description" placeholder="description"></textarea>
                </div>

                {/* company */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company</span>
                    </label>
                    <input type="text" name="company" placeholder="company name" className="input input-bordered" required />
                </div>

                {/* requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered resize-none h-[80px] w-full" name="requirements" placeholder="put each requirement in a new line"></textarea>
                </div>

                {/* responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered resize-none h-[80px] w-full" name="responsibilities" placeholder="write each responsibilities in a new line"></textarea>
                </div>

                {/* hr name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="hrName" placeholder="hr name" className="input input-bordered" required />
                </div>

                {/* hr email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} readOnly name="hrEmail" placeholder="hr email" className="input input-bordered" required />
                </div>

                {/* company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo</span>
                    </label>
                    <input type="url" name="companyLogo" placeholder="company logo" className="input input-bordered" required />
                </div>

                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;

