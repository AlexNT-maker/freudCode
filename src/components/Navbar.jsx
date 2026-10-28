import { useState } from "react"
import logo from '../icon/logo.svg'
import home from "../icon/home.svg"
import dreams from "../icon/dreams.svg"
import user from "../icon/user.svg"
import bookmark from "../icon/bookmark.svg"

export default function Navbar(){
const [navbuttons, setNavbuttons] = useState([
    { id:1, label: `Home`, icon: home },
    { id:2, label:"Dreams", icon: dreams },
    {id:3, label:'Logs', icon: bookmark},
])

const [activeId, setActiveId] = useState(1)


    return(
            <nav className="flex flex-row bg-indigo-500/90
             w-full w-full justify-between items-center sticky top-0 z-1000 w-full h-18 pr-4 pl-4
             backdrop-blur-lg border-b border-white/20">
                <img className="h-12 w-auto text-white" alt="logo" src={logo} />
            <ul className=" flex flex-row justify-between gap-8">{navbuttons.map(button =>
                <li key={button.id} className="h-fit w-fit">
                   <button 
    onClick={() => setActiveId(button.id)} 
    className={`rounded text-[#F5F1F8] font-medium drop-shadow-md shadow-sm transition-colors duration-200 hover:text-indigo-200
         cursor-pointer flex flex-row gap-2 text-center items-center ${
        activeId === button.id 
        ? "text-white font-bold" 
        : "text-[#F5F1F8]/80 font-medium hover:text-indigo-200"
                    }`}>
                  {button.icon && <img src={button.icon} alt={button.label}
                   className="w-5 h-5"/>}
                   {button.label}</button>
                </li>
            )}</ul>
            <button className="w-xsm rounded-md bg-indigo-600/80 px-4 py-2.5 text-sm font-semibold 
            text-white shadow-sm transition-colors duration-200 hover:bg-indigo-500 backdrop-blur-lg
             focus-visible:outline focus-visible:outline-2 
             focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer flex flex-row gap-2 items-center pl-2">
                <img src={user}className="h-6 w-6"/>Sign In</button>
            </nav>
    )
}