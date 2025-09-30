import bangladesh from "../assets/bangladeshLogo.png";

const Footer = () => {
  return (
    <div className="bg-neutral-700 p-10 flex  bottom-0 justify-center w-full">
        <div className="container text-white">
            <div className=" w-full justify-center flex-col flex items-center  ">
                <p className="flex items-center flex-wrap text-center justify-center gap-1.5">
                    বাস্তবায়নে:&nbsp;
                    <img src={bangladesh} alt="" className="h-10 w-10 " />
                    উপজেলা প্রশাসন, কিশোরগঞ্জ সদর, কিশোরগঞ্জ।   কারিগরি সহায়তায়:&nbsp;
                    আই প্লাস ডাটা লিমিটেড ও কাইট আইটি।
                </p>
                <ul className="text-neutral-500 flex flex-wrap justify-center items-center gap-1.5 text-sm text-center">
                    <a href="#" className="text-neutral-300 hover:text-sky-500">আমাদের সম্পর্কে </a>||
                    <a href="#" className="text-neutral-300 hover:text-sky-500"> বিধি ও শর্তাবলী </a>||
                    <a href="#" className="text-neutral-300 hover:text-sky-500"> গোপনীয়তার নীতিমালা</a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer