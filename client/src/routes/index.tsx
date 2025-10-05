import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";



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
    }
])


export default router;