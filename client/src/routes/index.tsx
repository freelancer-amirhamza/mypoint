import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../admin/pages/Dashboard";
import AdminHome from "../admin/pages/AdminHome";



const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard/>,
        children:[
            {
                path:"",
                element:<AdminHome/>
            }
        ]
    }
])


export default router;