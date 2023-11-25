import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const organizer = true;
    return (
        <>
            <div className='flex'>
                <div className='w-64 min-h-screen bg-[#D99904]'>
                    <ul className='menu p-4'>
                        {
                            organizer ?
                                <>
                                    <li className="text-white font-semibold text-base">
                                        <NavLink to='/dashboard/organizer-profile'>
                                            Organizer Home</NavLink>
                                    </li>
                                    <li className="text-white font-semibold text-base">
                                        <NavLink to='/dashboard/add-a-camp'>

                                            Add Camps</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manage-camps'>
                                            Manage Camps</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/bookings'>
                                            Registered Camps </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/users'>
                                            All Users</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome">

                                            User Home</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/dashboard/cart">

                                            My Cart </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review">

                                            Add a Review</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/paymenthistory">

                                            Payment History</NavLink>
                                    </li>
                                </>
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