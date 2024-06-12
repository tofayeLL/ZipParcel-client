import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import BookParcel from "../pages/Dashboard/BookParcel/BookParcel";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import DeliveryList from "../pages/Dashboard/DeliveryMan/DeliveryList/DeliveryList";
import MyReviews from "../pages/Dashboard/DeliveryMan/MyReviews/MyReviews";
import AllParcels from "../pages/Dashboard/Admin/AllParcels/AllParcels";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AllDeliveryMen from "../pages/Dashboard/Admin/AllDeliveryMen/AllDeliveryMen";
import Statistics from "../pages/Dashboard/Admin/Statistics/Statistics";
import UpdateParcel from "../pages/Dashboard/MyParcels/UpdateParcel";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";







export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]

    },


    // login registration routes
    /*  { path: '/login', element: <Login> </Login> },
     { path: '/signup', element: <SignUp></SignUp> }, */







    // Dashboard routes
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Admin routes
            {
                path: 'allParcel',
                element: <PrivateRoute><AllParcels></AllParcels></PrivateRoute>
            },
            {
                path: 'allUsers',
                element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
            },
            {
                path: 'allDeliveryMen',
                element: <PrivateRoute><AllDeliveryMen></AllDeliveryMen></PrivateRoute>
            },
            {
                path: 'statistics',
                element: <PrivateRoute><Statistics></Statistics></PrivateRoute>
            },



            // normal user routes
            {
                path: 'bookParcel',
                element: <PrivateRoute><BookParcel></BookParcel></PrivateRoute>
            },
            {
                path: 'myParcel',
                element: <PrivateRoute><MyParcels></MyParcels></PrivateRoute>
            },
            {
                path: 'updateParcel/:id',
                element: <PrivateRoute><UpdateParcel></UpdateParcel></PrivateRoute>,
                loader: ({ params }) => fetch(`https://zip-parcel-server.vercel.app/updateParcel/${params.id}`)
            },
            {
                path: 'myProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },


            // deliverymen routes
            {
                path: 'deliveryList',
                element: <PrivateRoute><DeliveryList></DeliveryList></PrivateRoute>
            },
            {
                path: 'myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },

        ]
    },








]);

