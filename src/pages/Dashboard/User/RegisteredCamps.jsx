import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

const RegisteredCamps = () => {
    // const campData = useLoaderData();
    // console.log(campData);
    const axiosSecure = useAxiosSecure()
    const [campRegister, setRegister] = useState([])
    // console.log(campRegister);
    const { user } = useContext(AuthContext)

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


    // const { register, handleSubmit, reset } = useForm()

    // const onSubmit = async (data, e) => {
    //     e.preventDefault();
    //     document.getElementById('my_modal_1').close();

    //     console.log(data);

    // }
    
    
    const handleFeedback = (e, campname) =>{
        console.log('campId', campname);

        document.getElementById('my_modal_1').close();
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value;
        const rating = form.rating.value;
        console.log(feedback, rating);
     
        if (user && user.email) {          
            const feedBack = {              
                feedback: feedback,
                rating: parseInt(rating),
                name: name,
                email: user.email,
            }
            axiosSecure.post('/feedback-and-rating', feedBack)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                       
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: 'Feedback Successfull',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
    }



    return (
        <div>
            <div>
                <div className=''>

                    <h2 className="text-2xl font-bold text-black">Registered Camps: {campRegister.length}</h2>
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
                                    <th>Review</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    campRegister?.map((item, index) => <tr key={item._id}>
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

                                        <Link to={`/dashboard/ratings/${item._id}`}>
                                            <th>
                                                <button className="btn btn-primary my-5 btn-sm">Review</button>
                                            </th>
                                        </Link>

                                        <th>
                                            <Link to='/dashboard/payment'>
                                            <button className="btn btn-sm btn-warning text-white">Pay</button>
                                            </Link>
                                            
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