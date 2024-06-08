import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useUserRole from "../../../../hooks/useUserRole";
import ReviewCard from "./ReviewCard";



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
            <h1>from my reviews: {myAllReviews.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    myAllReviews.map(myReview => <ReviewCard
                        myReview={myReview}
                        key={myReview._id}></ReviewCard>)

                }
            </div>



        </div>
    );
};

export default MyReviews;