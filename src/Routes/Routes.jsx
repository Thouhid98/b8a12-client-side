import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import OrganizerProfile from "../pages/Dashboard/Organizer/OrganizerProfile";
import AddCamps from "../pages/Dashboard/Organizer/AddCamps";
import ManageCamps from "../pages/Dashboard/Organizer/ManageCamps";
import Allusers from "../pages/Dashboard/Admin/Allusers";
import UpdateCamps from "../pages/Dashboard/Organizer/UpdateCamps";
import CampDetails from "../pages/Home/PopularCamps/CampDetails/CampDetails";
import ManageRegisterCamp from "../pages/Dashboard/Organizer/ManageRegisterCamp";
import RegisteredCamps from "../pages/Dashboard/User/RegisteredCamps";
import UserProfile from "../pages/Dashboard/User/UserProfile";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ProfessionalsProfile from "../pages/Dashboard/Professionals/ProfessionalsProfile";
import ContactUs from "../pages/ContactUs/ContactUs";
import UserReview from "../pages/Dashboard/User/UserReview";
import Allreviews from "../pages/Dashboard/User/Allreviews";
import ProfileUpdate from "../pages/Dashboard/User/ProfileUpdate";
import UpdateOrganizerProfile from "../pages/Dashboard/Organizer/UpdateOrganizerProfile";
import UpdateProfessionalsProfile from "../pages/Dashboard/Professionals/UpdateProfessionalsProfile";
import AdminRoute from "./AdminRoute";
import OrganizerRoute from "./OrganizerRoute";
import ProfessionalsRoute from "./ProfessionalsRoute";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "../pages/Dashboard/Payment/Payment";
import CheckoutForm from '../pages/Dashboard/Payment/CheckoutForm';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/contact-us',
                element:<ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/camp-details/:id',
                element: <CampDetails></CampDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/camp-details/${params.id}`)
            }
        ]
    },

    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [

            // User Routes 
            {
                path:'user-profile',
                element:<PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            },
            {
                path:'userupdate-profile/:email',
                element:<PrivateRoutes><ProfileUpdate></ProfileUpdate></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/updateuser-profile/${params.email}`)

            },
            {
                path:'participant-profile/:email',
                element:<PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            },

            {
                path:'ratings/:id',
                element:<PrivateRoutes><UserReview></UserReview></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/feedback/${params.id}`)
            },
            {
                path:'reviews',
                element:<PrivateRoutes><Allreviews></Allreviews></PrivateRoutes>
            },

            {
                path: 'registered-camps/:email',
                element: <PrivateRoutes><RegisteredCamps></RegisteredCamps></PrivateRoutes>,
                // loader: ({ params }) => fetch(`http://localhost:5000/registered-camps/${params.email}`)
            },

            {
                path:'payment',
                element:<Payment></Payment>
            },


            // Admin Routes 
            {
                path:'admin-profile',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },


            // Organizer Routes 
            {
                path: 'organizer-profile',
                element: <OrganizerRoute><OrganizerProfile></OrganizerProfile></OrganizerRoute>
            },
            {
                path:'organizerupdate-profile/:email',
                element:<OrganizerRoute><UpdateOrganizerProfile></UpdateOrganizerProfile></OrganizerRoute>
            },
            {
                path: 'add-a-camp',
                element: <OrganizerRoute><AddCamps></AddCamps></OrganizerRoute>
            },
            {
                path: 'manage-camps',
                element: <OrganizerRoute><ManageCamps></ManageCamps></OrganizerRoute>
            },
            {
                path: 'updatecamps/:id',
                element: <OrganizerRoute><UpdateCamps></UpdateCamps></OrganizerRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/update-camp/${params.id}`)
            },
            {
                path: 'manage-registered-camps',
                element: <OrganizerRoute><ManageRegisterCamp></ManageRegisterCamp></OrganizerRoute>
            },

            // Professionals Routes 
            {
                path:'professionals-profile',
                element:<ProfessionalsRoute><ProfessionalsProfile></ProfessionalsProfile></ProfessionalsRoute>
            },
            {
                path:'updateprofessional-profile/:email',
                element:<ProfessionalsRoute><UpdateProfessionalsProfile></UpdateProfessionalsProfile></ProfessionalsRoute>
            }

        ]
    }


])