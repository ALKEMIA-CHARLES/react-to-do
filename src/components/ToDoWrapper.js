import React, {useState} from 'react'
import {Todoform} from './Todoform'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
uuidv4();

export const ToDoWrapper = () => {
    const[todos, setTodos] = useState([])

    const addTodo = todo => {
      setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false }])
      console.log(todos)
    }

    const toggleComplete = id => {
      setTodos(todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done</h1>
      <Todoform addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index}
        toggleComplete={toggleComplete}/>
      ))}
      {/* <Todo/> */}

    </div>
  )
}

export default ToDoWrapper
