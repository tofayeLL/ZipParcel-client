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

        </div>
    );
};

export default AllDeliveryMen;