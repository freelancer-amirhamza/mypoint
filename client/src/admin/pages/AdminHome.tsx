import { IoIosPeople } from "react-icons/io";
import { applicationInfo } from "../../config"
import { MdOutlineDocumentScanner } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";

const info = [
            {label:"নাগরিকের সংখ্যা", count:"১০",icon:IoIosPeople},
            {label:"আবেদনের সংখ্যা", count:"00",icon:MdOutlineDocumentScanner},
            {label:"অনুমোদিত সনদ", count:"00",icon:TbCertificate },
            {label:"বর্তমান ব্যালেন্স", count:"00",icon:FaSackDollar},
        ]
const AdminHome = () => {
  const bgClasses = ['bg-teal-400', 'bg-green-400', 'bg-purple-400', 'bg-orange-600'];


  return (
    <div className='w-full bg-neutral-300 flex'>
      <div className=" w-full flex flex-col">
        <div className="flex  flex-col md:flex-row  m-5 gap-3 w-full h-fit ">
          {info.map((item, index) => {
            const Icon = item?.icon;
            return (
              <div key={index} className="flex  items-center gap-3 w-full p-4 rounded bg-white ">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${bgClasses[index % bgClasses.length]} text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-neutral-500 ">{item.count}</h1>
                  <h1 className="text-neutral-500 ">{item.label}</h1>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-5 p-4  w-full">
          {applicationInfo.map((item,index)=>(
            <div key={index} className="flex flex-col w-full bg-white rounded p-3">
              <h1 className="text-2xl text-neutral-600 font-medium  m-4">{item.title} </h1>
              <ul className="grid gap-4">
                {item.info.map((itm,idx)=>(
                  <li key={idx} className={`${bgClasses[idx % bgClasses.length]} p-5 `} >
                    <h1 className="text-neutral-50 text-2xl ">{itm.count}</h1>
                  <h1 className="text-neutral-50 text-2xl ">{itm.label}</h1>
                  </li>
                ))}
              </ul>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default AdminHome