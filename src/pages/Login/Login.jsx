import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {signinUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

         // user SignIn firebase 
         signinUser(email, password)
         .then(result => {
             console.log(result.user);
             Swal.fire({
                 title: 'Success!',
                 text: 'Login Successfull',
                 icon: 'success',
                 confirmButtonText: 'Cool'
             })
             navigate('/');
             e.target.reset();
         })
         .catch(error => {
             console.log(error);
             Swal.fire({
                 title: 'warning!',
                 text: 'Invalid UserId or Password',
                 icon: 'warning',
                 confirmButtonText: 'Cool'
             })
         })
    }

    return (
        <div >
            <div className="flex ml-40 gap-8 mb-20 p-12">
                <div className="">
                    <img className="w-[400px] h-[350px] my-16" src='' alt="" />
                </div>
                <div className="border lg:w-[500px] rounded-lg p-12 h-[650px]">
                    <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">Login</h2>
                    <div>

                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Email </span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>

                           

                            {/* <Link to='/login'> */}
                            <div className="form-control mt-6">
                                <button disabled={false} className="btn bg-orange-400 text-white">LogIn</button>
                            </div>

                            <label className="label">
                                <a href="/register" className="label-text-alt link link-hover text-base ml-40 text-center">Don't Have an Account?</a>
                            </label>
                        </form>

                        {/* <SocialLogin></SocialLogin> */}
                        <div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;