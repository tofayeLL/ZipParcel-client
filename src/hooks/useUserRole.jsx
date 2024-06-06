import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";



const useUserRole = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();


    const { data: getUser, refetch } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
       
        queryFn: async () => {
            const data = await axiosPublic.get(`/user/${user?.email}`);
            // console.log(data.data);
            return data.data;
        }, initialData: []
    })
    return { getUser, refetch };

};

export default useUserRole;