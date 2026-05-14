import { CircleArrowDownIcon, MessageSquarePlus, MessageSquarePlusIcon, MoreVerticalIcon, SearchIcon } from "lucide-react";
import { informations } from "../assets/HomeWork/AllDetails";
export default function Messege(){
    let allinfo = informations;
    const date = new Date().toLocaleTimeString()
    return(
        <>
         
                <div class=" w-[27.2%] h-screen overflow-y-scroll noScroll rounded-tl-xl border-2 border-gray-200 ml-20 bg-white p-4 fixed top-0">
                    {/* navbar div started */}
                    <div className="p-3 fixed w-1/4 bg-white top-0 flex flex-col gap-2 border-b border-green-100">
                        {/* chat text div started */}
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-medium text-stone-800">Chats</h1>
                            <div className="flex gap-2">
                                <button className="transition-all duration-200 text-center p-2 rounded-full hover:bg-stone-100/80 font-thin text-xl w-fit text-stone-600 "><MessageSquarePlus size={30}/></button>
                                <button className="transition-all duration-200 text-center p-2 rounded-full hover:bg-stone-100/80 font-thin text-xl w-fit text-stone-600 "><MoreVerticalIcon  size={30}/></button>
                            </div>
                        </div>
                        {/* input div statred */}
                        <div>
                            <SearchIcon className="fixed left-32 top-20 text-stone-600"/>
                            <input className="w-full text-center bg-stone-100 text-xl p-3.5 rounded-4xl focus:outline-green-900" type="text" placeholder="Search or start a new chat" />
                        </div>
                        {/* the options div like read unred groups */}
                        <div className="flex gap-3">
                            <button className="h-fit w-fit p-1 text-xl px-3 text-stone-500 hover:bg-stone-100 transition-all duration-200 border rounded-4xl">All</button>
                            <button className="h-fit w-fit p-1 text-xl px-3 text-stone-500 hover:bg-stone-100 transition-all duration-200 border rounded-4xl">Unread</button>
                            <button className="h-fit w-fit p-1 text-xl px-3 text-stone-500 hover:bg-stone-100 transition-all duration-200 border rounded-4xl">Favorites</button>
                            <button className="h-fit w-fit p-1 text-xl px-3 text-stone-500 hover:bg-stone-100 transition-all duration-200 border rounded-4xl rotate-180">^</button>
                        </div>

                    </div>
                    {/* nabar div ended */}
 
             <div className="flex flex-col gap-2  mt-50">
                {
                    allinfo.map((items)=>(
                        <div className="flex  justify-between hover:border-2 border-stone-300 p-3 transition-all duration-200 rounded-md hover:bg-stone-100" key={items.name}>
                            <div className="flex gap-4">
                            <img className="h-16 w-16 rounded-full " src={items.img} alt="" />
                            <div className="  ">
                            <h1 className="w-fit h-fit text-left text-xl">{items.name}</h1>
                            <h1 className="text-stone-500">{items.fathername}</h1>
                            </div>
                            </div>
                            <h1>{date}</h1>
                        </div>
                    ))
                }
                </div>
                </div>

            
        </>

)}