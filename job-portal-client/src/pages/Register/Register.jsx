import React from 'react';
import registerAnimation from "../../assets/lottie/register.json"
import Lottie from "lottie-react";

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse border md:p-32">
                    <div className="text-center lg:text-left">
                        <p className="py-6 w-52">
                            <Lottie animationData={registerAnimation}></Lottie>
                        </p>
                    </div>
                    <div className="card bg-base-100 shrink-0 shadow-2xl">
                        <form className="card-body">
                        <h1 className="text-5xl font-bold m-5">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;