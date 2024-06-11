
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";


const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div >
                {
                    navigation.state === "loading" ?

                        <div className="flex flex-col justify-center min-h-screen items-center">
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

                        :
                        <Outlet></Outlet>
                }
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;