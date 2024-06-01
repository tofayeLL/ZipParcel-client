import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CirclesWithBar } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();


    if (loading) {
        return <div className="flex flex-col justify-center min-h-screen items-center ">
            {/* <img src={spinner} alt="" /> */}

            <CirclesWithBar
                height="200"
                width="300"
                color="#4f4d5d"
                outerCircleColor="#4f4d5d"
                innerCircleColor="#4f4d5d"
                barColor="#f88207"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>



};

export default PrivateRoute;