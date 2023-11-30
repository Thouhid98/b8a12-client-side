import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAdmin from "../../../../hooks/useAdmin";
import useOrganizer from "../../../../hooks/useOrganizer";

const CampDetails = () => {
    const isAdmin = useAdmin()
    const isOrganizer = useOrganizer()
    const axiosSecure = useAxiosSecure()
    const campdetails = useLoaderData()
    console.log(campdetails);
    const { user } = useContext(AuthContext)
    console.log(user);
    const { _id, name, campfees, location, specialservice, professionals, targetaudience, date, image, campdes } = campdetails


    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data, e) => {
        e.preventDefault();
        document.getElementById('my_modal_1').close();

        if (user && user.email) {
            // console.log(user.email, data);
            const registerCamps = {
                campId: _id,
                campname: name,
                date: date,
                location: location,
                image: image,
                name: data.name,
                age: data.age,
                phone: data.phone,
                campfee: parseInt(data.campfee),
                gender: data.gender,
                healthissue: data.healthissue,
                email: user.email,
                payment: 'pending'

            }
            axiosSecure.post('/manage-registered-camps', registerCamps)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Registration Successfull`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
    }

    return (
        <>
            <div>

                <img className="lg:ml-[370px] pt-24 mb-3 lg:w-[600px] lg:h-[400px]" src={image} alt="" />
                <h2 className="text-5xl lg:w-[420px] lg:ml-[450px]  text-blue-500 font-bold mb-5 border-y-4 p-3 text-center">Camp Details</h2>
                <div className="flex gap-4 mx-auto lg:ml-[200px] ">
                    <div className="lg:w-[450px] pl-20 ">
                        <p className="text-xl font-bold mb-2">Camp Title: {name}</p>
                        <p className="text-black font-medium">Camp Fees: $ <span className="text-blue-600 font-medium">{campfees}</span></p>
                        <p>Location: {location}</p>
                        <p>Date & Time: {date}</p>
                        <p>Professionals: {professionals}</p>
                    </div>
                    <div className="lg:w-[550px]">
                        <p className=" text-black font-medium">Target Audience: {targetaudience}</p>
                        <p>Sepcial Services: {specialservice}</p>
                        <p> <span className="text-black font-medium">Details:</span> {campdes}</p>

                        {/* modal  */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}

                        <button className="btn my-3 mb-20 bg-orange-500 text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Join Camp</button>
                        
                        
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Want to Join The Camp!</h3>
                                <p className="py-4">Please Register For it.</p>

                                <div className="modal-action ">
                                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">


                                        <div className="lg:-ml-[360px] -mt-10">
                                            <label className="label">
                                                <span className="label-text">Name*</span>

                                            </label>
                                            <input  {...register("name")} type="text" placeholder="Your Name" className="input input-bordered w-[300px] " required />
                                        </div>
                                        <div className="lg:-ml-[360px] ">
                                            <label className="label">
                                                <span className="label-text">Age*</span>

                                            </label>
                                            <input  {...register("age")} type="number" placeholder="Your Age" className="input input-bordered w-[300px] " required />
                                        </div>
                                        <div className="lg:-ml-[360px] ">
                                            <label className="label">
                                                <span className="label-text">Phone*</span>

                                            </label>
                                            <input  {...register("phone")} type="number" placeholder="Phone Number" className="input input-bordered w-[300px] " required />
                                        </div>
                                        <div className="lg:-ml-[360px] ">
                                            <label className="label">
                                                <span className="label-text">Camp Fee*</span>

                                            </label>
                                            <input defaultValue={campfees} {...register("campfee")} type="number" placeholder="Camp Fee" className="input input-bordered w-[300px] " required />
                                        </div>

                                        <div className="lg:-ml-[360px] ">
                                            <label className="label">
                                                <span className="label-text">Health Issue*</span>

                                            </label>
                                            <input  {...register("healthissue")} type="text" placeholder="Health Issue" className="input input-bordered w-[300px] " required />
                                        </div>

                                        <div className="lg:-ml-[360px] mb-2">
                                            <label className="label">
                                                <span className="label-text">Gender*</span>
                                            </label>
                                            <select
                                                {...register("gender")}
                                                className="select select-bordered w-[300px] " required
                                            >
                                                <option disabled value='default' selected>Select a Category</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>

                                            </select>
                                        </div>

                                        <button className="btn btn-primary bg-orange-500">Confirm</button>

                                    </form>
                                </div>
                            </div>

                        </dialog>

                    </div>
                </div>
            </div>
        </>

    );
};

export default CampDetails;