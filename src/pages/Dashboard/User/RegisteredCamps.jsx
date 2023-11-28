import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const RegisteredCamps = () => {
    // const campData = useLoaderData();
    // console.log(campData);
    const axiosSecure = useAxiosSecure()
    const [register, setRegister] = useState([])
    console.log(register);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosSecure.get(`/registered-camps/${user.email}`);
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
                                    <th>Payment Status</th>
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
                                        <td>$ {item.payment}</td>

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

export default RegisteredCamps;