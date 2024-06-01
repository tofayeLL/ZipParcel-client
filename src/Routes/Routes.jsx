import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]

    },

]);

