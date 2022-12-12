import React from "react";
import ToDoFilters from "./TodoFilters/ToDoFilters";
import ToDo from "./ToDo/ToDo";

const TodoList = ({ id,todos, handleSetComplete,handleDelet }) => {
    return (
    <div className=" flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
        {todos.map (todo =>{
            return (
                <ToDo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelet={handleDelet}/>
            )
        })}
        <ToDoFilters/>

    </div>
    )
}

export default TodoList