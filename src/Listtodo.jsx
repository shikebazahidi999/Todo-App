import { CheckCircle, Trash } from "lucide-react";
import { useContext, useRef } from "react";
import { todoContext } from "./App";

export default function Listtodo({todo,list,setlist}){
   const allinfo = useContext(todoContext)

    function checkbtn(id){
        setlist((prev)=>
             prev.map((cheked)=> (cheked.id==id ? { ...cheked, haveDone: !cheked.haveDone}:cheked)))
    }
    function trash(id){
        setlist((lastvalue)=>lastvalue.filter((items)=>items.id!=id))
    }
   
    return(
        <>
        <div className="h-full w-full flex flex-col items-center justify-center   p-10">
            <div className={`border-2 border-lime-400 border-dotted rounded-2xl h-fit  w-1/2 p-4 shadow-2xl shadow-red-400 flex justify-between ${todo.haveDone? "bg-lime-200":"bg-white"}`}>
            <div className="w-fit">
                <h1  className= {` text-2xl  bg-clip-text w-fit h-fit ${todo.haveDone? "text-red-400":" bg-linear-30 from-lime-400 via-lime-300 to-red-400 text-transparent "} `} >{todo.text}</h1>
                <h1 className="text-red-300 w-fit">{todo.timadded}</h1>
            </div>
           <div className="flex flex-col justify-between">
            {/* trash button */}
            <button onClick={()=>trash(todo.id)}><Trash className="text-red-500 "/></button>
            {/* check button  */}
            <button className={todo.haveDone? "text-lime-500":"text-black"} onClick={()=>checkbtn(todo.id)}><CheckCircle  /></button>
            </div>
            </div>
        </div>
        <div className=" fixed bottom-0 left-0 w-full border-2 border-lime-400 border-dotted rounded-2xl h-fit bg-linear-30 from-red-200 via-lime-100 to-lime-200  p-4 shadow-2xl shadow-red-400 flex justify-between">
            <h1 className=" bg-linear-30 from-lime-500 via-lime-400 to-red-500 text-transparent bg-clip-text text-3xl">Total</h1>
            <h1 className="text-3xl font-serif">{list.length}</h1>
        </div>
        </>
    )
}