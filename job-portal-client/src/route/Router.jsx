
import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from '../pages/Home/Home';
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";


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
            }
        ]
    },
]);