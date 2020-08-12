import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import TodoForm from "../Splash/TodoForm";
import TodoList from "../Splash/TodoList";



const SplashIndex = (props) => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = () => {
      fetch('http://localhost:3001/task', {
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
  // const [id, setID] = useState();
  
  // const [title, setTitle] = useState('');
  // const [notes, setNotes] = useState('');
  // const [important, setImportant] = useState('');
  // const [complete, setComplete] = useState('');
  
  // const [tasks, setTasks] = useState([])




  // useEffect(() => {
  //   // fetch all todos from server
    
  //   fetch('http://localhost:3001/task/', {
  //     method: 'GET',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': props.token 
  //     }
  // })
  //     .then(res => res.json())
  //     .then(json => setTodos(json))
  //     .then(data => console.log(data)) // Says 
  //     .catch(err => console.log(err))
  // }, []);

  // useEffect(() => {
  //   // updates a todo to the server with a "post"
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  // function addTodo(todo) {
  //   setTodos([todo, ...todos]);
  //    fetch("http://localhost:3001/task/create", {
  //     method: 'POST',
  //     body: JSON.stringify({task:{title: title, notes: notes, isImportant: important, isComplete: complete}}),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': props.token
  
  //   }
  //   }).then(response => response.json()
  //     )  .then((logData) => {
  //       console.log(logData);
  //   })

  // }

  // function toggleComplete(id) {
  //   // marks todo as complete and 'post' to server 
  //   setTodos(
  //     todos.map(todo => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed
  //         };
  //       }
  //       return todo;
  //     })
  //   );
  // }

  // function removeTodo(id) {
  //   // DESTROYYYYYYYYY
  //   setTodos(todos.filter(todo => todo.id !== id));
  // }

    // function handleTaskInputChange(e) {
    // // e.target.value contains new input from onChange
    // // event for input elements
    // setTodo({ ...todo, task: e.target.value });
  

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        List Buddy
      </Typography>
      <TodoForm fetchTodos={fetchTodos}/>
      <TodoList token={props.token} fetchTodos={fetchTodos} todos={todos}/>
    </div>
  )
  }

export default SplashIndex;