import { useState } from "react";
import { nav_items } from "../../config";
import { Link } from "react-router";


function AdminSidebar() {
    const [activeSidebar, setActiveSidebar] = useState(false);
  return (
     <div className={`${!activeSidebar ? "translate-x-0" : "-translate-x-60"} min-w-60  items-center flex transition-transform duration-500   justify-center gap-5`}>
                <ul className="bg-neutral-700 min-h-screen w-full">
                    {nav_items.map((item,index)=>{
                        const Icon = item.icon;
                        return(
                            <Link to={item.path} key={index}
                            className="flex w-full gap-3 items-center hover:bg-neutral-600 justify-start border-b-[1px] border-neutral-600
                            transition-colors duration-250 text-neutral-300 px-10 py-5"
                            >
                            <Icon className=""/>
                            <span className="text-sm">{item.label} </span>
                            </Link>
                        )
                    })}
                </ul>
            </div>
  )
}

export default AdminSidebar
