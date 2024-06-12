import { useQuery } from "@tanstack/react-query";
import useUserRole from "../../../../hooks/useUserRole";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import ViewLocationModal from "./ViewLocationModal";

import 'leaflet/dist/leaflet.css';



const DeliveryList = () => {
    const { getUser } = useUserRole();
    // console.log(getUser._id);

    const axiosPublic = useAxiosPublic();

    const { data: deliveryLists, refetch } = useQuery({
        queryKey: ['myDeliveries', getUser?._id],
        queryFn: async () => {
            const data = await axiosPublic.get(`/myDeliveries/${getUser._id}`);
            console.log(data.data);
            return data.data;
        }, initialData: []
    })
    // console.log(deliveryLists);


    // handle deliver  parcel  button
    const handleDeliverItem = async (item) => {
        // console.log(item);
        // console.log(getUser._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Delivery this Parcel!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, deliver it!"
        })


            .then(async (result) => {
                if (result.isConfirmed) {
                    const status = 'delivered';
                    const res = await axiosPublic.patch(`/deliverParcel/${item._id}`, { status });
                    // console.log(res.data);
                    if (res.data.modifiedCount > 0) {

                        Swal.fire({
                            title: "success!",
                            text: `Thanks for your Response`,
                            icon: "success"
                        });


                        const res = await axiosPublic.post(`/deliveryCount/${getUser._id}`)
                        console.log(res.data);



                        refetch();

                    }

                    else if (!res.data.modifiedCount > 0) {
                        //
                        Swal.fire({
                            title: "error!",
                            text: `Already exist delivered`,
                            icon: "error"
                        });

                    }
                }



            })




    }






    // handle cancel  parcel  button
    const handleCancelItem = (item) => {
        // console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this parcel Delivery!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        })

            .then(async (result) => {
                if (result.isConfirmed) {
                    const status = 'cancelled'
                    const res = await axiosPublic.patch(`/cancelDelivery/${item._id}`, { status });
                    // console.log(res.data);
                    if (res.data.modifiedCount > 0) {

                        Swal.fire({
                            title: "cancel!",
                            text: `Your Delivery has been canceled`,
                            icon: "success"
                        });


                        // user refetch for delete from ui instantly
                        refetch();

                    }
                }

            })

    }





    // -------view location button showing modal ------//


    const [itemId, setItemId] = useState(null);
    const modalRef = useRef();



    // handle View Location button
    const handleViewLocation = (item) => {

        // console.log(item);
        setItemId(item);
        modalRef.current.showModal();



    }


    // modal close
    const handleModalClose = () => {
        modalRef.current.close();
        setItemId(null);


    }







    return (
        <div>
            {/* <h1>from delivery list:{deliveryLists.length}</h1> */}

            <div>

                {/* ------Table------ */}
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead className="bg-gray-300">
                            <tr className="uppercase text-xs">
                                <th>
                                </th>
                                <th>User’s Name</th>
                                <th>User’s Phone</th>
                                <th>Requested Date</th>
                                <th>Approximate Date</th>
                                <th>Receivers Name</th>
                                <th>Receivers number</th>
                                <th>Receivers Address</th>
                                <th>
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                deliveryLists.map((item, index) => <tr key={item._id}>
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
                                            item.requestedDate
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.approximateDate
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.receiverName
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.receiverPhone
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.deliveryAddress
                                        }
                                    </td>

                                    <td className="text-right space-y-4 flex flex-col lg:my-3">

                                        <button onClick={() => handleViewLocation(item)}
                                            className="bg-amber-400 p-2 text-xs rounded-md">View Location

                                        </button>


                                        <button onClick={() => handleCancelItem(item)}
                                            className="bg-red-300 lg:px-7 px-2 py-2 text-xs rounded-md">Cancel

                                        </button>


                                        <button onClick={() => handleDeliverItem(item)}
                                            className="bg-green-300 lg:px-7 px-2 py-2 text-xs rounded-md">Deliver

                                        </button>

                                    </td>

                                </tr>)
                            }

                        </tbody>

                    </table>


                </div>






                {/* --------modal----------- */}
                <dialog ref={modalRef} id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                    onClick={handleModalClose}
                >
                    <div
                        className="modal-box h-96  flex justify-center items-center flex-col "
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        {itemId && (
                            <ViewLocationModal
                                item={itemId}
                                onClose={handleModalClose}
                            >
                            </ViewLocationModal>
                        )}
                    </div>
                </dialog>



            </div>

        </div>
    );
};

export default DeliveryList;