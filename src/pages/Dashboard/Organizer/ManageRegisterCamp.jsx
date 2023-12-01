import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageRegisterCamp = () => {
    const axiosSecure = useAxiosSecure()
    const [register, setRegister] = useState([])
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


    const handleAcceptPayment = item => {

        // console.log('clicked Id pending', item._id);

        axiosSecure.patch(`/accept-payment/${item._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Make Payment Successfull!",
                        text: ' Payment Accepted',
                        icon: "success",
                        timer: 2500
                    });
                }
            })
    }

    const handleDeleteItem = item =>{
        axiosSecure.delete(`/delete-registration/${item._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Cancel Registration Successfull!",
                        text: ' Cancel Registration',
                        icon: "success",
                        timer: 2500
                    });
                }
            })
    }



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
                                    <th>Cancel</th>
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
                                            {item.campname}
                                        </td>
                                        <td>
                                            {item.date}
                                        </td>

                                        <td>
                                    {
                                        item.payment ==='pending' ? <button onClick={() => handleAcceptPayment(item)}  className='btn btn-secondary btn-xs ml-3'>Pending</button> :
                                        <th>
                                        <button className="btn btn-primary btn-xs">Accepted</button>
                                        </th>
                                    }
                                     </td>



                                        {/* <Link to={`/dashboard/updatecamps/${item._id}`}>
                                            <th>
                                                <button className="btn btn-primary my-5 btn-sm">Update</button>
                                            </th>
                                        </Link> */}


                                        <th>
                                            <button onClick={() => handleDeleteItem(item)} className="btn bg-red-500 text-white btn-sm">Cancel </button>
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