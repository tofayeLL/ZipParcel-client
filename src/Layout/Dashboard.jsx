import { FaBook } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <section>

            {/* dashboard container */}
            <div className="flex">


                {/* pages */}
                <div className="w-64 min-h-screen bg-amber-400">
                    <ul className="menu p-4">

                        <li>
                            <NavLink to={'/dashboard/bookParcel'}><span><FaBook></FaBook> </span>Book a Parcel</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/myParcel'}><span><FaBook></FaBook> </span>My Parcels</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/myProfile'}><span><FaBook></FaBook> </span>My Profile</NavLink>
                        </li>




                    </ul>

                </div>



                {/* outlet */}

                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>







            </div>





        </section>
    );
};

export default Dashboard;