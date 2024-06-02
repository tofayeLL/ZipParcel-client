import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import BookParcel from "../pages/Dashboard/BookParcel/BookParcel";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]

    },
    { path: '/login', element: <Login> </Login> },
    { path: '/signup', element: <SignUp></SignUp> },



    // Dashboard routes
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // normal user routes
            {
                path: 'bookParcel',
                element: <BookParcel></BookParcel>
            },
            {
                path: 'myParcel',
                element: <MyParcels></MyParcels>
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
        ]
    }

]);

