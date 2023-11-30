import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const ProfileUpdate = () => {
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

            const userdata = {
                name: data.name,
                number: data.number,
                address: data.address,
                interests: data.interests,   
                image: res.data.data.display_url
            }
            const userRes = await axiosSecure.patch(`/updateuser-profile/${user.email}`, userdata)
            console.log(userRes.data);
            if (userRes.data.acknowledged == true) {
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
                

                <div className="form-control w-[700px]">
                    <label className="label">
                        <span className="label-text">Interests Area</span>

                    </label>
                    <textarea {...register("interests")} className="textarea textarea-bordered h-24" placeholder="Interests Area" required></textarea>
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

export default ProfileUpdate;