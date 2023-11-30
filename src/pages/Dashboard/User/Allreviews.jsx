import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const Allreviews = () => {

    const [reviews, setReviews] = useState([])
    console.log(reviews);
    const axisoSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axisoSecure.get(`/given-reviews/${user.email}`);
                setReviews(response.data);
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

                    <h2 className="text-2xl font-bold text-black">Registered Camps: {reviews.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="table my-4">
                            {/* head */}
                            <thead>
                                <tr className="text-xl text-gray font-semibold">
                                    <th>
                                        #
                                    </th>
                                    <th>Camp Joined</th>
                                    <th>Feedback</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    reviews?.map((item, index) => <tr key={item._id}>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        
                                        <td>
                                            {item.campname}
                                        </td>
                                        <td>
                                            {item.feedback}
                                        </td>
                                        <td>$ {item.email}</td>
                                        <td>$ {item.rating}</td>

                                        
                                            <th>
                                                <button className="btn btn-primary my-5 btn-sm">Go Back</button>
                                            </th>
        
                                
                                    </tr>)
                                }

                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allreviews;