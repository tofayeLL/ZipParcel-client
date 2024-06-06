import { useQuery } from "@tanstack/react-query";
import useUserRole from "../../../../hooks/useUserRole";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const DeliveryList = () => {
    const { getUser } = useUserRole();
    console.log(getUser._id);

    const axiosPublic = useAxiosPublic();



    const { data: deliveryLists } = useQuery({
        queryKey: ['myDeliveries', getUser?._id],
        queryFn: async () => {
            const data = await axiosPublic.get(`/myDeliveries/${getUser._id}`);
            console.log(data.data);
            return data.data;
        }, initialData: []
    })
    console.log(deliveryLists);





    return (
        <div>
            <h1>from delivery list:{deliveryLists.length}</h1>

            <div>


                <div className="overflow-x-auto">
                    <table className="table">

                        <thead className="bg-gray-300">
                            <tr className="uppercase">
                                <th>
                                </th>
                                <th>Delivery Man's Name</th>
                                <th>Phone Number</th>
                                <th>Number of parcel delivered</th>
                                <th>Average review</th>


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
                                            item.name
                                        }
                                    </td>

                                    <td>
                                        {
                                            item.phone
                                        }
                                    </td>
                                    <td>0

                                    </td>
                                    <td>0

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

export default DeliveryList;