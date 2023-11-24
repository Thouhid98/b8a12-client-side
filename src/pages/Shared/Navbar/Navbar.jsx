import { Link } from "react-router-dom";
import logo from '../../../assets/1633953145689.png'

const Navbar = () => {
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
                        <Link to='/allblogs'>Dashboard</Link>
                        <Link to='/menu'>Contact Us</Link>      
                    </ul>
                </div>



                <div className="flex-none gap-2 mr-4">
                    
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black text-white  rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a >Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;