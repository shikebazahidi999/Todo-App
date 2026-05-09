import { useContext } from "react";
import Form from "./form";
import Listtodo from "./listtodo";
import Navbar from "./Navbar";
import { todoContext } from "./App";
import Looplist from "./loopforlist";

export default function Alltodo(){
    const allinfo = useContext(todoContext);
    return(
        <div>
            <Navbar value ={allinfo.value} setvalue={allinfo.setvalue} list={allinfo.list} setlist={allinfo.setlist}/>
            <Form 
            value={allinfo.value}
            setvalue={allinfo.setvalue}
            list={allinfo.list}
            setlist={allinfo.setlist}

            />
            <Looplist list={allinfo.list} setlist={allinfo.setvalue}/>
        </div>
    )
}