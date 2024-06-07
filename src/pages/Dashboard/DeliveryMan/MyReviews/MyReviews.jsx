import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useUserRole from "../../../../hooks/useUserRole";


const MyReviews = () => {
    const { getUser } = useUserRole();
    console.log(getUser._id);
    const axiosPublic = useAxiosPublic()


    const { data: myAllReviews } = useQuery({
        queryKey: ['myReviews', getUser._id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myReviews/${getUser._id}`)
            console.log(res.data);
            return res.data
        }, initialData: []

    })

    console.log(myAllReviews)







    return (
        <div>
            <h1>from my reviews</h1>

        </div>
    );
};

export default MyReviews;