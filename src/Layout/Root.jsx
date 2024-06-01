
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div>
                <Outlet></Outlet>

            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;