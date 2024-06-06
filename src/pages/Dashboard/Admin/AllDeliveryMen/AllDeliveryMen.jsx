import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const AllDeliveryMen = () => {

    const axiosPublic = useAxiosPublic();

    const { data: deliveryMens } = useQuery({
        queryKey: ['deliveryMen'],
        queryFn: async () => {
            const res = await axiosPublic.get('/deliveryMen')
            // console.log(res.data)
            return res.data;

        }, initialData: []
    })
    console.log(deliveryMens);





    return (
        <div>
            <h1>From all delivery men: {deliveryMens.length}</h1>




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
                                deliveryMens.map((item, index) => <tr key={item._id}>
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
                                    <td>
                                       
                                    </td>
                                    <td>
                                        
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

export default AllDeliveryMen;