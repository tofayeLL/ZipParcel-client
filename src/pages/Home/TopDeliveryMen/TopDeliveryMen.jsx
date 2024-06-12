import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaRegStar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

// aos package
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const TopDeliveryMen = () => {
    const axiosPublic = useAxiosPublic();

    const { data: topDeliveryMens } = useQuery({
        queryKey: ['topDelivered'],
        queryFn: async () => {
            const res = await axiosPublic.get('/topDelivered');
            // console.log(res.data);
            return res.data;
        }, initialData: []
    })

    // console.log(topDeliveryMens);



    // Aos
    useEffect(() => {
        AOS.init({
          duration : 900
        });
      }, []);







    return (
        <div>
            <div className="container mx-auto" >



                <div className="pb-10">
                    <h1 className="lg:text-4xl text-2xl font-bold text-orange-500">Top Delivery Men</h1>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-6 " >
                    {
                        topDeliveryMens.map(deliveryMen => <div key={deliveryMen._id}  data-aos="zoom-in-down">

                            <div className="lg:max-w-sm  rounded-md shadow-xl  dark:bg-gray-50 dark:text-gray-800">
                                <img src={deliveryMen?.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-4">
                                        <h2 className="lg:text-3xl text-2xl font-semibold tracking-wide">{deliveryMen.name}</h2>

                                        <div className="flex justify-between items-center">

                                            <div className="flex flex-col justify-between lg:items-center items-start">

                                                <p className="border-b-[1px] border-gray-400 py-1 font-semibold">Total Delivery</p>

                                                <div className="flex w-full justify-around items-center gap-3 text-3xl py-1">
                                                    <span className="text-yellow-600 "><TbTruckDelivery></TbTruckDelivery></span>
                                                    <p className=" font-medium text-yellow-600">{deliveryMen.delivered}</p>
                                                </div>

                                            </div>


                                            <div className="flex  flex-col justify-between lg:items-center items-start">

                                                <p className="border-b-[1px] border-gray-400 py-1 font-semibold">Average Ratings</p>

                                                <div className="flex w-full justify-around items-center gap-3 text-3xl py-1">
                                                    <span className="text-yellow-600  "><FaRegStar></FaRegStar></span>
                                                    <p className=" font-medium text-yellow-600 ">{deliveryMen.ratingAverage}</p>
                                                </div>

                                            </div>



                                        </div>




                                    </div>
                                    {/*    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button> */}
                                </div>
                            </div>

                        </div>)
                    }
                </div>




            </div>

        </div>
    );
};

export default TopDeliveryMen;