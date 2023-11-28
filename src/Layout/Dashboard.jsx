import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const {email} = user
    
    // const {name, }
    const organizer = false;
    const admin = false
    const newuser = true
    return (
        <>
            <div className='flex'>
                <div className='w-64 min-h-screen bg-[#D99904]'>
                    <ul className='menu p-4'>
                        {
                            organizer ?
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
                                    <li>
                                        <NavLink to='/dashboard/users'>
                                            All Users</NavLink>
                                    </li>
                                </>
                                :
                                <>

                                </>
                        }

                        {
                            admin ? <>
                                <li>
                                    <NavLink to='/'>
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
                            newuser ? <>
                                <li>
                                    <NavLink to='/'>
                                       User Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/registered-camps/${email}`}>
                                        Registered Camps</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>
                                       Payment History</NavLink>
                                </li>
                            </>
                                :
                                <></>
                        }


                        <div className='divider'></div>

                        <li>
                            <NavLink to='/'>
                                Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/salad'>
                                Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/salad'>
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