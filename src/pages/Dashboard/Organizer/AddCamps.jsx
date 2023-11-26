import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddCamps = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async(data) =>{
        console.log(data)

        // image upload to Imagebb and get the url 
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        // if(res.data.success){
            
        //     const menuItem = {
        //         name: data.name,
        //         category: data.category,
        //         price: parseFloat(data.price),
        //         recipe: data.recipe,
        //         image: res.data.data.display_url
        //     }
        //     const menuRes = await axisoSecure.post('/menu', menuItem)
        //     console.log(menuRes.data);
        //     if(menuRes.data.acknowledged == true){
                
        //         reset()
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: `${data.name} added to the menu`,
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        //     }
        // }
        console.log(res.data);
    }









    return (
        <div>
            <h2 className="text-5xl text-black font-bold text-center mb-8">Add Camps</h2>
        <div className="ml-8 mb-20 bg-gray-100 p-20  rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="">

                <div>
                    <label className="label">
                        <span className="label-text">Camp Name*</span>

                    </label>
                    <input {...register("name")} type="text" placeholder="Camp Name" className="input input-bordered w-[700px] " required />
                </div>

                {/* <div className="flex gap-5"> */}
                    {/* Category  */}
                    <div>
                        <label className="label">
                            <span className="label-text">Camp Fees*</span>
                        </label>
                        <input {...register("campfees")} type="number" placeholder="Camp Fees" className="input input-bordered w-[700px] " required />

                    </div>


                    {/* Price  */}

                    <div>
                        <label className="label">
                            <span className="label-text">Location*</span>

                        </label>
                        <input {...register("location")} type="text" placeholder="Location" className="input input-bordered w-[700px] " />
                    </div>
                {/* </div> */}

                <div className="form-control w-[700px]">
                    <label className="label">
                        <span className="label-text">Specialized Services</span>

                    </label>
                    <textarea {...register("specialservice")} className="textarea textarea-bordered h-24" placeholder="Specialservice" required></textarea>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Healthcare Professionals</span>
                        
                    </label>
                    <input {...register("professionals")} type="text" placeholder="Professionals" className="input input-bordered w-[700px] " />

                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Target Audience</span>
                        
                    </label>
                    <input {...register("targetaudience")} type="text" placeholder="Professionals" className="input input-bordered w-[700px] " />

                </div>

                <div className="form-control w-[700px]">
                    <label className="label">
                        <span className="label-text">Camp Description</span>
                        
                    </label>
                    <textarea {...register("campdes")} className="textarea textarea-bordered h-24" placeholder="Camp Description" required></textarea>

                </div>

                <div className="form-control w-[850px]">
                    <label className="label">
                        <span className="label-text">Scheduled Date and Time</span>
                    </label>

                    <input {...register("date")} type="datetime-local" placeholder="Professionals" className="input input-bordered w-[415px] " />
                </div>

                <div className="my-4">
                    <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn btn-secondary">Add Camps</button>
            </form>
        </div>
    </div>
  );
};

export default AddCamps;