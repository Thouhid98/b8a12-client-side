import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useOrganizer = () => {
    const {user, loading }= useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const {data: isOrganizer, isPending: isOrganizerLoading } = useQuery({
        queryKey: [user?.email, 'isOrganizer'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/organizer/${user.email}`)
            console.log(res.data);
            return res.data?.organizer;
        }
    })
    return [isOrganizer, isOrganizerLoading]
};

export default useOrganizer;