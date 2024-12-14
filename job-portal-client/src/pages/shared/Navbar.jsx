import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import logo from "../../assets/logo.png"

const Navbar = () => {

    const links = <div className='flex gap-5'>
        <Link to="/">Home</Link>
        <Link to="/my-applications">My Applications</Link>
        <Link to="/addJobs">Add Job</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
    </div>

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("User signed out...")
            })
            .catch((err) => {
                console.log("Err: ", err)
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl"><img className='w-12' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><button className='btn' onClick={handleSignOut}>Sign Out</button></> :
                        <>
                            <Link className='mr-2' to="/register"><button className="btn">Register</button></Link>
                            <Link to="/login"><button className="btn">Login</button></Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;