import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: payments =[] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(payments);
            return res.data
        }
    })


    return (
        <div>
        
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>TransactionId</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            payments?.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    {item.transactionId}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>$ {item.campfee}</td>
                                <td className="bg-yellow-500 text-white text-center">$ {item.status}</td>
                                
                            </tr>)
                        }

                        {/* row 2 */}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;