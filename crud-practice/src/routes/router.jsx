import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/admin/Admin";
import User from "../pages/user/User";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />, 
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/user",
        element: <User />,
    },
]);
