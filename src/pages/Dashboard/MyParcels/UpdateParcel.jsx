import { useLoaderData } from "react-router-dom";


const UpdateParcel = () => {
    const item = useLoaderData();
    console.log(item);


    const handleBook = async (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const userPhone = form.userPhone.value;
        const parcelType = form.parcelType.value;
        console.log(userName,userEmail, userPhone, parcelType )

    }



    return (
        <section>
            <h1>I am from update parcel page: {item._id}</h1>

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

                                <input type="number" name="parcelWeight" placeholder="Parcel Weight" className="input input-bordered" required />
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
                          


                        </div>



                    </div>





                    <div className="form-control mt-6">
                        <input type="submit" value="Update" className="btn text-xl text-white outline-non bg-orange-500" />
                    </div>


                </form>


            </div>

        </section>
    );
};

export default UpdateParcel;