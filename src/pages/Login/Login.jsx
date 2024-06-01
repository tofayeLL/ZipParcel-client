import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";



const Login = () => {
    const [showPass, setShowPass] = useState(false);


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }


    return (

        <section>
            <div className="flex flex-col  justify-center items-center bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3)),url(https://i.ibb.co/PryLDHr/login.jpg)] bg-center bg-cover object-cover object-center ">


                <div className="flex flex-col justify-center  w-full max-w-lg  mx-auto space-y-4 my-6 bg-white shadow-xl lg:px-0 px-5  lg:py-12 py-6 rounded-2xl" >



                    <div className=" mx-auto ">
                        <h1 className="lg:text-4xl text-xl text-orange-400 font-bold mb-6 ">Login to your account</h1>
                    </div>


                    <form onSubmit={handleLogin} className="lg:w-[70%] w-full mx-auto space-y-5 rounded-lg " >

                        <div>
                            <p className="mb-1 font-medium">User Email</p>
                            <input type="email" name="email" placeholder="Email address" className="input input-bordered w-full" required />
                        </div>

                        <div >
                            <p className="mb-1 font-medium"> Password</p>

                            <div className="relative">
                                <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered w-full" required />

                                <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>

                            </div>
                        </div>
                        





                        <div>
                            <button className="btn hover:text-orange-400 text-white text-xl w-full bg-orange-400" type="submit">Login</button>
                        </div>

                        <div className="flex flex-col w-full border-opacity-50 ">

                            <div className="divider">Login with social accounts</div>

                        </div>


                    </form>



                    <div className="lg:w-[70%] w-full mx-auto" >

                        <Link><button /* onClick={handleGoogleLogin} */ className="btn w-full bg-orange-400 text-white"><FaGoogle className="text-2xl" ></FaGoogle> <span className="text-lg">Login with Google</span></button></Link>

                    </div>




                    <div className="text-center " >
                        <p className="font-medium mt-6 lg:text-base text-sm mr-2">Do not have an account ?  Please <Link to={'/signUp'} className="btn-active text-orange-600 btn-link">Register</Link></p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;