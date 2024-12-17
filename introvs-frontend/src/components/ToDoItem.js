import React from 'react';

export default function ToDoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <span onClick={() => toggleComplete(todo.id)} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
}
