import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";



const ManageForm = ({ itemId, onClose }) => {
    /*  const {bookingParcels} = use */


    console.log(itemId);

    const axiosPublic = useAxiosPublic();

    const { data: deliveryMens, refetch } = useQuery({
        queryKey: ['deliveryMen'],
        queryFn: async () => {
            const res = await axiosPublic.get('/deliveryMen')
            // console.log(res.data)
            return res.data;

        }, initialData: []
    })
    console.log(deliveryMens);






    const handleLogin = async (e) => {
        e.preventDefault()
        const form = e.target;
        const approximateDate = form.approximateDate.value;
        const deliveryMenID = form.deliveryMenID.value;

        const status = 'on the way';

        const updateBookedInfo = { approximateDate, deliveryMenID, status }
        console.log(updateBookedInfo, itemId);


        const res = await axiosPublic.put(`/manageBooked/${itemId}`, updateBookedInfo)
        console.log(res.data);

        if (res.data.modifiedCount > 0) {
            // show success popup

            Swal.fire({
                title: 'Success!',
                text: `Assign successfully`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            refetch();
            onClose();

        }

        // form.reset();



    }





    return (
        <div className="" >
            <form onSubmit={handleLogin} className="lg:w-[80%] w-full mx-auto space-y-5 rounded-lg my-10" >

                <div className="form-control">
                    <label className="label">
                        <span className="label-text lg:text-lg text-base font-semibold">Approximate delivery date</span>
                    </label>
                    <input type="date" name="approximateDate" placeholder="approximateDate" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text lg:text-lg text-base font-semibold"> Select  Deliverymen</span>
                    </label>
                    <select
                        name="deliveryMenID"
                        className="input input-bordered w-full"
                        required
                        defaultValue=""
                    >
                        <option value="" disabled>Select a delivery man</option>
                        {deliveryMens.map((deliveryMan, index) => (
                            <option key={index} value={deliveryMan._id}>
                                {deliveryMan.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Assign" className="btn text-xl text-white outline-non bg-orange-500" />
                </div>
            </form>




        </div>
    );
};

export default ManageForm;