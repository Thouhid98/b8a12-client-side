import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useOrganizer from "../hooks/useOrganizer";
import useAdmin from "../hooks/useAdmin";
import useProfessionals from "../hooks/useProfessionals";


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
                                            Organizer Home</NavLink>
                                    </li>
                                    <li >
                                        <NavLink to='/dashboard/add-a-camp'>

                                            Add Camps</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manage-camps'>
                                            Manage Camps</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manage-registered-camps'>
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
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allusers'>
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
                                        User Profile</NavLink>
                                </li>
                                {/* <li>
                                <NavLink to={'/dashboard/user-profile'}>
                                        User Profile</NavLink>
                                </li> */}
                                
                                <li>
                                    <NavLink to={`/dashboard/registered-camps/${user?.email}`}>
                                        Registered Camps</NavLink>
                                </li>

                                
                                <li>
                                    <NavLink to='/'>
                                        Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reviews'>
                                        Your Reviews</NavLink>
                                </li>
                            </>:''
                        }        
                         
                        


                        <div className='divider'></div>

                        <li>
                            <NavLink to='/'>
                                Home</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to='/contact-us'>
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