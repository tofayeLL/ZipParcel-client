import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";


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
    // console.log(allUsers);


    // handle Make deliverymen 
    const handleMakeDeliveryMan = async (item) => {
        // console.log(item);
        const res = await axiosPublic.patch(`/makeDeliveryMen/${item.userEmail}`)
        // console.log(res.data);
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


    // handle make admin
    const handleMakeAdmin = async (item) => {
        // console.log(item);
        const res = await axiosPublic.patch(`/makeAdmin/${item.userEmail}`)
        // console.log(res.data);
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



    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    const totalPages = Math.ceil(allUsers.length / usersPerPage);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };




    return (
        <div>
            {/* <h1>from all users: {allUsers.length}</h1> */}

            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead className="bg-gray-300 ">
                            <tr className="uppercase ">
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
                                currentUsers.map((item, index) => <tr key={item._id}>
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
                                            item?.userPhone || 965432109885
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



                {/* pagination */}

                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>

            </div>

        </div>
    );
};

export default AllUsers;