import { useContext } from "react";
import Listtodo from "./listtodo";
import { todoContext } from "./App";

export default function Looplist({list,setlist}){
   const allinfo= useContext(todoContext)
   const filteredlist= allinfo.list.filter((y)=> y.haveDone===false)
    return(
        <>
        {
                 filteredlist.map((todo)=>(
                <div key={todo.id}>

                < Listtodo todo={todo} list={allinfo.list} setlist={allinfo.setlist}/>
                
                </div>
            ))
        }
        </>
    )
}