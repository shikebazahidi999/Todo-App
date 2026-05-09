import { useContext } from "react";
import Navbar from "./Navbar";
import { todoContext } from "./App";
import { CheckCircle, Trash } from "lucide-react";

export default function Done(){
    const allinfo = useContext(todoContext);
  const filteredlist=  allinfo.list.filter((x)=> x.haveDone == true);
    function checkbtn(id){
        allinfo.setlist((prev)=>
             prev.map((cheked)=> (cheked.id==id ? { ...cheked, haveDone: !cheked.haveDone}:cheked)))
    }
    function trash(id){
       allinfo.setlist((lastvalue)=>lastvalue.filter((items)=>items.id!=id))
    }
   return(
    <>
     <Navbar value ={allinfo.value} setvalue={allinfo.setvalue} list={allinfo.list} setlist={allinfo.setlist}/>

     <div className="flex
      flex-col gap-5 p-8">
        {filteredlist.map((y)=>(
            <div className="flex flex-col  w-full h-full items-center">
                 <div className={`border-2 border-lime-400 border-dotted rounded-2xl h-fit  w-1/2 p-4 shadow-2xl shadow-red-400 flex justify-between ${y.haveDone? "bg-lime-200":"bg-white"}`}>
            <div className="w-fit">
                <h1  className= {` text-2xl  bg-clip-text w-fit h-fit ${y.haveDone? "text-red-400":" bg-linear-30 from-lime-400 via-lime-300 to-red-400 text-transparent "} `} >{y.text}</h1>
                <h1 className="text-red-300 w-fit">{y.timadded}</h1>
            </div>
           <div className="flex flex-col justify-between">
            {/* trash button */}
            <button onClick={()=>trash(y.id)}><Trash className="text-red-500 "/></button>
            {/* check button  */}
            <button className={y.haveDone? "text-lime-500":"text-black"} onClick={()=>checkbtn(y.id)}><CheckCircle  /></button>
            </div>
            </div>
            </div>
        ))}
     </div>
    
    </>
   )
}