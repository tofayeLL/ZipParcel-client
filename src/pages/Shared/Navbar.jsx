import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo6 (2).png'
import { IoMdNotificationsOutline } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useUserRole from "../../hooks/useUserRole";
import { useEffect, useState } from "react";


const Navbar = () => {
    const { getUser } = useUserRole();
    console.log(getUser)

    const { user, logOutUser } = useAuth();
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light');


    // theme useEffects for store theme in local storage

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])


    //   theme handler
    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light')
        }
    }






    const links = <>
        <li className="text-lg"><NavLink to={'/'}>Home</NavLink></li>
        {getUser.userType === 'Admin' ? <li className="text-lg"><NavLink to={'/dashboard/statistics'}>Dashboard</NavLink></li>
            :
            <li className="text-lg"><NavLink to={'/dashboard'}>Dashboard</NavLink></li>

        }
     {/*    <li className="text-lg"><NavLink to={'/order'}>Ordered</NavLink></li>
        <li className="text-lg"><NavLink to={'/testBoard'}>Secret</NavLink></li> */}

        <li>
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <span className="text-3xl lg:text-white md:text-white text-black">< IoMdNotificationsOutline ></IoMdNotificationsOutline></span>
                    <span className="badge badge-sm bg-slate-200  text-orange-500 p-2 font-bold indicator-item text-base">0</span>
                </div>
            </button>
        </li>
    </>




    const handleLogOutUser = (e) => {
        e.preventDefault();
        // logout user
        logOutUser()
            .then(() => {
                // console.log('logout successfully');
                toast.success("Logout Successfully");
            }).catch((error) => {
                // console.log(error.message);
                toast.error(error.message);

            });
    }






    return (
        <section >

            <div className="navbar fixed z-10  bg-opacity-20  text-white bg-black py-2">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="font-bold lg:text-4xl md:text-2xl flex items-center gap-2 "><span><img src={logo} alt="" className="w-10  lg:inline md:inline hidden text-orange-600" /></span><span className="text-orange-600"><span className="text-white">Zip</span>Parcel</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {
                            links

                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-4">


                    {/* theme */}
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleTheme} />

                        {/* sun icon */}
                        <svg className="swap-off fill-current lg:w-12 md:w-12 w-10 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>











                    {user ?
                        <div className="flex  justify-center items-center gap-5  mr-4">

                            <div className="dropdown dropdown-end  text-black">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-14 rounded-full ">
                                        <img alt="image" src={user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} className="" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-base-100 rounded-box  w-52">
                                    <li>
                                        <a >
                                            {user?.displayName || 'Tofayel'}

                                        </a>
                                    </li>
                                    <li><Link to={'/dashboard'}><button>Dashboard</button></Link></li>
                                    <li><Link onClick={handleLogOutUser} ><button>Logout</button></Link></li>
                                </ul>
                            </div>

                        </div>


                        :





                        <NavLink to={'/login'}> <button href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative px-2 py-2 transition-all ease-out  rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">Log in</span>
                            </span>
                        </button></NavLink>

                    }











                </div>
            </div>


        </section>
    );
};

export default Navbar;