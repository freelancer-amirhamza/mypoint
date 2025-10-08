
import { LuSquareMenu } from "react-icons/lu"
import bg_image from "../../assets/favicn-man.png"
import avatar from "../../assets/favicn-man.png"

import { RiArrowDropDownFill} from "react-icons/ri"
const AdminHeader = ({setActiveSidebar,activeSidebar}) => {

  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-between shadow-md">
      <div className="bg-secondary relative lg:max-w-60 flex items-center w-full py-10 px-5 gap-2 lg:justify-center h-14">
        <img src={bg_image} className="object-scale-down h-8 " alt="" />
        <h1 className="text-xl font-semibold text-white">সার্ভিস পয়েন্ট</h1>
        <div className="absolute sm:-right-4 right-4 text-amber-500 cursor-pointer text-4xl"
        onClick={()=>setActiveSidebar(!activeSidebar)}
        >
        <LuSquareMenu />
      </div>
      </div>
      <div className="flex py-5 flex-row-reverse gap-x-5 sm:items-center items-end mx-4 gap-0.5">
        <div className=" bg-neutral-300 flex items-center justify-center  rounded-full">
          <img src={avatar} className="object-scale-down h-10 p-0.5  w-10 rounded-full" alt="" />
          <h1 className="text-base text-neutral-700">Lorem ipsum dolor sit amet.</h1>
          <RiArrowDropDownFill size={20}/>
        </div>
        <span className="bg-yellow-500 text-base text-white font-semibold rounded-full p-0.5">বর্তমান পয়েন্ট: 160.30</span>
      </div>
    </div>
  )
}

export default AdminHeader