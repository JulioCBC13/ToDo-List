import React, { useState } from 'react';
import data from './data.json'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

//create your first component
const Home = () => {

	const [todos,setTodos] = useState(data)
	const onCompleted = (id) =>{

		setTodos(todos.map ((todo) => {
			return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo}
	}))
		
			
	}

	const onDeletedItem = (id) =>{
		setTodos([...todos].filter(todo => todo.id !== id ))
	}

	const addTodo = (newTodo) => {
		let newItem = {id : + new Date(), task: newTodo, completed: false}

		setTodos([...todos, newItem])
	}


	return (
		<div className="container">
			<TodoForm addTodo = {addTodo}/>
			<TodoList todos={todos} onCompleted={onCompleted} onDeletedItem={onDeletedItem}/>
		</div>
	);
};

export default Home;
