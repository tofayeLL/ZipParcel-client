import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allUsers, refetch } = useQuery({
        queryKey: ['allParcels'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allParcels')
            // console.log(res.data)
            return res.data;

        }, initialData: []
    })
    console.log(allUsers);


    // handle Manage Item
    const handleMakeDeliveryMan = async (item) => {
        console.log(item);
        const res = await axiosPublic.patch(`/makeDeliveryMen/${item.userEmail}`)
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            // show success popup

            Swal.fire({
                title: 'Success!',
                text: `${item.userName}  is deliveryMen Now`,
                icon: 'success',
                confirmButtonText: 'OK'
            })

            refetch();

        }
    }
    // handle Manage Item
    const handleMakeAdmin = async (item) => {
        console.log(item);
        const res = await axiosPublic.patch(`/makeAdmin/${item.userEmail}`)
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            

            Swal.fire({
                title: 'Success!',
                text: `${item.userName}  is Admin Now`,
                icon: 'success',
                confirmButtonText: 'OK'
            })

            refetch();

        }
    }




    return (
        <div>
            <h1>from all users: {allUsers.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead className="bg-gray-300">
                            <tr className="uppercase">
                                <th>
                                </th>
                                <th>User’s Name</th>
                                <th>Phone Number</th>
                                <th>Number of parcel Booked</th>
                                <th>Total Spent Amount</th>
                                <th>Make Delivery Men</th>
                                <th>Make Admin</th>
                                <th>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((item, index) => <tr key={item._id}>
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
                                            item?.userPhone
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.totalParcels
                                        }
                                    </td>
                                    <td>{item.totalAmount}</td>
                                    <td>

                                        {
                                            item.userType === 'DeliveryMen' ? <button disabled onClick={() => handleMakeDeliveryMan(item)}
                                                className="bg-amber-400 btn  rounded-md">deliveryMen

                                            </button>
                                                :
                                                <button onClick={() => handleMakeDeliveryMan(item)}
                                                    className="bg-amber-400  btn rounded-md">deliveryMen

                                                </button>
                                        }
                                    </td>

                                    <td >

                                        {
                                            item.userType === 'Admin' ? <button disabled
                                                className="bg-amber-400 btn rounded-md">Admin

                                            </button> :

                                                <button onClick={() => handleMakeAdmin(item)}
                                                    className="bg-amber-400 btn  rounded-md">Admin

                                                </button>}

                                    </td>

                                </tr>)
                            }

                        </tbody>

                    </table>


                </div>

            </div>

        </div>
    );
};

export default AllUsers;