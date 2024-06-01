import { NavLink } from "react-router-dom";
import logo from '../../../public/logo8.png'
import { IoMdNotificationsOutline } from "react-icons/io";


const Navbar = () => {
    const links = <>
        <li className="text-lg"><NavLink to={'/'}>Home</NavLink></li>
        <li className="text-lg"><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li className="text-lg"><NavLink to={'/order'}>Ordered</NavLink></li>
        <li className="text-lg"><NavLink to={'/secret'}>Secret</NavLink></li>
        <li>
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <span className="text-3xl lg:text-white md:text-white text-black">< IoMdNotificationsOutline ></IoMdNotificationsOutline></span>
                    <span className="badge badge-sm bg-slate-200  text-orange-500 p-2 font-bold indicator-item text-base">4</span>
                </div>
            </button>
        </li>
    </>
    return (
        <section >

            <div className="navbar fixed z-10  bg-opacity-20  text-white bg-black py-2">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                <div className="navbar-end">
                    <NavLink to={'/login'}> <button href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative px-2 py-2 transition-all ease-out  rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Log in</span>
                        </span>
                    </button></NavLink>







                </div>
            </div>


        </section>
    );
};

export default Navbar;