import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useRef, useState } from "react";
import ManageForm from "./ManageForm ";



const AllParcels = () => {
    const axiosPublic = useAxiosPublic();
    const [allParcels, setAllParcels] = useState([])

    const { data: bookedParcels, refetch } = useQuery({
        queryKey: ['bookedParcel'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bookedParcel')
            // console.log(res.data)
            setAllParcels(res.data)
            return res.data;

        }, initialData: []
    })

    /*          const parcel = { userName, userEmail, userPhone, parcelType, parcelWeight, deliveryAddress, requestedDate, latitudes, longitude, price, receiverName, receiverPhone, status, bookingDate, approximateDate } */


    // --------Modal--------//
    const [currentItemId, setCurrentItemId] = useState(null);
    const modalRef = useRef();

    const handleManage = (id) => {
        setCurrentItemId(id);
        modalRef.current.showModal();
        refetch();
    };


    // close modal handler
    const handleModalClose = () => {
        modalRef.current.close();
        setCurrentItemId(null); // Reset the current item ID
        refetch();
    };





    // ---------search depends on request date  form Booking parcel ----
    const handleRequestedDate = async (e) => {
        e.preventDefault()
        const form = e.target;
        const dateFrom = form.dateFrom.value;
        const dateTo = form.dateTo.value;
        const searchDate = { dateFrom, dateTo }
        console.log(searchDate);

        const res = await axiosPublic.post('/search', searchDate)
        // console.log(res.data);
        setAllParcels(res.data)



    }





    return (
        <div>

            <h1>from All parcels: {bookedParcels.length}</h1>

            {/* implement search by depends on request date */}
            <div className="bg-gray-300 py-6 mb-4 text-center rounded-md ">
                <div>
                    <h1 className="text-3xl font-semibold text-orange-600">Search Parcel Request form Users</h1>
                </div>
                <form onSubmit={handleRequestedDate} className="lg:w-[80%] w-full mx-auto space-y-5 rounded-lg mt-5 " >

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Requested delivery date From</span>
                            </label>
                            <input type="date" name="dateFrom" placeholder="Date From" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Requested delivery date To</span>
                            </label>
                            <input type="date" name="dateTo" placeholder="Date To" className="input input-bordered" required />

                        </div>


                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" value="Search" className="btn text-xl text-white outline-non bg-gray-500 hover:text-orange-400 hover:bg-gray-500" />
                    </div>

                </form>

            </div>



            {/* Tabular form or Table */}

            <div>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead className="bg-gray-300">
                                <tr className="uppercase">
                                    <th>
                                    </th>
                                    <th>User’s Name</th>
                                    <th>User’s Phone</th>
                                    <th>Booking Date</th>
                                    <th>Requested Delivery Date</th>
                                    <th>Cost</th>
                                    <th>Status</th>
                                    <th>
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allParcels.map((item, index) => <tr key={item._id}>
                                        <th>
                                            <p>{index + 1}</p>
                                        </th>
                                        <td>
                                            {
                                                item.userName
                                            }
                                        </td>

                                        <td>
                                            {
                                                item.userPhone
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.bookingDate?.slice(0, 10)
                                            }
                                        </td>
                                        <td>{item.requestedDate}</td>
                                        <td>{item?.price}</td>
                                        <td>{item?.status}</td>
                                        <td className="lg:p-4 lg:text-right">

                                            <button onClick={() => handleManage(item._id)}
                                                className="bg-amber-400  btn rounded-md">manage</button>




                                        </td>

                                    </tr>)
                                }

                            </tbody>

                        </table>


                    </div>
                    <dialog ref={modalRef} id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                        onClick={handleModalClose}
                    >
                        <div
                            className="modal-box"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                        >
                            {currentItemId && (
                                <ManageForm
                                    itemId={currentItemId}
                                    onClose={handleModalClose}

                                />
                            )}
                        </div>
                    </dialog>

                </div>


            </div>





        </div >
    );
};

export default AllParcels;