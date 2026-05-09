import { useContext } from "react"
import { Link } from "react-router-dom"
import { todoContext } from "./App"


export default function Navbar({value,setvalue}){
  const allinfo=  useContext(todoContext);
  
    return(
        <>
        <div className="flex justify-between w-full h-fit p-5 bg-linear-90 from-red-200 via-red-50 to-lime-300 shadow-2xl shadow-red-400">
            <h1 className="text-3xl font-bold bg-linear-90 from-lime-400 via-red-400 to-lime-400 h-fit w-fit text-transparent bg-clip-text">Todo App</h1>
            <div className="flex gap-3">
                <button   className="h-fit w-fit p-4 border-2 font-bold bg-linear-90 from-red-200 via-lime-200 to-red-200 text-white hover:text-red-300 hover:shadow-2xl hover:shadow-red-400"><Link to="/done">Done page</Link> </button>
                
                {/* not done */}
                <button className="h-fit w-fit p-4 border-2 font-bold bg-linear-90 from-red-200 via-lime-200 to-red-200 text-white hover:text-red-300 hover:shadow-2xl hover:shadow-red-400"><Link to='/'>Not done</Link></button>
            <button onClick={()=>{
                allinfo.setvalue(!allinfo.value) }} className="h-fit w-fit p-4 border-2 font-bold bg-linear-90 from-red-200 via-lime-200 to-red-200 text-white hover:text-red-300 hover:shadow-2xl hover:shadow-red-400"> {allinfo.value? "Hide Form":"Show Form"}</button>
        </div>
        </div>
        </>
    )
}