import { Outlet } from "react-router"
import AdminHeader from "../components/AdminHeader"
import AdminSidebar from "../components/AdminSidebar"
import { useState } from "react"


const Dashboard = () => {
  const [activeSidebar,setActiveSidebar] = useState(true)

  return (
    <div className="">
        <AdminHeader activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar}/>
        <div className="flex relative w-full ">
            <AdminSidebar activeSidebar={activeSidebar} />
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard