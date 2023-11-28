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

            // User Only 
            {
                path: 'registered-camps/:email',
                element: <RegisteredCamps></RegisteredCamps>,
                // loader: ({ params }) => fetch(`http://localhost:5000/registered-camps/${params.email}`)
            },



            // Admin Routes 
            {
                path: 'allusers',
                element: <Allusers></Allusers>
            },


            // Organizer Only 
            {
                path: 'organizer-profile',
                element: <OrganizerProfile></OrganizerProfile>
            },
            {
                path: 'add-a-camp',
                element: <AddCamps></AddCamps>
            },
            {
                path: 'manage-camps',
                element: <ManageCamps></ManageCamps>
            },
            {
                path: 'updatecamps/:id',
                element: <UpdateCamps></UpdateCamps>,
                loader: ({ params }) => fetch(`http://localhost:5000/update-camp/${params.id}`)
            },
            {
                path: 'manage-registered-camps',
                element: <ManageRegisterCamp></ManageRegisterCamp>
            }
        ]
    }


])