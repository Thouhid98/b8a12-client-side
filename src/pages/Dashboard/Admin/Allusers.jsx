import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Allusers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({      
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    title: "Make Admin Successfull!",
                    text: `${user.name} is an Admin Now`,
                    icon: "success",
                    timer:2500
                });
            }
        })
    }

    const handleMakeOrganizer = user =>{
        axiosSecure.patch(`/users/organizer/${user._id}`)
        .then(res =>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    title: "Make Organizer Successfull!",
                    text: `${user.name} is an Organizer Now`,
                    icon: "success",
                    timer:2500
                });
            }
        })
    }

    const handleMakeProfessionals = user =>{
        axiosSecure.patch(`/users/professionals/${user._id}`)
        .then(res =>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    title: "Add Professionals Successfull!",
                    text: `${user.name} is Added to Professionals`,
                    icon: "success",
                    timer:2500
                });
            }
        })
    }




    return (
        <div>
            <div className='flex justify-evenly my-4 mb-4'>
                <h2 className='text-2xl font-bold '>All Users</h2>
                <h2 className='text-2xl font-bold'>Total Users {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Organizer</th>
                            <th>Add Professionals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                    {
                                        user.role ==='admin' ? <button className='btn btn-success text-white btn-xs ml-6'>Admin</button> :
                                        <th>
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-primary btn-xs">Make Admin </button>
                                        </th>
                                    }                            
                                </td>
                                <td>
                                    {
                                        user.role ==='organizer' ? <button className='btn btn-secondary btn-xs ml-3'>Organizer</button> :
                                        <th>
                                        <button onClick={() => handleMakeOrganizer(user)} className="btn btn-primary btn-xs">Make Organizer </button>
                                        </th>
                                    }
                                </td>
                                <td>
                                    {
                                        user.role ==='professionals' ? <button className='btn btn-accent btn-xs ml-3 text-white'>Professionals</button> :
                                        <th>
                                        <button onClick={() => handleMakeProfessionals(user)} className="btn  btn-primary btn-xs">Add Professionals </button>
                                        </th>
                                    }
                                </td>

                                <td>
                                    <th>
                                        {/* <button onClick={() => handleDeleteUser(user)} className="btn btn-secondary">Delete </button> */}
                                    </th>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;