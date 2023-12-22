import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Login/Home/Home";

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
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    },
])
export default myCreatedRoutes;