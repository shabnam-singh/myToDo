import React from "react";

export function ToDoItem({ todo, onDelete }) {
  return (
    <div>
      <b>{todo.title} </b>
      <span>{todo.desc} </span>
      <button
        id="btn1"
        type="button"
        onClick={()=>{onDelete(todo)}}
      >
        Delete
      </button>
    </div>
  );
}



export default ToDoItem;
