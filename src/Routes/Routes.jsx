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
import DeliveryList from "../pages/Dashboard/DeliveryMan/DeliveryList/DeliveryList";
import MyReviews from "../pages/Dashboard/DeliveryMan/MyReviews/MyReviews";
import AllParcels from "../pages/Dashboard/Admin/AllParcels/AllParcels";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AllDeliveryMen from "../pages/Dashboard/Admin/AllDeliveryMen/AllDeliveryMen";
import Statistics from "../pages/Dashboard/Admin/Statistics/Statistics";
import UpdateParcel from "../pages/Dashboard/MyParcels/UpdateParcel";






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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Admin routes
            {
                path: 'allParcel',
                element: <AllParcels></AllParcels>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'allDeliveryMen',
                element: <AllDeliveryMen></AllDeliveryMen>
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>
            },



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
                path: 'bookedParcel/:id',
                element: <UpdateParcel></UpdateParcel>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookedParcel/${params.id}`)
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },


            // deliverymen routes
            {
                path: 'deliveryList',
                element: <DeliveryList></DeliveryList>
            },
            {
                path: 'myReviews',
                element: <MyReviews></MyReviews>
            },

        ]
    }

]);

