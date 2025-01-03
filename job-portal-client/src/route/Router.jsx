import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from '../pages/Home/Home';
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/JobApply/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import AllJobs from "../pages/AllJobs";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <SignIn />
            },
            {
                path: "/all-jobs",
                element: <AllJobs />
            },
            {
                path: "/job/:id",
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:8000/job/${params.id}`)
            },
            {
                path: "/jobApply/:id",
                element: <JobApply />
            },
            {
                path: "/my-applications",
                element: <PrivateRoute><MyApplications /></PrivateRoute>
            },
            {
                path: "/addJobs",
                element: <AddJob />
            },
            {
                path: "/myPostedJobs",
                element: <MyPostedJobs />
            }
        ]
    },
]);