import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const UserProfile = () => {

    const axiosSecure = useAxiosSecure()
    const [userProfile, setuserProfile] = useState([])
    console.log(userProfile);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/participant-profile/${user.email}`);
                setuserProfile(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className="avatar lg:ml-[450px] my-5">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={userProfile.photo} />
                </div>
            </div>

            <div className="lg:ml-[410px]">
                <p className="text-3xl mb-2"><span className="text-3xl text-black font-bold">Name:</span> {userProfile.name}</p>
                <p className="text-3xl mb-2 -ml-16"><span className="text-3xl text-black font-bold">Email:</span> {userProfile.email}</p>
            </div>
        </div>
    );
};

export default UserProfile;