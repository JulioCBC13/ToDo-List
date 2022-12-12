import React from "react";
import "/workspace/react-hello/src/js/component/ToDo/ToDo.css"

const ToDo = ({todo, handleSetComplete,handleDelet}) => {
    
    const {id,title, completed} = todo
    
    return (
    <div className=" flex items-center justify-betweens p-3 bg-gray-700 border-b border-solid border-gray-600"> 
        <div className=" flex items-center">
            {
                completed ? (<div onClick={() => handleSetComplete(id)} className="bg-green-700 p-1 rounded-full cursor-pointer"> <i class="fa-solid fa-check"></i></div>) : (<span className="border-solid border border-gray-500 p-3 cursor-pointer rounded-full" onClick={() => handleSetComplete(id)}></span>)
            }
            
                <p className={"pl-3" + (completed && "line-through")}>
                   {title}
                </p>
        </div>
        <i onClick={() => handleDelet(id)} className="fa-solid fa-xmark" id="xmark"></i>
    </div>
    )

} 
export default ToDo