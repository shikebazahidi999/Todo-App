import Listtodo from "./listtodo";

export default function Looplist({list,setlist}){
    return(
        <>
        {
            list.map((todo)=>(
                <div key={todo.id}>

                < Listtodo todo={todo} list={list} setlist={setlist}/>
                </div>
            ))
        }
        </>
    )
}