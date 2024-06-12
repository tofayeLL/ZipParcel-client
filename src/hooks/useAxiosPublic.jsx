import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://zip-parcel-server.vercel.app'
})


const useAxiosPublic = () => {

    return axiosPublic;

};

export default useAxiosPublic;