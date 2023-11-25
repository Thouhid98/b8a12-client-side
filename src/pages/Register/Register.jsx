import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
    const axiosPublic = useAxiosPublic(); 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const {createUser, updateUserProfile} = useContext(AuthContext)

      const onSubmit = data => {
        console.log(data)

        // Firebase User Creation 
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);

            // Update Profile 
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                console.log('user profile updated');

                // Save User info to database 
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    photo: data.photoURL
                }
                axiosPublic.post('/users', userInfo)
                .then(res=>{
                    console.log('add to database');
                    if(res.data.insertedId >1){
                        Swal.fire({
                            title: 'Success!',
                            text: 'SignUp Successfull',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }

                })
                reset()
            })
        })
        .catch(error=>{
            console.log(error);
        })
      }    
      
    return (
        <div >
        <div className="flex ml-40 gap-8 mb-20 p-12">
            <div className="">
                <img className="w-[400px] h-[350px] my-16" src='' alt="" />
            </div>
            <div className="border lg:w-[500px] rounded-lg p-12 h-[700px]">
                <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">SignUp</h2>
                <div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">Name </span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered"  />
                            {errors.name && <span className='mt-1 text-red-600'>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">PhotoURL </span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} name='photoURL' placeholder="PhotoURL" className="input input-bordered"  />
                            {errors.PhotoURL && <span className='mt-1 text-red-600'>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">Email </span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered"  />
                            {errors.email && <span className='mt-1 text-red-600'>This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-medium">Confirm Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength:6, maxLength: 20  })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='mt-1 text-red-600'>This field is required</span>}

                        </div>

                       

                        {/* <Link to='/register'> */}
                        <div className="form-control mt-6">
                            <button  className="btn bg-[#D99904] text-white">SignUp</button>
                        </div>

                        <label className="label">
                            <a href="/login" className="label-text-alt link link-hover text-base ml-28 text-center">Already Have an Account</a>
                        </label>
                    </form>

                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;