import { FaBox, FaHome, FaListUl, FaUsersCog } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";

import { MdLibraryAddCheck, MdRateReview, MdTransferWithinAStation } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";


const Dashboard = () => {


    const { getUser } = useUserRole();
    // console.log(getUser);

    // For Check user Admin
    const admin = getUser?.userType === 'Admin';

    // For Check user User
    const user = getUser?.userType === 'User';

    // For Check user DeliveryMen
    const deliveryMen = getUser?.userType === 'DeliveryMen';






    return (
        <section>

            {/* dashboard container */}
            <div className="flex">


                {/* pages */}
                <div className="w-48  min-h-screen bg-amber-400">
                    <ul className="menu space-y-1 w-44">


                        {/* Admin */}

                        {
                            admin && <>
                                <li>
                                    <NavLink to={'/dashboard/allParcel'}><span className="text-base"><FaBox></FaBox > </span>All Parcels</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allUsers'}><span className="text-lg"><FaUsersCog></FaUsersCog > </span>All Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allDeliveryMen'}><span className="text-lg"><MdTransferWithinAStation></MdTransferWithinAStation > </span>All Delivery Men</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/statistics'}><span className="text-lg"><IoStatsChart></IoStatsChart> </span>Statistics</NavLink>
                                </li>
                            </>
                        }



                        {/* normal user */}
                        {
                            user && <>

                                <li  >
                                    <NavLink to={'/dashboard/bookParcel'}><span className="text-lg"><MdLibraryAddCheck ></MdLibraryAddCheck > </span>Book a Parcel</NavLink>
                                </li>
                                <li >
                                    <NavLink to={'/dashboard/myParcel'}><span className="text-lg"><FaBoxArchive ></FaBoxArchive > </span>My Parcels</NavLink>
                                </li>
                                <li >
                                    <NavLink to={'/dashboard/myProfile'}><span className="text-lg"><CgProfile></CgProfile > </span>My Profile</NavLink>
                                </li>
                            </>

                        }


                        {/* delivery men */}
                        {
                            deliveryMen && <>

                                <li >
                                    <NavLink to={'/dashboard/deliveryList'}><span ><FaListUl></FaListUl > </span>My Delivery List</NavLink>
                                </li>
                                <li >
                                    <NavLink to={'/dashboard/myReviews'}><span className="text-lg"><MdRateReview></MdRateReview > </span>My Reviews</NavLink>
                                </li>
                            </>

                        }








                        <div className="divider "></div>



                        <li>
                            <NavLink to={'/'}><span> <FaHome className="text-lg"></FaHome></span>Home</NavLink>
                        </li>




                    </ul>

                </div>



                {/* outlet */}

                <div className="flex-1 lg:px-4 px-0">
                    <Outlet></Outlet>
                </div>







            </div>





        </section>
    );
};

export default Dashboard;