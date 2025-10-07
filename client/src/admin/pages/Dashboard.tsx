import { Outlet } from "react-router"
import AdminHeader from "../components/AdminHeader"
import AdminSidebar from "../components/AdminSidebar"


const Dashboard = () => {
  return (
    <div className="">
        <AdminHeader/>
        <div className="flex relative w-full ">
            <AdminSidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard