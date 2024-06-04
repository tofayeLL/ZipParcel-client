import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const UpdateParcel = () => {
    const item = useLoaderData()
   /*  const { _id, userName, userEmail, userPhone, parcelType, parcelWeight, deliveryAddress, requestedDate, latitudes, longitude, price, receiverName, receiverPhone } = useLoaderData(); */
   
   const { _id, userName, userEmail, userPhone, parcelType, parcelWeight, deliveryAddress, requestedDate, latitudes, longitude, price, receiverName, receiverPhone } = item;
   console.log(item);
    const axiosPublic = useAxiosPublic();



    const handleBook = async (e) => {
        e.preventDefault();
        const form = e.target;
        const userPhone = form.userPhone.value;
        const parcelType = form.parcelType.value;
        const deliveryAddress = form.deliveryAddress.value;
        const requestedDate = form.requestedDate.value;
        const latitudes = form.latitudes.value;
        const longitude = form.longitude.value;
        const receiverName = form.receiverName.value;
        const receiverPhone = form.receiverPhone.value;
        const parcelWeight = form.parcelWeight.value;
        const price = form.price.value;
        const updateParcel = { userPhone, parcelType, parcelWeight, deliveryAddress, requestedDate, latitudes, longitude, price, receiverName, receiverPhone }
        console.log(updateParcel);


        const res = await axiosPublic.patch(`/bookedParcel/${_id}`, updateParcel)
        console.log(res.data);

        if (res.data.modifiedCount > 0) {
            // show success popup

            Swal.fire({
                title: 'Success!',
                text: `parcel update  successfully`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            // refetch();

        }
    }



    return (
        <section>
            <h1>I am from update parcel page:{item._id} </h1>

            <div>


                <div className="max-w-full mx-auto  bg-slate-200   ">


                    <form onSubmit={handleBook} className="card-body" >
                        <h1 className="text-4xl font-bold text-orange-500">Update Parcel Information</h1>

                        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">

                            {/* left side form */}
                            <div>
                                {/* 1 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold text">User Name</span>
                                    </label>
                                    <input type="text" defaultValue={userName} name="userName" placeholder="User Name" className="input input-bordered" required />
                                </div>
                                {/* 2 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">Phone Number</span>
                                    </label>
                                    <input type="text" defaultValue={userPhone} name="userPhone" placeholder="User Number" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Parcel Weight (kg)</span>
                                    </label>

                                    <input type="number" defaultValue={parcelWeight} name="parcelWeight" placeholder="Parcel Weight" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">  Requested Delivery Date</span>
                                    </label>
                                    <input type="date" defaultValue={requestedDate} name="requestedDate" placeholder="Delivery Date" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">Price (Tk)</span>
                                    </label>

                                    <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" readOnly />
                                </div>


                            </div>


                            {/* right side  */}
                            <div>


                                {/* 1 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">User Email</span>
                                    </label>
                                    <input type="text" defaultValue={userEmail} name="userEmail" placeholder="UserEmail" className="input input-bordered" required />
                                </div>
                                {/* 2*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Parcel Type</span>
                                    </label>
                                    <input type="text" defaultValue={parcelType} name="parcelType" placeholder="Parcel Type" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Delivery Address</span>
                                    </label>
                                    <input type="text" defaultValue={deliveryAddress} name="deliveryAddress" placeholder="Delivery Address" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Delivery Address Latitude</span>
                                    </label>
                                    <input type="text" defaultValue={latitudes} name="latitudes" placeholder="Address Latitude" className="input input-bordered" required />
                                </div>
                                {/* 4 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Delivery Address Longitude</span>
                                    </label>
                                    <input type="text" defaultValue={longitude} name="longitude" placeholder="Address Longitude" className="input input-bordered" required />
                                </div>



                            </div>



                        </div>


                        {/* parcel receiver info */}
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Receiver’s Name</span>
                            </label>

                            <input type="text" defaultValue={receiverName} name="receiverName" placeholder="Receiver’s Name" className="input input-bordered" required />


                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Receiver's Phone Number</span>
                            </label>

                            <input type="text" defaultValue={receiverPhone} name="receiverPhone" placeholder="Receiver's Phone Number" className="input input-bordered" required />


                        </div>




                        <div className="form-control mt-6">
                            <input type="submit" value="Update" className="btn text-xl text-white outline-non bg-orange-500" />
                        </div>


                    </form>


                </div>

            </div>

        </section>
    );
};

export default UpdateParcel;