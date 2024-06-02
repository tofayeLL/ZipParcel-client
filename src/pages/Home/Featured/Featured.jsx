import image from '../../../assets/images/fast delivery.jpg';
import image2 from '../../../assets/images/ontime.jpg';
import image3 from '../../../assets/images/delivery more.jpg';



const Featured = () => {
    return (
        <section className="bg-[#f0f7ff] ">
            <div className="container mx-auto py-10">



                <div>
                    <h1 className="text-5xl font-bold text-orange-500">Our Features</h1>
                </div>

                {/* card */}
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2">


                    {/* card 1 */}
                    <div className=" shadow-sm my-6 border-[1px] border-orange-200 " data-aos="fade-down">

                        <div className="p-6 " >
                            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                        </div>

                        <div className="flex flex-col justify-between p-6 space-y-8" data-aos="fade-up">
                            <div className="space-y-4" >
                                <h2 className="lg:text-2xl text-xl font-semibold tracking-wide text-orange-500 ">Prove your delivery in full faster</h2>
                                <p className=" ">Once the delivery is signed and scanned, zip-parcel will instantly send feedback on order status with an actual quantity of items and the delivery receipt.</p>

                            </div>

                        </div>

                    </div>
                    {/* card 2 */}
                    <div className=" shadow-sm my-6 border-[1px] border-orange-200 " data-aos="fade-down">

                        <div className="p-6 " >
                            <img src={image2} alt="" className="object-cover object-center w-full  h-72 rounded-t-md  bg-gray-500" />
                        </div>

                        <div className="flex flex-col justify-between p-6 space-y-8" data-aos="fade-up">
                            <div className="space-y-4" >
                                <h2 className="lg:text-2xl text-xl font-semibold tracking-wide text-orange-500 "> on-time delivery every time</h2>
                                <p className=" ">Send SMS or email notifications with ETA and a driver tracking link to your customers to let them know when a courier is about to knock on the door.</p>

                            </div>

                        </div>

                    </div>

                    {/* card 3 */}
                    <div className=" shadow-sm my-6 border-[1px] border-orange-200 " data-aos="fade-down">

                        <div className="p-6 " >
                            <img src={image3} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                        </div>

                        <div className="flex flex-col justify-between p-6 space-y-8" data-aos="fade-up">
                            <div className="space-y-4" >
                                <h2 className="lg:text-2xl text-xl font-semibold tracking-wide text-orange-500 ">Deliver more orders in less time</h2>
                                <p className=" ">Plan and optimize drivers runs with multiple stops in one click. zip-parcel will generate the fastest routes to deliver more in less time.</p>

                            </div>

                        </div>

                    </div>







                </div>



            </div>


        </section>
    );
};

export default Featured;