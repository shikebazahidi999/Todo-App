import { createContext, useContext, useState } from "react";

import {  Routes,Route } from "react-router-dom";
import Alltodo from "./Todo";
import Done from "./done";
import Form from "./form";


export const todoContext = createContext()
export default function App(){
  const [value,setvalue] = useState(false);
  const [list,setlist]= useState([]);
   
 
 console.log(list)
  return(
    <todoContext.Provider value={{value:value,
    setvalue:setvalue, 
    list: list,
    setlist:setlist}} >
  <Routes>
    <Route path="/" element={<Alltodo/>}/>
    <Route path="/Done" element={<Done/>}/>
    <Route path="/form" element={<Form/>}/>
  </Routes>
  </todoContext.Provider>
    
  )
  
}