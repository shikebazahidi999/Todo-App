import { useState } from "react"

export default function Form({value,setlist,list,setvalue}){
    const [todo,settodo] = useState("");
    // the all information of the todo
    const todos = {
        text : todo,
        timadded: new Date().toLocaleTimeString(),
        haveDone: false,
        id: new Date()
    }
    // the function of a button to add the todos
   function Click(){
    settodo("")
    if(todo.trim().length>0){
        
    setlist((ex)=>[...ex,todos])
     setvalue(false);
    }
   }
   if(value){
    return(
        <>
        <div className="h-full w-full flex  justify-center items-center ">
        <div className=" bg-white rounded-2xl w-1/2 h-fit border-2 shadow-2xl shadow-red-400  border-lime-300 p-7 flex flex-col gap-5 my-50 items-center">
            <h1 className="text-3xl font-bold bg-linear-90 from-lime-400 via-red-400 to-lime-400 h-fit w-fit text-transparent bg-clip-text">Add Todo</h1>
            <input value={todo} onChange={(event)=> settodo(event.target.value)} className="w-full h-fit p-2 border-2 focus:outline-red-400 border-red-300" type="text" placeholder="Whrite every thing is in your mind todo"/>
            <button onClick={Click} className="bg-linear-90 from-lime-200 via-red-200 to-lime-200 w-full p-2 text-lime-600 font-bold hover:bg-none hover:border-2 hover:border-red-300 ">Add to list</button>
        </div>
        </div>
        
        </>
    )
}
}