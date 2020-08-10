import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./Splash2/Components/InputTodo";
import ListTodos from "./Splash2/Components/ListTodos";

function App() {
    return (
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
  );

}

export default App;