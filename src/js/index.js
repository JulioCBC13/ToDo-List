//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


import Title from "./component/Title.js";
import TodoInput from "/workspace/react-hello/src/js/component/Input.js"
import  TodoList  from "/workspace/react-hello/src/js/component/TodoList.js"
import ToDo from "/workspace/react-hello/src/js/component/ToDo/ToDo.js";
import ToDoFilters from "/workspace/react-hello/src/js/component/TodoFilters/ToDoFilters.js";

const App = () => {
	
  const [todos, setTodos] = useState ([
    {
    id: 1,
    title: 'Watch the next Marvel Movie',
    completed: false,
    },
    {
    id: 2,
    title: 'Record the next Video',
    completed: false,
    },
    {
    id: 3,
    title: 'Wash the dishes',
    completed: false,
     },
    
     {
    id: 4,
    title: 'Study 2 hours',
    completed: false,
    }

  ])

  const addTodo = (title) => {
    const lastId = todos.length ? todos [todos.lenght - 1 ].id : 1;
    
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

 const handleSetComplete = (id) => {
  const updateList = todos.map( todo => {
    if ( todo.id === id)
      return {...todo, completed: ! todo.completed}
      return todo
  })

  setTodos(updateList)
 }

 const handleDelet = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos (updateList)

 }
  

    return (
      <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5 ">
        <div className="container flex-col max-w-xl">
            
                <div id="Title"><Title/></div>
                <TodoInput addTodo={addTodo}/>  
                <TodoList 
                todos={todos}
                handleSetComplete={handleSetComplete}
                handleDelet={handleDelet}
                />   
                
            
        </div>
      </div>
    )
  }


//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
