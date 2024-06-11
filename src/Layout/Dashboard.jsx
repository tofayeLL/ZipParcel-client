import { FaBook, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";


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
                                    <NavLink to={'/dashboard/allParcel'}><span><FaBook></FaBook> </span>All Parcels</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allUsers'}><span><FaBook></FaBook> </span>All Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allDeliveryMen'}><span><FaBook></FaBook> </span>All Delivery Men</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/statistics'}><span><FaBook></FaBook> </span>Statistics</NavLink>
                                </li>
                            </>
                        }



                        {/* normal user */}
                        {
                            user && <>

                                <li  >
                                    <NavLink to={'/dashboard/bookParcel'}><span><FaBook></FaBook> </span>Book a Parcel</NavLink>
                                </li>
                                <li >
                                    <NavLink to={'/dashboard/myParcel'}><span><FaBook></FaBook> </span>My Parcels</NavLink>
                                </li>
                                <li >
                                    <NavLink to={'/dashboard/myProfile'}><span><FaBook></FaBook> </span>My Profile</NavLink>
                                </li>
                            </>

                        }


                        {/* delivery men */}
                        {
                            deliveryMen && <>

                                <li >
                                    <NavLink to={'/dashboard/deliveryList'}><span><FaBook></FaBook> </span>My Delivery List</NavLink>
                                </li>
                                <li >
                                    <NavLink to={'/dashboard/myReviews'}><span><FaBook></FaBook> </span>My Reviews</NavLink>
                                </li>
                            </>

                        }












                        <div className="divider "></div>



                        <li>
                            <NavLink to={'/'}><span> <FaHome></FaHome></span>Home</NavLink>
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