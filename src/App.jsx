// import { createContext, useContext, useState } from "react";

import Mainpage from "./messege work/mainpage";

// import {  Routes,Route } from "react-router-dom";
// import Alltodo from "./Todo";
// import Done from "./done";
// import Form from "./form";
// import { createContext, useReducer } from "react";
// import Addinfo from "./addinfo";
// import Allinfo from "./Allinfo";


// export const todoContext = createContext()
// export const usecontextforallinfo= createContext()
export default function App(){
//   const [value,setvalue] = useState(false);
//   const [list,setlist]= useState([]);
// function functio(value,setvalue){
//   return(
//     value = setvalue.payload
//   )
  
    // if(setvalue.type==="Shikeba"){
    //   return(
    //     value = setvalue.payload
    //   )
    // }else if(setvalue.type==="Samira"){
    //   return(
    //     value = setvalue.payload
    //   )
    // }
  
// }
// const [value,setvalue] = useReducer(functio,"")
   
 
//  console.log(list)
  return(
    <>
    <div className=" w-full h-full bg-stone-200">

    <Mainpage/>
    </div>

    
    </>
// {/* <usecontextforallinfo.Provider value={{value:value,setvalue:setvalue}}>
//   <Allinfo/>
// </usecontextforallinfo.Provider> */}
  //   <todoContext.Provider value={{value:value,
  //   setvalue:setvalue, 
  //   list: list,
  //   setlist:setlist}} >
  // <Routes>
  //   <Route path="/" element={<Alltodo/>}/>
  //   <Route path="/Done" element={<Done/>}/>
  //   <Route path="/form" element={<Form/>}/>
  // </Routes>
  // </todoContext.Provider>
    
  )
  
}