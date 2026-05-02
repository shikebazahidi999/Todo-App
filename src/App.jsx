import { useState } from "react";
import Form from "./form";
import Navbar from "./Navbar";
import Showtodo from "./showtodo";
import Looplist from "./loopforlist";

export default function App(){
  const [value,setvalue] = useState(false);
  const [list,setlist]= useState([]);
  setlist
 
 console.log(list)
  return(
    
    <div className=" h-screen fixed w-full bg-linear-30 from-lime-200 via-lime-100 to-red-100">
    <Navbar value={value} setvalue={setvalue}/>
    <Form value={value} setlist={setlist} list={list} setvalue={setvalue} />
    <Looplist list={list} setlist={setlist}/>
    <br
    </div>
    
  )
  
}