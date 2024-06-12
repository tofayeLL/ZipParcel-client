import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const ModalReviewForm = ({ onClose, id }) => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    // console.log(id);



    // handle review
    const handleReview = async (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = form.userName.value;
        const userImage = form.userImage.value;
        const feedback = form.feedback.value;
        const deliveryMenID = form.deliveryMenID.value;
        const rating = parseFloat(form.rating.value);

        const reviewDate = new Date();

        const review = { userName, userImage, feedback, deliveryMenID, rating, reviewDate }
        // console.log(review);

        const res = await axiosPublic.post('/userReview', review);
        // console.log(res.data);
        if (res.data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Thanks for your review',
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            const res = await axiosPublic.post(`/reviewAverage/${id}`)
            console.log('average review', res.data);

            form.reset();
            onClose();


        }
        /* form.reset();
        onClose(); */






        // form.reset();
    }

    return (
        <div>
            <div className="" >
                <h1 className="text-2xl font-semibold text-orange-500 text-center">Give A Review</h1>
                <form onSubmit={handleReview} className="lg:w-[90%] w-full mx-auto space-y-2 rounded-lg my-4" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-base font-semibold">User’s Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName || 'tofayel'} name="userName" placeholder="User’s Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-base font-semibold">User’s Image</span>
                        </label>
                        <input type="text" defaultValue={user?.photoURL || 'image coming'} name="userImage" placeholder="User’s Image" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">User  Feedback</span>
                        </label>

                        <textarea name="feedback" placeholder="User Feedback" className="textarea textarea-bordered textarea-sm w-full d" required >
                        </textarea>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-base font-semibold">Delivery Men’s Id</span>
                        </label>
                        <input type="text" defaultValue={id} name="deliveryMenID" placeholder="Delivery Men’s Id" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-base font-semibold">Rating out of 5</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating out of 5" className="input input-bordered" required />
                    </div>



                    <div className="form-control ">
                        <input type="submit" value="Submit" className="btn mt-5 text-xl text-white outline-non bg-orange-500" />
                    </div>
                </form>




            </div>

        </div>
    );
};

export default ModalReviewForm;