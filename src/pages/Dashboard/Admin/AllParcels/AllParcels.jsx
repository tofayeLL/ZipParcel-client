import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useRef, useState } from "react";
import ManageForm from "./ManageForm ";



const AllParcels = () => {
    const axiosPublic = useAxiosPublic();

    const { data: bookedParcels, refetch } = useQuery({
        queryKey: ['bookedParcel'],
        queryFn: async () => {
            const res = axiosPublic.get('/bookedParcel')
            console.log(res.data)
            return (await res).data;

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





    return (
        <div>

            <h1>from All parcels: {bookedParcels.length}</h1>

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
                                    bookedParcels.map((item, index) => <tr key={item._id}>
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

                                            <button onClick={() => handleManage(item._id)}>manage</button>




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