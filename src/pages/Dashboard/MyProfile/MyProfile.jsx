import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import useUserRole from "../../../hooks/useUserRole";





const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyProfile = () => {
    const { refetch } = useUserRole();
    const { user, updateUserProfile, setUser} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,

    } = useForm();



    const onSubmit = async (data) => {
        // console.log('from update page', data);
        // image upload to the image bb and then get an url then send url to the database
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        // console.log(res.data);
        refetch();
        const photo = res.data.data.display_url;
        const name = data.name;
        // console.log(photo)
        // console.log('from my profile',user, name)


        // update profile photo from firebase
        updateUserProfile(name, photo)
            .then(
                () => setUser(
                    {
                        ...user, displayName: name || user?.displayName, photoURL: photo
                    }

                )

            )
           
       
    }


    return (
        <section  >


            <div className="bg-slate-200 p-8 lg:mt-4 lg:w-[80vh] w-[100vh] container mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl   font-semibold">Update your profile</h1>
                </div>
                <div className="mt-4">
                    <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square object-cover object-center" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Name</span>
                        </label>

                        <input type="text" defaultValue={user?.displayName} disabled  {...register("name")} placeholder="name" className="input input-bordered" />

                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg  text-base font-semibold">Email</span>
                        </label>

                        <input type="text" defaultValue={user?.email} disabled   {...register("email")} placeholder="email" className="input  input-bordered" />

                    </div>



                    <div className="mt-4">
                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Upload Profile Picture</span>
                        </label>
                        <input type="file"  {...register("image")} className="file-input w-full max-w-xs " />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="btn bg-orange-300 text-lg hover:text-orange-500 ">update</button>
                    </div>


                </form>
            </div>




        </section>
    );
};

export default MyProfile;