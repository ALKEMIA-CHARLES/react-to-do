import React from 'react'

const Todoform = () => {
  return (
    <>
    <h1>Form</h1>
    <form className='TodoForm'>
      <input type='text' className='todo-input'
      placeholder='what is the task today?'/>
      <button type='submit' className='todo-btn'> Add Task
      </button>
    </form>

    </>
      
    
  )
}


export default Todoform
