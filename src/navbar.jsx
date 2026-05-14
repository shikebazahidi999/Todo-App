import { FileEditIcon, LucideCircleFadingPlus, LucideMessageCircleMore, LucideMessageSquareText, LucideUsers, PanelsRightBottom, PhoneIcon, UserCircle2 } from "lucide-react";
import { informations } from "./assets/HomeWork/AllDetails"
export default function Navbar(){
    let allinfo = informations;
    return(
        <>
        <div className="w-fit h-screen p-2  grid grid-row gap-6 fixed top-0 left-0 bg-stone-100 px-5  ">
           <div className="flex flex-col">
            <button className=" transition-all duration-200 text-center p-2 rounded-full hover:bg-stone-200/80 font-thin text-xl text-stone-600 w-fit ">< LucideMessageSquareText size={30}/></button>
            <button className=" transition-all duration-200 text-center p-2 rounded-full hover:bg-stone-200/80 font-thin text-xl w-fit text-stone-600 ">< PhoneIcon size={30}/></button>
            <button className=" transition-all duration-200 text-center p-2 rounded-full hover:bg-stone-200/80 font-thin text-xl w-fit text-stone-600 ">< LucideCircleFadingPlus size={30}/></button>
            <button className=" transition-all duration-200 text-center p-2 rounded-full hover:bg-stone-200/80 font-thin text-xl w-fit text-stone-600 ">< LucideMessageCircleMore size={30}/></button>
            <button className=" transition-all duration-200 text-center p-2 rounded-full hover:bg-stone-200/80 font-thin text-xl w-fit text-stone-600 ">< LucideUsers size={30}/></button>

            {/* div sedound */}
           <div className="flex flex-col gap-3 fixed bottom-0 left-0 ">
            <button className=" transition-all duration-200 text-center p-2 rounded-full text-stone-600 hover:bg-stone-100 font-thin text-xl w-fit "><FileEditIcon size={30}/></button>
            <button className=" transition-all duration-200 text-center p-2 rounded-full hover:bg-stone-100/80 text-stone-600 font-thin text-xl w-fit "><PanelsRightBottom size={30}/></button>
            <br />
            <button className=" transition-all duration-200 text-center p-2 rounded-full text-stone-600/80 hover:bg-stone-100/80 font-thin text-xl w-fit "><UserCircle2 size={30}/></button>
           </div>
            </div>
            
        </div>
        </>
    )
}