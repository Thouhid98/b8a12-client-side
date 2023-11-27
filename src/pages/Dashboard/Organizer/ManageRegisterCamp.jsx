import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageRegisterCamp = () => {
    const axiosSecure = useAxiosSecure()
    const [register, setRegister] = useState(null)
    console.log(register);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosSecure.get('/manage-registered-camps');
            setRegister(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

   

    return (
        <div>
            <div>
                <div className=''>

                    <h2 className="text-2xl font-bold text-black">Registered Camps: {register.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="table my-4">
                            {/* head */}
                            <thead>
                                <tr className="text-xl text-gray font-semibold">
                                    <th>
                                        #
                                    </th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Date & Time</th>
                                    <th>Price</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    register?.map((item, index) => <tr key={item._id}>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.date}
                                        </td>
                                        <td>$ {item.campfees}</td>

                                        {/* <Link to={`/dashboard/updatecamps/${item._id}`}>
                                            <th>
                                                <button className="btn btn-primary my-5 btn-sm">Update</button>
                                            </th>
                                        </Link> */}


                                        <th>
                                            {/* <button onClick={() => handleDeleteItem(item._id)} className="btn btn-warning text-white btn-sm">Delete </button> */}
                                        </th>
                                    </tr>)
                                }

                                {/* row 2 */}


                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageRegisterCamp;