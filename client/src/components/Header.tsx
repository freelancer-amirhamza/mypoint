
import { GrMenu } from "react-icons/gr";
import bangladesh from "../assets/bangladeshLogo.png";
import logo from "../assets/logo_blue_.png";
import { nav_items } from "../config";
import { Link } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";


const Header = () => {
    const [activeSidebar, setActiveSidebar] =  useState(false)
    const preventVariants = {
        initial:{},
        hover:{}
    };
    const childVariants = {
        initial:{width:0},
        hover:{width:"100%", transition:{duration:0.5}}
    }
  return (
    <div className="flex items-center relative  w-full bg-white z-50 justify-center  shadow-lg">
        <div className="container flex items-center justify-between h-full  w-full ">
            {/* logo  */}
            <Link to={"/"} className="flex items-center  min-w-fit py-2 ">
                <img src={bangladesh} alt="" className="h-16 w-16 " />
                <img src={logo} alt="" className="h-16 object-cover " />
            </Link>

            {/* nav items for large device */}
            <div className={`  items-center md:flex transition-transform duration-500 hidden w-full
            justify-center `}>
                <ul className="items-center justify-end w-full gap-5 flex ">
                    {nav_items.map((item,index)=>{
                        return(
                            <Link to={item.path} key={index}
                            className="flex   items-center first:bg-primary first:text-white first:px-2 last:text-orange-600 font-semibold py-1 rounded justify-center
                            transition-colors duration-250 text-neutral-700 "
                            >
                                <motion.div
                                variants={preventVariants}
                                initial="initial"
                                whileHover="hover"
                                style={{ cursor: "pointer" }}
                                className="flex flex-col w-fit mx-auto gap-2">
                                    <span className="text-base"> {item.label} </span>
                                    <motion.div
                                    variants={childVariants}
                                    className={`h-0.5   bg-primary ${index === 0 ? "hidden": ""}`}
                                    style={{width:0}}
                                    />
                                </motion.div>
                            </Link>
                        )
                    })}
                </ul>
            </div>
            {/* mobile menu bar */}
            <button onClick={()=>setActiveSidebar(!activeSidebar)} className=" w-fit bg-primary hover:bg-teal-500 cursor-pointer flex md:hidden rounded p-3">
                <GrMenu className="text-white text-4xl  "/>
            </button>
        </div>
        {/* nav items for small device */}
            <div className={`${activeSidebar ? "translate-x-0" : "-translate-x-54"} absolute top-20 left-0 md:hidden items-center flex transition-transform duration-500   justify-center gap-5`}>
                <ul className="bg-neutral-700 min-h-screen ">
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
    </div>
  )
}

export default Header