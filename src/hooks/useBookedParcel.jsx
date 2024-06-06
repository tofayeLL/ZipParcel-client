import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useState } from "react";


const useBookedParcel = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [parcels, setParcels] = useState([]);
    const [filterParcels, setFilterParcels] = useState([]);

    const { data: bookingParcels, refetch } = useQuery({
        queryKey: ['bookedParcel'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookedParcel/${user?.email}`)
            // console.log(res.data);

               setParcels(res.data);
               setFilterParcels(res.data);

            return res.data;

        }, initialData: []

    })
    return { bookingParcels, refetch, parcels, filterParcels, setFilterParcels, setParcels }

};

export default useBookedParcel;