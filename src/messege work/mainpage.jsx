import Navbar from "../navbar";


import Messege from "./messegpage";
import Shomessege from "./showmessege";
export default function Mainpage(){
    
    return(
        <>
        <div className=" w-full flex flex-row absolute right-0 ">
            <Navbar/>
           <Messege/>
           <Shomessege/>
           
        </div>
        </>
    )
}