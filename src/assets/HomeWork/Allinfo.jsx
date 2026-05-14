import { useContext } from "react";
import { informations } from "./assets/HomeWork/AllDetails"
import { usecontextforallinfo } from "./App";
import { Trash, Type } from "lucide-react";
export default function Allinfo(){
    const information = informations;
    const useContextforc = useContext(usecontextforallinfo)
    
    return(
       <>
       <div className="h-full w-full bg-linear-60 from-sky-300 via-sky-200 to-lime-300">
        <div className="grid grid-cols-4 h-full w-full p-3 gap-2">
          {
            information.map((items)=>(
                <div key={items.id} className="h-fit w-85 p-5 border-2 border-lime-500 rounded-2xl  hover:shadow-2xl hover:shadow-lime-400">
                  <img className="h-75 w-98 rounded-full" src={items.img} alt="" />
                    <h1 className="flex "><h1 className=" cursive text-xl font-bold  text-lime-500 shadow text-shadow-2xl text-shadow-lime-900">Name:</h1> {items.name}</h1>
                    <h1 className="flex "><h1 className=" cursive text-xl font-bold  text-lime-500 shadow text-shadow-2xl text-shadow-lime-900">Father Name:</h1> {items.fathername}</h1>
                    <h1 className="flex "><h1 className=" cursive text-xl font-bold  text-lime-500 shadow text-shadow-2xl text-shadow-lime-900">Last Name</h1> {items.lastname}</h1>
                    <h1 className="flex "><h1 className=" cursive text-xl font-bold  text-lime-500 shadow text-shadow-2xl text-shadow-lime-900">Calss:</h1> {items.class}</h1>
                    <h1 className="flex "><h1 className=" cursive text-xl font-bold  text-lime-500 shadow text-shadow-2xl text-shadow-lime-900">Job:</h1> {items.job}</h1>
                    <h1 className="cursive text-2xl font-bold text-lime-500  shadow-2xl shadow-lime-900" >Comments:</h1>
                    <h1 className="h-fit  border-2 border-lime-500 p-4 w-full">{useContextforc.value} </h1>
                    <input onChange={(event)=>useContextforc.setvalue({type:information.type,payload: event.target.value})} className="border-2 border-lime-500 focus:outline-lime-600  w-full focus:border-none my-2" type="text" placeholder="leave a Comment"/>
                  

                </div>
            ))
          }
        </div>
       </div>
       </>

    )
}