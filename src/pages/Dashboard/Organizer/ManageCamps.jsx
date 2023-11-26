import useCamp from "../../../hooks/useCamp";

const ManageCamps = () => {
    const [camps, ,refetch] = useCamp()
    console.log(camps);
    return (
        <div>
            <div>
                <div className=''>
                   
                    <h2>All Camps: {camps.length}</h2>
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
                                    <th>Price</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    camps?.map((item, index) => <tr key={item._id}>
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
                                        <td>$ {item.price}</td>

                                        {/* <Link to={`/dashboard/updateitem/${item._id}`}>
                                            <th>
                                                <button className="btn btn-secondary btn-sm">Update</button>
                                            </th>
                                        </Link> */}

                                        <th>
                                            {/* <button onClick={() => handleDeleteItem(item._id)} className="btn btn-secondary btn-sm">Delete </button> */}
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

export default ManageCamps;