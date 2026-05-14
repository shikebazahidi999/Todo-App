import { CheckCheckIcon, CircleOffIcon, Download, Edit2Icon, Send } from "lucide-react"
import { informations } from "../assets/HomeWork/AllDetails"
import { useRef, useState } from "react";

export default function Shomessege(){
   const infos= informations;
  const date= new Date().toDateString();
   let [value,setvalue] = useState([ ]);
   let [inputvalue,setinputvalue] = useState("")
   let uderef = useRef(null);
   function addwork(){
    setvalue((ex)=> [...ex , inputvalue ])
    setinputvalue("")
    uderef.current.focus()}
    return(
        <>
        <div className=" h-fit w-fit ">
            {/* navbar div of the show messege started */}
         <div className="  fixed left-123 bg-white border border-gray-200  w-full py-1 px-8 h-fit">
            <div>
                <img className="h-16 w-16 rounded-full" src={infos[0].img} alt="" />
                <h1>{infos[0].name}</h1>
            </div>
        </div>  
        <div className=" bg-stone-100 h-fit w-260 ml-119 float-right mr-0 mt-22 p-10  ">
             {/* info of the person you chat div */}
            <div className="flex flex-col items-center justify-center text-stone-600">
                <img className="h-25 w-25 rounded-full " src={infos[0].img} alt="" />
                <h1>{infos[0].name}</h1>
                <h1>joined at 4/12/2025</h1>
                <h1>you have saved this number</h1>
               
                <div className="flex gap-4">
                    <button className="h-15  w-15 p-2 bg-stone-200 rounded-md hover:bg-stone-300 border-green-300 border">Edite<  Edit2Icon/></button>
                    <button className="h-15  w-15 p-2 bg-stone-200 rounded-md hover:bg-stone-300 border border-red-300">Block<  CircleOffIcon/></button>
                    <button className="h-15  w-15 p-2 bg-stone-200 rounded-md hover:bg-stone-300 border border-red-300">Report< Download/></button>
                </div>
            </div>

    <div className="p-5 flex flex-col w-1/1 gap-2 ">
        {/* the person's chat */}
          <div className=" flex flex-col float-left max-w-100">
            <h1 className="h-fit w-fit py-2 px-4 bg-green-200 rounded-2xl text-stone-500">{infos[0].name}<h1 className="text-black">hello M.SS  wish to have agreat time ihave messeged for our group project </h1><h1 className="text-[10px] text-right ">{date}</h1></h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/*  mychat */}
          <div className="flex flex-col items-end ">
             <h1 className="h-fit w-fit py-2 px-4 bg-green-200 rounded-2xl text-stone-500">you<h1 className="text-black">hello dear freind i hope you hav starded a greate dat<h1 className="text-[10px] text-right text-stone-500">{date}<CheckCheckIcon/></h1></h1></h1>
          </div>
          <div className="flex flex-col items-end gap-2">
          {value.map((items,index)=>(
                    <h1 key={index} className="h-fit w-fit py-2 px-4 bg-green-200 rounded-2xl text-stone-500">you <h1>{items}<h1 className="text-[10px] text-right text-stone-500">{date}<CheckCheckIcon/></h1></h1></h1>
                ))}
</div>
    </div>
    <div className="fixed bottom-0 right-0 w-257 bg-white h-fit p-4 rounded-3xl flex gap-2 ">
        <input className="h-fit w-full focus:outline-stone-200 p-3  rounded-3xl" type="text" placeholder="Send New messege" />
        <button onClick={addwork} className="bg-green-600 h-fit w-fit p-3 rounded-full text-gray-100 hover:bg-green-500"><Send/></button>
    </div>
        </div> 
        </div>
        </>
    )
}