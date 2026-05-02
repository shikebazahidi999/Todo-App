export default function Showtodo({list}){
    return(
        <div className="h-full w-full flex items-center justify-center m-0 p-6">
           { list.lenght >0 &&(list.map((item)=>( 
            <div className="h-fit w-full p-3 border-2 border-dashed  border-red-300">
            <h1 className="text-2xl ">{item}</h1>
            </div>)))}
        </div>
    )
}