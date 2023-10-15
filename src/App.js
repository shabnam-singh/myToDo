import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Todos from "./components/todos";
import { AddTodo } from "./components/AddTodo";
import { useState, useEffect } from "react";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Notfound from "./components/Notfound";
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <center>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/contact" element={<Contact />} />

          <Route path="*" element={<Notfound />} />
        </Routes>

        <Footer />
      </center>
    </>
  );
}

export default App;

//<Header title="Hello Dear " data="Arav" show={false}/>
//<AddTodo addTodo={addTodo} />
//<Todos todos={todos} onDelete={onDelete} />
