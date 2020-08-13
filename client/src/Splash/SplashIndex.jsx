import Typography from "@material-ui/core/Typography";
import "./App.css";
import React, { useEffect, useState } from "react";
import TodoForm from "../Splash/TodoForm";
import TodoList from "../Splash/TodoList";
import TodoEdit from "../Splash/TodoEdit";



const SplashIndex = (props) => {
  const [todos, setTodos] = useState([]);
  const [todoActive, setTodoActive] = useState(false);
  const [todoUpdate, setTodoUpdate] = useState({});
  const fetchTodos = () => {
      fetch('http://localhost:3001/task/mine', { /// we can't do a get min becuase the get fetch doesn't work but we still need to make it match the user only not a get all
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': props.token 
          }
      }) .then( res => res.json())
      .then((logData) => {
      setTodos(logData)
      })
    }

    useEffect(() => {
      fetchTodos();
    }, [])

    const editSelectedTodo = (todo) => {
      setTodoUpdate(todo);
      console.log(todo);
    }

    const updateToggleOn = () => {
      setTodoActive(true);
    }

    const updateToggleOff = () => {
      setTodoActive(false);
    }
    


  return (
    <div className="App">
     <h1 class="display-3">  List Buddy ToDo's</h1>
     
    
      
      <TodoForm fetchTodos={fetchTodos} token={props.token}/>
      <TodoList token={props.token} fetchTodos={fetchTodos} todos={todos} editSelectedTodo={editSelectedTodo} updateToggleOn={updateToggleOn}/>
      {todoActive ? <TodoEdit todoUpdate={todoUpdate} updateToggleOff={updateToggleOff} fetchTodos={fetchTodos} token={props.token}/> : <> </>}
    </div>
  )
  }

export default SplashIndex;