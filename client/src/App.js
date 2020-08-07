import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Splash/TodoForm";
import TodoList from "./Splash/TodoList";
import Logo from "./assets/logo.png";
import Auth from "./Auth/Auth";


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        List Buddy
        
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );

  render ( ) {
    return (
      <div className="App">
      <header> 
        <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" placeholder="Enter Text" 
                value={this.state.currentItem.text}
                onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
      </header>
      <Auth/>
      </div>
    )}
}

export default App;
