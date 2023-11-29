import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useProfessionals = () => {
    const {user, loading }= useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const {data: isProfessionals, isPending: isProfessionalsLoading } = useQuery({
        queryKey: [user?.email, 'isProfessionals'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/professionals/${user.email}`)
            console.log(res.data);
            return res.data?.professionals;
        }
    })
    return [isProfessionals, isProfessionalsLoading]
};

export default useProfessionals;