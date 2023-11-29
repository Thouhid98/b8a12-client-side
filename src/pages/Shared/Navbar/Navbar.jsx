import { Link } from "react-router-dom";
import logo from '../../../assets/1633953145689.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useOrganizer from "../../../hooks/useOrganizer";
import useProfessionals from "../../../hooks/useProfessionals";

const Navbar = () => {
    const [isAdmin] = useAdmin()
    // console.log('Navbar admin', isAdmin);
    const [isOrganizer] = useOrganizer();
    console.log('Navbar organizer', isOrganizer);

    const [isProfessionals] = useProfessionals()
    console.log('Nav professionals', isProfessionals );

    const { user, logOut } = useContext(AuthContext)

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
                    <p className="ml-2 text-4xl font-bold"><span className="text-4xl text-blue-400">M</span>edi <span className="text-4xl text-orange-400">C</span>amp</p>
                </div>

                <div>
                    <ul className="flex gap-6 my-6 mr-8  text-xl  font-semibold">
                        <Link to='/'>Home</Link>

                        {
                            isAdmin && user ?
                                <>
                                    <Link to='/available-camps'>Available Camps</Link>
                                    <Link to='/dashboard/admin-profile'>Dashboard</Link>
                                </>
                                : ''
                        }
                        {
                            user && isOrganizer ?
                                <>
                                    <Link to='/available-camps'>Available Camps</Link>
                                    <Link to='/dashboard/organizer-profile'>Dashboard</Link>
                                </> : ''

                        }
                        {
                            user && isProfessionals ?
                                <>
                                    <Link to='/available-camps'>Available Camps</Link>
                                    <Link to='/dashboard/professionals-profile'>Dashboard</Link>
                                </> : ''

                        }
                        {
                            user && !isAdmin && !isOrganizer && !isProfessionals ?
                                <>
                                    <Link to='/available-camps'>Available Camps</Link>
                                    <Link to='/dashboard/user-profile'>Dashboard</Link>
                                </>
                                : ''
                        }

                        <Link to='/contact-us'>Contact Us</Link>
                    </ul>
                </div>



                {
                    user ?
                        <>
                            <p className="text-xl font-bold text-white">{user.displayName}</p>
                            <div className="flex-none gap-2 mr-4">

                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black text-white  rounded-box w-52">

                                        <li><a onClick={handleSignOut}>Logout
                                            <span className="badge">New</span>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </> :
                        <>
                            <Link to='/login'>
                                <button className="btn bg-white text-lg text-orange-400   mr-4">Login</button>
                            </Link>

                            <Link to='/register'>
                                <button className="btn bg-blue-400 text-lg text-white mr-4">SignUp</button>
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;