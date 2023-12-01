import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useProfessionals from "../hooks/useProfessionals";
import { Navigate, useLocation } from "react-router-dom";

const ProfessionalsRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const [isProfessionals, isProfessionalsLoading] = useProfessionals();

    const location = useLocation();

    if(loading || isProfessionalsLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user && isProfessionals){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>;
};

export default ProfessionalsRoute;