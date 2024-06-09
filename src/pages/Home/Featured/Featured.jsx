import image from '../../../assets/images/fast delivery.jpg';
import image2 from '../../../assets/images/ontime.jpg';
import image3 from '../../../assets/images/delivery more.jpg';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import CountUp from 'react-countup';





const Featured = () => {
    const axiosPublic = useAxiosPublic();


    //TOTAL PARCEL BOOKED
    const { data: allBookParcels } = useQuery({
        queryKey: ['totalParcelBooked'],
        queryFn: async () => {
            const res = await axiosPublic.get('/totalParcelBooked')
            console.log(res.data);
            return res.data
        }, initialData: []
    })
    // console.log(allBookParcels);
    const totalParcelBooked = allBookParcels?.count;



    //TOTAL CUSTOMER
    const { data: allUsers } = useQuery({
        queryKey: ['totalRegisterUser'],
        queryFn: async () => {
            const res = await axiosPublic.get('/totalRegisterUser')
            console.log(res.data);
            return res.data
        }, initialData: []
    })
    // console.log(allUsers);
    const totalCustomer = allUsers?.count;



    // TOTAL PARCEL DELIVERY
    const { data: totalDelivery } = useQuery({
        queryKey: ['totalDelivered'],
        queryFn: async () => {
            const res = await axiosPublic.get('/totalDelivered')
            console.log(res.data);
            return res.data
        }, initialData: []
    })
    // console.log('total delivery',totalDelivery);
    const totalParcelDelivery = totalDelivery[0]?.totalDelivered;






    return (
        <section className="bg-[#f0f7ff]  ">
            <div className="container mx-auto py-10">



                <div>
                    <h1 className="text-5xl font-bold text-orange-500">Our Features</h1>
                </div>

                {/* card */}
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2 ">


                    {/* card 1 */}
                    <div className=" shadow-md my-6 border-[1px] border-orange-200 bg-white " >

                        <div className="p-6 " >
                            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                        </div>

                        <div className="flex flex-col justify-between p-6 space-y-8" >
                            <div className="space-y-4" >
                                <h2 className="lg:text-2xl text-xl font-semibold tracking-wide text-orange-500 ">Prove your delivery in full faster</h2>
                                <p className=" ">Once the delivery is signed and scanned, zip-parcel will instantly send feedback on order status with an actual quantity of items and the delivery receipt.</p>

                            </div>

                        </div>

                    </div>
                    {/* card 2 */}
                    <div className=" shadow-md my-6 border-[1px] border-orange-200 bg-white " >

                        <div className="p-6 " >
                            <img src={image2} alt="" className="object-cover object-center w-full  h-72 rounded-t-md  bg-gray-500" />
                        </div>

                        <div className="flex flex-col justify-between p-6 space-y-8" >
                            <div className="space-y-4" >
                                <h2 className="lg:text-2xl text-xl font-semibold tracking-wide text-orange-500 "> on-time delivery every time</h2>
                                <p className=" ">Send SMS or email notifications with ETA and a driver tracking link to your customers to let them know when a courier is about to knock on the door.</p>

                            </div>

                        </div>

                    </div>

                    {/* card 3 */}
                    <div className=" shadow-md my-6 border-[1px] border-orange-200 bg-white ">

                        <div className="p-6 " >
                            <img src={image3} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                        </div>

                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-4" >
                                <h2 className="lg:text-2xl text-xl font-semibold tracking-wide text-orange-500 ">Deliver more orders in less time</h2>
                                <p className=" ">Plan and optimize drivers runs with multiple stops in one click. zip-parcel will generate the fastest routes to deliver more in less time.</p>

                            </div>

                        </div>

                    </div>

                </div>



            </div>


            <div>

                <section className="p-6 my-6 bg-white shadow-md text-gray-100">
                    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
                        {/* revenue */}
                        <div className="flex flex-col justify-center items-center py-20 rounded-lg  bg-amber-500 text-gray-100">

                            <div className='text-center'>
                                <div className='flex justify-center items-center'>
                                    <p className="text-5xl font-semibold leading-none pb-2" id="parcelBooked"   ></p>
                                    <span className='text-5xl font-semibold leading-none pb-2'>
                                        <CountUp end={totalParcelBooked} duration={4} />
                                        M +</span>
                                </div>

                                <p className="capitalize text-xl mt-4">Parcel Booked</p>
                            </div>
                        </div>
                        {/* menuItems */}
                        <div className="flex flex-col justify-center items-center py-20 rounded-lg  bg-amber-500 text-gray-100">

                            <div className="">
                                <div className='flex justify-center items-center'>
                                    <p className="text-5xl font-semibold leading-none pb-2" id="delivery"   ></p>
                                    <span className='text-5xl font-semibold leading-none pb-2'>
                                        <CountUp end={totalParcelDelivery} duration={4} />
                                        M +</span>

                                </div>
                                <p className="capitalize text-xl mt-4"> Parcel Delivered</p>
                            </div>
                        </div>
                        {/* products */}
                        <div className="flex flex-col justify-center items-center py-20 rounded-lg  bg-amber-500 text-gray-100">

                            <div className="text-center">
                                <div className='flex justify-center items-center'>
                                    <p className="text-5xl font-semibold leading-none pb-2" id="customers"   ></p>
                                    <span className='text-5xl font-semibold leading-none pb-2'>
                                        <CountUp end={totalCustomer} duration={4} />
                                        M +</span>

                                </div>
                                <p className="capitalize mt-4 text-xl">Customers</p>

                            </div>
                        </div>




                    </div>
                </section>




            </div>


        </section>
    );
};

export default Featured;