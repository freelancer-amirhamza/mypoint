
import bg_image from "../../assets/favicn-man.png"

const AdminHeader = () => {
  return (
    <div className="flex w-full">
      <div className="bg-secondary lg:max-w-60 flex items-center w-full py-10 px-5 gap-2 lg:justify-center h-14">
        <img src={bg_image} className="object-scale-down h-8 " alt="" />
        <h1 className="text-xl font-semibold text-white">সার্ভিস পয়েন্ট</h1>
      </div>
    </div>
  )
}

export default AdminHeader