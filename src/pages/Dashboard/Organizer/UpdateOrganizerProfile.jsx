import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateOrganizerProfile = () => {

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        // image upload to Imagebb and get the url 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const organizerData = {
                name: data.name,
                number: data.number,
                address: data.address,  
                image: res.data.data.display_url
            }
            const organizerRes = await axiosSecure.patch(`/organizerprofile-update/${user.email}`, organizerData)
            console.log(organizerRes.data);
            if (organizerRes.data.acknowledged == true) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} Profile Update Successfull`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }


    return (
        <div>
        <h2 className="text-5xl text-black font-bold text-center mb-8">Update Profile</h2>
        <div className="ml-8 mb-20 bg-gray-100 p-20  rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="">

                <div>
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input {...register("name")} type="text" placeholder="Name" className="input input-bordered w-[700px] " required />
                </div>

               
                <div>
                    <label className="label">
                        <span className="label-text">Contact Number</span>
                    </label>
                    <input {...register("number")} type="number" placeholder="Contact Number" className="input input-bordered w-[700px] " required />

                </div>
               

                <div>
                    <label className="label">
                        <span className="label-text">Address</span>

                    </label>
                    <input {...register("address")} type="text" placeholder="Address" className="input input-bordered w-[700px] " />
                </div>
            
                <div className="my-4">
                    <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn btn-secondary">Update Profile</button>
            </form>
        </div>
    </div>
    );
};

export default UpdateOrganizerProfile;