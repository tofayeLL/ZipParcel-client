// import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
/* import { useState } from "react";
import useAuth from "../../../hooks/useAuth"; */
import useBookedParcel from "../../../hooks/useBookedParcel";
import { useRef, useState } from "react";
import ModalReviewForm from "./ModalReviewForm";


const MyParcels = () => {
    const axiosPublic = useAxiosPublic();

    const { bookingParcels, refetch, parcels, filterParcels, setFilterParcels } = useBookedParcel();


    /*  const { user } = useAuth();
     const [parcels, setParcels] = useState([]);
     const [filterParcels, setFilterParcels] = useState([]);
     const axiosPublic = useAxiosPublic();
 
 
     const { data: bookingParcels, refetch } = useQuery({
         queryKey: ['bookedParcel'],
         queryFn: async () => {
             const res = await axiosPublic.get(`/bookedParcel/${user?.email}`)
             // console.log(res.data);
             setParcels(res.data);
             setFilterParcels(res.data);
             return res.data;
 
         }, initialData: []
 
     }) */

    /*     const parcel = { userName, userEmail, userPhone, parcelType, parcelWeight, deliveryAddress, deliveryDate, latitudes, longitude, price, receiverName, receiverPhone, status, bookingDate } */

    // console.log('filter', filterParcels);


    const handleCancelItem = (item) => {
        // console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        })


            .then(async (result) => {
                if (result.isConfirmed) {
                    const status = 'cancelled'
                    const res = await axiosPublic.patch(`/cancelParcel/${item._id}`, { status });
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {

                        Swal.fire({
                            title: "cancel!",
                            text: `Your parcel has been canceled`,
                            icon: "success"
                        });


                        // user refetch for delete from ui instantly
                        refetch();

                    }
                }

            })

    }





    // filter Parcel data depends on status
    const handleFilter = (filter) => {
        if (filter === 'all') {
            setFilterParcels(parcels);
        }
        else if (filter === 'pending') {
            const filterStatus = parcels.filter(parcel => parcel.status === 'pending');
            setFilterParcels(filterStatus);
        }
        else if (filter === 'delivered') {
            const filterStatus = parcels.filter(parcel => parcel.status === 'delivered');
            setFilterParcels(filterStatus);
        }
        else if (filter === 'on the way') {
            const filterStatus = parcels.filter(parcel => parcel.status === 'on the way');
            setFilterParcels(filterStatus);
        }
        else if (filter === 'returned') {
            const filterStatus = parcels.filter(parcel => parcel.status === 'returned');
            setFilterParcels(filterStatus);
        }
        else if (filter === 'cancelled') {
            const filterStatus = parcels.filter(parcel => parcel.status === 'cancelled');
            setFilterParcels(filterStatus);
        }



    }





    // modal and handle review

    const [deliveryMenID, setDeliveryMenID] = useState(null);
    const modalRef = useRef();

    // handle review button
    const handleReview = (id) => {
        console.log(id);
        setDeliveryMenID(id);
        modalRef.current.showModal();
    }


    // modal
    const handleModalClose = () => {
        modalRef.current.close();
        setDeliveryMenID(null);


    }







    return (
        <section>
            <div>





                <h1>allBooking serces: {bookingParcels.length}</h1>

                <div className="flex flex-col gap-3  items-center mb-4 bg-gray-300 py-10">
                    <div>
                        <h1 className="text-3xl font-semibold text-orange-600">Filter Your Delivery Status by category</h1>
                    </div>
                    <details className="dropdown">
                        <summary className="m-1 btn bg-gray-500 text-lg text-white">Choose status</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                            <li onClick={() => handleFilter('all')}><a>All</a></li>
                            <li onClick={() => handleFilter('pending')}><a>pending</a></li>
                            <li onClick={() => handleFilter('on the way')}><a>on the way</a></li>
                            <li onClick={() => handleFilter('delivered')}><a>delivered</a></li>
                            <li onClick={() => handleFilter('returned')}><a>returned</a></li>
                            <li onClick={() => handleFilter('cancelled')}><a>cancelled</a></li>

                        </ul>
                    </details>

                </div>




                <div>
                    {/* table */}
                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead className="bg-gray-300">
                                <tr className="uppercase">
                                    <th>
                                    </th>
                                    <th>Parcel Type</th>
                                    <th >Requested Delivery Date</th>
                                    <th >Approximate Delivery Date</th>
                                    <th>Booking Date</th>
                                    <th>Delivery Men ID</th>
                                    <th>Booking Status</th>
                                    <th>UPDATE</th>
                                    <th>Cancel</th>
                                    <th>review</th>
                                    <th>pay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterParcels.map((item, index) => <tr key={item._id}>
                                        <th>
                                            <p>{index + 1}</p>
                                        </th>
                                        <td>
                                            {
                                                item?.parcelType
                                            }
                                        </td>

                                        <td>
                                            {
                                                item?.requestedDate
                                            }
                                        </td>
                                        <td>
                                            {
                                                item?.approximateDate
                                            }
                                        </td>
                                        <td>{item?.bookingDate?.slice(0, 10)}</td>
                                        <td>{item?.deliveryMenID}</td>
                                        <td>{item?.status}</td>
                                        <td className="space-y-3">
                                            {
                                                item.status === 'pending' ? <> <Link to={`/dashboard/updateParcel/${item._id}`}>
                                                    <button
                                                        className="bg-amber-400 btn rounded-md">update

                                                    </button>
                                                </Link></>
                                                    :

                                                    <button disabled
                                                        className="bg-amber-400 btn rounded-md">update

                                                    </button>

                                            }

                                        </td>
                                        <td>
                                            {
                                                item.status === 'pending' ? <> <button onClick={() => handleCancelItem(item)}
                                                    className="bg-red-400 btn rounded-md">cancel

                                                </button></>
                                                    :
                                                    <button disabled
                                                        className="bg-red-400 btn rounded-md">cancel

                                                    </button>
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.status === 'delivered' ? <> <button onClick={() => handleReview(item?.deliveryMenID
                                                )}
                                                    className="bg-purple-300 btn rounded-md">review

                                                </button></>
                                                    :
                                                    <button disabled
                                                        className="bg-purple-300 btn rounded-md">review

                                                    </button>
                                            }
                                        </td>
                                        <td>
                                            {

                                                <button
                                                    className="bg-green-300 btn rounded-md">pay

                                                </button>
                                            }
                                        </td>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>




                    {/* modal */}
                    <dialog ref={modalRef} id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                        onClick={handleModalClose}
                    >
                        <div
                            className="modal-box"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                        >
                            {deliveryMenID && (
                                <ModalReviewForm
                                    id={deliveryMenID}
                                    onClose={handleModalClose}
                                >
                                </ModalReviewForm>
                            )}
                        </div>
                    </dialog>


                </div>













            </div>




        </section>
    );
};

export default MyParcels;