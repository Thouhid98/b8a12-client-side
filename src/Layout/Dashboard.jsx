import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useOrganizer from "../hooks/useOrganizer";
import useAdmin from "../hooks/useAdmin";
import useProfessionals from "../hooks/useProfessionals";
import { FaBook, FaEnvelope, FaHome, FaIdBadge, FaList, FaPaypal, FaRegCommentDots, FaUsers, FaUtensils } from "react-icons/fa";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    // const {email} = user

    const [isAdmin] = useAdmin()
    const [isOrganizer] = useOrganizer()
    const [isProfessionals] = useProfessionals()

    return (
        <>
            <div className='flex'>
                <div className='w-64 min-h-screen bg-[#D99904]'>
                    <ul className='menu p-4'>
                        {
                            user && isOrganizer ?
                                <>
                                    <li >
                                        <NavLink to='/dashboard/organizer-profile'>
                                            <FaHome></FaHome>
                                            Organizer Home</NavLink>
                                    </li>
                                    <li >
                                        <NavLink to='/dashboard/add-a-camp'>
                                        <FaUtensils></FaUtensils>
                                            Add Camps</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manage-camps'>
                                        <FaList></FaList>
                                            Manage Camps</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manage-registered-camps'>
                                        <FaBook></FaBook>
                                            Registered Camps </NavLink>
                                    </li>
                                    
                                </>
                                :
                                <>

                                </>
                        }

                        {
                            user && isProfessionals ? <>
                                <li>
                                    <NavLink to='/dashboard/Professionals-profile'>
                                    <FaHome></FaHome>
                                    Professionals Profile</NavLink>
                                </li>
                                
                            </>
                                :
                                <></>
                        }
                        {
                            user && isAdmin ? <>
                                <li>
                                    <NavLink to='/dashboard/admin-profile'>
                                    <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allusers'>
                                    <FaUsers></FaUsers>
                                        Manage Users</NavLink>
                                </li>
                            </>
                                :
                                <></>
                        }

                        {
                            user && !isAdmin && !isOrganizer && !isProfessionals ?
                             <>
                                <li>
                                    <NavLink to={`/dashboard/participant-profile/${user?.email}`}>
                                    <FaIdBadge />
                                        User Profile</NavLink>
                                </li>
                                {/* <li>
                                <NavLink to={'/dashboard/user-profile'}>
                                        User Profile</NavLink>
                                </li> */}
                                
                                <li>
                                    <NavLink to={`/dashboard/registered-camps/${user?.email}`}>
                                    <FaBook></FaBook>
                                        Registered Camps</NavLink>
                                </li>

                                
                                <li>
                                    <NavLink to="/dashboard/payment-history">
                                       <FaPaypal></FaPaypal>
                                        Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reviews'>
                                    <FaRegCommentDots />
                                        Your Reviews</NavLink>
                                </li>
                            </>:''
                        }        
                         
                        


                        <div className='divider'></div>

                        <li>
                            <NavLink to='/'>
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to='/contact-us'>
                            <FaEnvelope />
                                Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex-1 p-6'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;