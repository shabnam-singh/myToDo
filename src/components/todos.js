import React from "react";
import ToDoItem from "./ToDoItem";

export const todos = (props) => {
  return (
    <>
      <div>
        <h3>My Todo List {}</h3>

        {props.todos.length === 0
          ? "No Todos to Display"
          : props.todos.map((todo) => {
              return <>
              <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr />
              </>;
            })}
      </div>
    </>
  );
};

export default todos;
