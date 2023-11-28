import { Link } from "react-router-dom";
import logo from '../../../assets/1633953145689.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar fixed z-10  bg-black bg-opacity-30 text-white ">
                <div className="flex-1">
                    <img className="w-20" src={logo} alt="" />
                    <p className="ml-2 text-4xl font-bold"><span className="text-4xl text-blue-400">C</span>amp <span className="text-4xl text-orange-400">S</span>elx</p>
                </div>

                <div>
                    <ul className="flex gap-6 my-6 mr-8  text-xl  font-semibold">
                        <Link to='/'>Home</Link>
                        <Link to='/addblog'>Available Camps</Link>
                        <Link to='/dashboard/organizer-profile'>Dashboard</Link>

                        <Link to='/login'>Contact Us</Link>      
                    </ul>
                </div>



               {
                user ? 
                <>
                <p>{user.displayName}</p>
                 <div className="flex-none gap-2 mr-4">
                    
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black text-white  rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a onClick={handleSignOut}>Logout</a></li>
                        </ul>
                    </div>
                </div>
                </>:
                <>
                <button>Login</button>
                </>
               }
            </div>
        </div>
    );
};

export default Navbar;