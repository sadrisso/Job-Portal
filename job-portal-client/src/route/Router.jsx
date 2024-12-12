
import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from '../pages/Home/Home';
import Register from "../pages/Register/Register";


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
            }
        ]
    },
]);