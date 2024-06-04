import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const AllParcels = () => {
    const axiosPublic = useAxiosPublic();

    const { data: bookedParcels } = useQuery({
        queryKey: ['bookedParcel'],
        queryFn: async () => {
            const res = axiosPublic.get('/bookedParcel')
            console.log(res.data)
            return (await res).data;

        }, initialData: []
    })

    /*          const parcel = { userName, userEmail, userPhone, parcelType, parcelWeight, deliveryAddress, requestedDate, latitudes, longitude, price, receiverName, receiverPhone, status, bookingDate, approximateDate } */



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
                                        
                                            <button
                                                className="bg-amber-400 p-2 rounded-md">manage

                                            </button>

                                        </td>

                                    </tr>)
                                }

                            </tbody>

                        </table>


                    </div>

                </div>


            </div>

        </div>
    );
};

export default AllParcels;