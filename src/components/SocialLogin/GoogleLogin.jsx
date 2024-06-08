import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const GoogleLogin = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { googleSignIn } = useAuth();


    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL,
                    userType: 'User',
                    // delivered: 0,

                }

                axiosPublic.post('/users', userInfo)
                    .then(data => {
                        console.log(data.data);
                        console.log('login with google successfully');
                        toast.success("Login Successfully");
                        navigate(from, { replace: true });
                    })

            })

            .catch((error) => {
                console.log(error.message);
            })

    }




    return (
        <div>

            <div className=" w-full mx-auto" >

                <button onClick={handleGoogleLogin} className="btn w-full bg-orange-400 text-white"><FaGoogle className="text-2xl" ></FaGoogle> <span className="text-lg">Login with Google</span></button>

            </div>

        </div>
    );
};

export default GoogleLogin;