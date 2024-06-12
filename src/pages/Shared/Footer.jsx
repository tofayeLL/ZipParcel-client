import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../../assets/images/logo6 (2).png'

const Footer = () => {


    return (
        <section>




            <div className="bg-[#000000]   lg:mt-28 mt-8">

                <footer className="px-4 py-6 divide-y text-white">
                    <div className="container lg:px-20 md:px-14 flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0  ">
                        <div className="lg:w-1/3">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start mb-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-base-200">
                                    <img className="p-1" src={logo} alt="" />
                                </div>
                                <span className="self-center text-4xl  text-white font-semibold">Zip<span className="text-orange-500">Parcel</span></span>
                            </a>


                        </div>
                        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                            <div className="space-y-3">
                                <h3 className="tracking-wide text-lg  font-semibold">About Us</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Who We Are</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Why Trust Us</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Help Center</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="tracking-wide text-lg  font-semibold ">Join Us</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">For Delivery</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">For Deliverymen</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Jobs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className=" text-lg  font-semibold">Features</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Track</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Latitudes</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Longitude</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3  ">
                                <div className=" text-lg font-semibold">Social media</div>
                                <div className="flex justify-start space-x-3">
                                    <a rel="noopener noreferrer" href="https://www.facebook.com" title="Facebook" className="flex items-center p-1">
                                        <FaFacebook className="w-7 h-7 fill-current"></FaFacebook>
                                    </a>
                                    <a rel="noopener noreferrer" href="https://x.com" title="Twitter" className="flex items-center p-1">
                                        <FaTwitter className="w-7 h-7 fill-current"></FaTwitter>
                                    </a>
                                    <a rel="noopener noreferrer" href="https://www.instagram.com/?hl=en" title="Instagram" className="flex items-center p-1">
                                        <FaInstagram className="w-7 h-7 fill-current"></FaInstagram>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="py-6 text-sm text-center text-gray-400 ">
                        © ZipParcel.   All Rights Reserved. 2024
                    </div>
                </footer>
            </div>










        </section>
    );
};

export default Footer;