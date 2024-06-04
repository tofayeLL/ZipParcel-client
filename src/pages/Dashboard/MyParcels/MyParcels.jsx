import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";


const MyParcels = () => {
    const [parcels, setParcels] = useState([]);
    const [filterParcels, setFilterParcels] = useState([]);
    const axiosPublic = useAxiosPublic();


    const { data: bookingParcels, refetch } = useQuery({
        queryKey: ['bookedParcel'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bookedParcel')
            // console.log(res.data);
            setParcels(res.data);
            setFilterParcels(res.data);
            return res.data;

        }, initialData: []

    })

    /*     const parcel = { userName, userEmail, userPhone, parcelType, parcelWeight, deliveryAddress, deliveryDate, latitudes, longitude, price, receiverName, receiverPhone, status, bookingDate } */

    // console.log('filter', filterParcels);


    const handleDeleteItem = (item) => {
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




    return (
        <section>
            <div>





                <h1>allBooking serces: {bookingParcels.length}</h1>

                <div className="">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-violet-300 text-lg text-gray-800">Choose status</summary>
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
                                    <th>Booking Status</th>
                                    <th>UPDATE</th>
                                    <th>Cancel</th>
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
                                                item.parcelType
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
                                        <td>{item.bookingDate?.slice(0, 10)}</td>
                                        <td>{item?.status}</td>
                                        <td>
                                            {
                                                item.status === 'pending' ? <> <Link to={`/dashboard/bookedParcel/${item._id}`}>
                                                    <button
                                                        className="bg-amber-400 p-2 rounded-md">update

                                                    </button>
                                                </Link></>
                                                    :

                                                    <button disabled
                                                        className="bg-amber-400 p-2 rounded-md">update

                                                    </button>

                                            }
                                        </td>
                                        <td>
                                            {
                                                item.status === 'pending' ? <> <button onClick={() => handleDeleteItem(item)}
                                                    className="bg-red-400 p-2 rounded-md">cancel

                                                </button></>
                                                    :
                                                    <button
                                                        className="bg-red-400 p-2 rounded-md">cancel

                                                    </button>
                                            }
                                        </td>
                                    </tr>)
                                }

                            </tbody>

                        </table>


                    </div>

                </div>













            </div>




        </section>
    );
};

export default MyParcels;