import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const AllUsers = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allUsers } = useQuery({
        queryKey: ['allParcels'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allParcels')
            // console.log(res.data)
            return res.data;

        }, initialData: []
    })
    console.log(allUsers);




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

                                        <button
                                            className="bg-amber-400 p-2 rounded-md">manage

                                        </button>
                                    </td>

                                    <td >

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
    );
};

export default AllUsers;