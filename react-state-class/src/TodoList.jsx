import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([{ task: 'Sample-Task', id: uuidv4(), isDone: false }]);

  const addNewTask = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => {
        return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
    });
    setNewTodo('');
    }
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
   setTodos(todos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTasks) =>
      prevTasks.map((todo) => {
      return{
        ...todo,
        task: todo.task.toUpperCase() 
      }
      })
    )
  }

  let UpperCaseOneTodo = (id) => {
    setTodos((prevTasks) =>
      prevTasks.map((todo) => {
        if (todo.id == id) {
          return{
            ...todo,
            task: todo.task.toUpperCase() 
          }
        
        } else {
          return todo;
          
        }
      })
    )
  }

  let MarkAsDoneAllTodo = () => {
    setTodos((prevTasks) =>
      prevTasks.map((todo) => {
      return{
        ...todo,
        isDone: true 
      }
      })
    )
  }

  let MarkAsDone = (id) => {
    setTodos((prevTasks) => 
      prevTasks.map((todo) => {
        if (todo.id == id) {
          return{
            ...todo,
            isDone:true 
          }
        
        } else {
          return todo;
          
        }
    })
  )}



  return (
    <div>
      <input 
        placeholder="Add a Task" 
        value={newTodo} 
        onChange={updateTodoValue}
      /><br />
      <button onClick={addNewTask}>Add Task</button><br /><br /><br />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li 
            key={todo.id}
            style={{
              textDecoration: todo.isDone ? 'line-through' : 'none'
            }}
          >
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Remove</button>
            <button onClick={() => UpperCaseOneTodo(todo.id)}>UpperCaseThis</button>
            <button onClick={() => MarkAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
      <br /><br /><br />
      <button onClick={upperCaseAll}>UpperCaseTodo</button>
      <button onClick={MarkAsDoneAllTodo}>Mark As Done All Task</button>
    </div>
  );
};

export default TodoList;
