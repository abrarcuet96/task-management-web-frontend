import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../layouts/Dashboard/Dashboard";
import UserHome from "../pages/DashboardPages/UserHome/UserHome";
import AddTask from "../pages/DashboardPages/AddTask/AddTask";
import ToDo from "../pages/DashboardPages/ToDo/ToDo";

export const myCreatedRoutes= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
    {
        path:'login',
        element: <Login></Login>
    },
    {
        path:'register',
        element: <Register></Register>
    },
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'userHome',
                element: <UserHome></UserHome>
            },
            {
                path:'addTask',
                element: <AddTask></AddTask>
            },
            {
                path:'toDo',
                element: <ToDo></ToDo>
            },
        ]
    }
])
export default myCreatedRoutes;