import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import GoogleLogin from "../../components/SocialLogin/GoogleLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { createUser, updateUserProfile } = useAuth();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        // console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);

                updateUserProfile(data.name, data.photoURL);
                // console.log('user profile update successfully');

                // create user info save in database
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    photo: data.photoURL,
                    phone: data.phone,
                    userType: data.userType,

                }

                // console.log(userInfo);


                axiosPublic.post('/users', userInfo)
                    .then(data => {
                        // console.log(data.data);


                        if (data.data.insertedId) {
                            // console.log('user added database successfully');
                            toast.success("Sign up Successfully");
                            reset();
                            navigate('/login')

                        }
                    })


            })
            .catch((error) => {
                // console.log(error.message);
                toast.error(error.message.replace('auth/', ''));
            })
    }


    // aos
    useEffect(() => {
        AOS.init({
          duration : 700
        });
      }, []);






    return (
        <section>

            <div className="flex flex-col  justify-center items-center lg:py-20 py-12 bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3)),url(https://i.ibb.co/fH0S3yh/parcel5.jpg)] bg-center bg-cover object-cover object-center  ">

           


                <div className="card shrink-0 w-full max-w-lg py-6 shadow-2xl bg-base-100 my-8 " data-aos="zoom-in-down">
                    <div className=" mx-auto text-orange-400">
                        <h1 className="lg:text-4xl text-xl font-bold ">Create an account</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">User Name</span>
                            </label>
                            <input type="text"   {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-400'>Name field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text"   {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" />
                            {errors.name && <span className='text-red-400'>photoURL field is required</span>}

                        </div>



                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email"    {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-400'>Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="phone"    {...register("phone", { required: true })} name="phone" placeholder="Your Number" className="input input-bordered" />
                            {errors.phone && <span className='text-red-400'>phone field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">


                                <input type={showPass ? 'text' : 'password'}    {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/


                                })} name="password" placeholder="password" className="input input-bordered w-full" />

                                {errors.password?.type === 'required' && <span className='text-red-400'>Password field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-400'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-400'>Password must be less 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-400'>Password must have one uppercase and one lowercase and one number,  one special characters</span>}

                                {/* eye icon or show password icon */}
                                <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>



                            </div>


                        </div>

                        {/* user type */}
                        <div className="form-control" required>

                            <label className="label">
                                <span className="label-text font-semibold">UserType</span>
                            </label>

                            <select required defaultValue="" name="userType" {...register("userType", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="">Choose a UserType</option>
                                <option value="User">User</option>
                                {/* <option value="Admin">Admin</option> */}
                                <option value="DeliveryMen">DeliveryMen</option>

                            </select>
                            {errors.userType && <span className='text-red-400'>userType field is required</span>}


                        </div>


                        <div className="form-control mt-6">
                            <input className="btn hover:text-orange-400 text-white text-xl w-full bg-orange-400" type="submit" value="Sign up" />

                        </div>
                        <div className="flex flex-col w-full border-opacity-50 ">

                            <div className="divider">Login with social accounts</div>

                        </div>

                        {/* social login */}
                        <div>
                            <GoogleLogin></GoogleLogin>
                        </div>


                        <div className="text-center " >
                            <p className="font-medium mt-6 lg:text-base text-sm mr-2">have an account ?  Please <Link to={'/login'} className="btn-active text-orange-600 btn-link">Login</Link></p>
                        </div>

                    </form>
                </div>





         


            </div>





        </section>
    );
};

export default SignUp;