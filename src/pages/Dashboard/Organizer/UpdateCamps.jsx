import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateCamps = () => {

    const { _id, name, campfees, location, specialservice, professionals, targetaudience, date, image, campdes} = useLoaderData();

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axisoSecure = useAxiosSecure()
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
            // Now send the data to server 
            const campItem = {
                name: data.name,
                campfees: data.campfees,
                campdes: data.campdes,
                location: data.location,
                specialservice: data.specialservice,
                professionals: data.professionals,
                targetaudience: data.targetaudience,
                date: data.date,   
                image: res.data.data.display_url
            }
            const campRes = await axisoSecure.patch(`/update-camp/${_id}`, campItem)
            console.log(campRes.data);
            if (campRes.data.modifiedCount > 0) {
                // show success message 
                // reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated to the camp`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }


    return (
        <div>
            <h2 className="text-5xl text-black font-bold text-center mb-8">Update Camp</h2>
            <div className="ml-8 mb-20 bg-gray-100 p-20  rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="">

                    <div>
                        <label className="label">
                            <span className="label-text">Camp Name*</span>

                        </label>
                        <input defaultValue={name} {...register("name")} type="text" placeholder="Camp Name" className="input input-bordered w-[700px] " required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Camp Fees*</span>
                        </label>
                        <input defaultValue={campfees} {...register("campfees")} type="number" placeholder="Camp Fees" className="input input-bordered w-[700px] " required />

                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Location*</span>

                        </label>
                        <input defaultValue={location} {...register("location")} type="text" placeholder="Location" className="input input-bordered w-[700px] " />
                    </div>
                    {/* </div> */}

                    <div className="form-control w-[700px]">
                        <label className="label">
                            <span className="label-text">Specialized Services</span>

                        </label>
                        <textarea defaultValue={specialservice} {...register("specialservice")} className="textarea textarea-bordered h-24" placeholder="Specialservice" required></textarea>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Healthcare Professionals</span>

                        </label>
                        <input defaultValue={professionals} {...register("professionals")} type="text" placeholder="Professionals" className="input input-bordered w-[700px] " />

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Target Audience</span>

                        </label>
                        <input defaultValue={targetaudience} {...register("targetaudience")} type="text" placeholder="Professionals" className="input input-bordered w-[700px] " />

                    </div>

                    <div className="form-control w-[700px]">
                        <label className="label">
                            <span className="label-text">Camp Description</span>

                        </label>
                        <textarea defaultValue={campdes} {...register("campdes")} className="textarea textarea-bordered h-24" placeholder="Camp Description" required></textarea>

                    </div>

                    <div className="form-control w-[850px]">
                        <label className="label">
                            <span className="label-text">Scheduled Date and Time</span>
                        </label>

                        <input defaultValue={date} {...register("date")} type="datetime-local" placeholder="Professionals" className="input input-bordered w-[415px] " />
                    </div>

                    <div className="my-4">
                        <input  {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-secondary">Update Camp</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCamps;