import { useContext} from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const UserReview = () => {
    const { _id, campId, campname } = useLoaderData()
    console.log(_id, campId, campname);
    const {user} = useContext(AuthContext);
    const axisoSecure = useAxiosSecure()

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {

            const reviewdata = {
                campId:campId,
                campname:campname,
                feedback: data.feedback,
                rating: data.rating,
                email:user.email,
                
            }
            const reviewRes = await axisoSecure.post('/feedback-rating', reviewdata)
            console.log(reviewRes.data);
            if (reviewRes.data.acknowledged == true) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.displayName} Thanks for Review`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
    
        console.log(data);

    }

    return (
        <div>
            <h2 className="text-5xl text-black font-bold text-center mb-8">Give Opinion</h2>
            <div className="ml-8 mb-20 bg-gray-100 p-20  rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="">

                    <div>
                        <label className="label">
                            <span className="label-text">Give Feedback</span>
                        </label>

                        <input {...register("feedback")} type="text" placeholder="Feedback" className="input input-bordered w-[700px] " required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>

                        <input {...register("rating")} type="number" placeholder="Rating" className="input input-bordered w-[700px] " required />
                    </div>

                    <button className="btn bg-orange-400 text-white my-5 ">Add Rating</button>
                </form>
            </div>
        </div>
    );
};

export default UserReview;