


// *******Delete below if App works



import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Splash2/Layout/Navbar"


//components

import InputTodo from "./Splash2/Components/InputTodo";
import ListTodos from "./Splash2/Components/ListTodos";

function App() {
  return (
    <Fragment>
        <Navbar />
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;