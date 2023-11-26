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

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },

    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            // Admin Routes 
            {
                path:'allusers',
                element:<Allusers></Allusers>
            },
          

            // Organizer Only 
            {
                path:'organizer-profile',
                element:<OrganizerProfile></OrganizerProfile>
            },
            {
                path:'add-a-camp',
                element:<AddCamps></AddCamps>
            },
            {
                path:'manage-camps',
                element:<ManageCamps></ManageCamps>
            }
        ]
    }


])