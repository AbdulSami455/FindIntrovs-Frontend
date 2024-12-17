import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({ todos, addTodo, deleteTodo, toggleComplete }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    addTodo(task);
    setTask('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>My To-Do List</h3>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}
