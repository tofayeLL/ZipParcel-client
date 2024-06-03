import { useState } from "react";


const BookParcel = () => {

    const [parcelWeight, setParcelWeight] = useState('');
    const [price, setPrice] = useState('');

    const handleBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const userPhone = form.userPhone.value;
        const parcelType = form.parcelType.value;
        const deliveryAddress = form.deliveryAddress.value;
        const deliveryDate = form.deliveryDate.value;
        const latitudes = form.latitudes.value;
        const longitude = form.longitude.value;
        const receiverName = form.receiverName.value;
        const receiverPhone = form.receiverPhone.value;


        // const parcelWeight = form.parcelWeight.value;
        // const price = form.price.value;


        const status = "pending";
        // console.log(status);



        const parcel = { userName, userEmail, userPhone, parcelType, parcelWeight, deliveryAddress, deliveryDate, latitudes, longitude, price, receiverName, receiverPhone, status }
        console.log(parcel);

    }



    // depends weight calculate price auto
    const calculatePrice = (weight) => {
        let calculatedPrice = 0;
        if (weight > 2) {
            calculatedPrice = 150;
        } else if (weight == 2) {
            calculatedPrice = 100;
        } else if (weight > 0) {
            calculatedPrice = 50;
        }
        return calculatedPrice;
    }

    const handleWeight = (e) => {
        const weight = e.target.value;
        setParcelWeight(weight);
        setPrice(calculatePrice(weight));
    }





    return (
        <section>


            <div>


                <div className="max-w-full mx-auto  bg-slate-200   ">


                    <form onSubmit={handleBook} className="card-body" >
                        <h1 className="text-4xl font-bold text-orange-500">Book a Parcel</h1>

                        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 ">

                            {/* left side form */}
                            <div>
                                {/* 1 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold text">User Name</span>
                                    </label>
                                    <input type="text" name="userName" placeholder="User Name" className="input input-bordered" required />
                                </div>
                                {/* 2 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">Phone Number</span>
                                    </label>
                                    <input type="text" name="userPhone" placeholder="User Number" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Parcel Weight (kg)</span>
                                    </label>
                                    {/* <input type="number" name="parcelWeight" placeholder="Parcel Weight" className="input input-bordered" required /> */}
                                    <input type="number" name="parcelWeight" value={parcelWeight} onChange={handleWeight} placeholder="Parcel Weight" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">  Requested Delivery Date</span>
                                    </label>
                                    <input type="date" name="deliveryDate" placeholder="Delivery Date" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">Price (Tk)</span>
                                    </label>
                                    {/*  <input type="text" name="price" placeholder="Price Kg" className="input input-bordered" required /> */}
                                    <input type="text" name="price" value={price} placeholder="Price" className="input input-bordered" readOnly />
                                </div>


                            </div>


                            {/* right side  */}
                            <div>


                                {/* 1 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold">User Email</span>
                                    </label>
                                    <input type="text" name="userEmail" placeholder="UserEmail" className="input input-bordered" required />
                                </div>
                                {/* 2*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Parcel Type</span>
                                    </label>
                                    <input type="text" name="parcelType" placeholder="Parcel Type" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Delivery Address</span>
                                    </label>
                                    <input type="text" name="deliveryAddress" placeholder="Delivery Address" className="input input-bordered" required />
                                </div>
                                {/* 3*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Delivery Address Latitude</span>
                                    </label>
                                    <input type="text" name="latitudes" placeholder="Address Latitude" className="input input-bordered" required />
                                </div>
                                {/* 4 */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text lg:text-lg text-base font-semibold"> Delivery Address Longitude</span>
                                    </label>
                                    <input type="text" name="longitude" placeholder="Address Longitude" className="input input-bordered" required />
                                </div>



                            </div>



                        </div>


                        {/* parcel receiver info */}
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Receiver’s Name</span>
                            </label>

                            <input type="text" name="receiverName" placeholder="Receiver’s Name" className="input input-bordered" required />


                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Receiver's Phone Number</span>
                            </label>

                            <input type="text" name="receiverPhone" placeholder="Receiver's Phone Number" className="input input-bordered" required />


                        </div>




                        <div className="form-control mt-6">
                            <input type="submit" value="Book Now" className="btn text-xl text-white outline-non bg-orange-500" />
                        </div>


                    </form>


                </div>

            </div>



        </section>
    );
};

export default BookParcel;