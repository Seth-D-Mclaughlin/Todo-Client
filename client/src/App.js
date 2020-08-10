import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./Splash2/Components/InputTodo";
import ListTodos from "./Splash2/Components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;