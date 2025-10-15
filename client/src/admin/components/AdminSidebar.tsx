
import { Link } from "react-router";
import { admin_nav_items } from "../../config";


function AdminSidebar({activeSidebar}) {

  return (
     <div className={`    flex    justify-center gap-5 bg-neutral-300`}>
                <ul className={` ${activeSidebar ? "translate-x-0 min-w-60 " : "-translate-x-60  max-w-0"} transition-all duration-500 bg-neutral-700 min-h-screen w-full`}>
                    {admin_nav_items.map((item,index)=>{
                        const Icon = item.icon;
                        return(
                            <Link to={item.path} key={index}
                            className="flex w-full gap-3 max-w-60 mx-auto px-3 items-center hover:bg-neutral-600 justify-start border-b-[1px] border-neutral-600
                            transition-colors duration-250 text-neutral-300  py-5"
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
