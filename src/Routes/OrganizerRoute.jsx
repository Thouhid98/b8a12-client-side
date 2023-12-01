import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useOrganizer from "../hooks/useOrganizer";
import { Navigate, useLocation } from "react-router-dom";

const OrganizerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const [isOrganizer, isOrganizerLoading] = useOrganizer();

    const location = useLocation();

    if(loading || isOrganizerLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user && isOrganizer){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>;
};

export default OrganizerRoute;