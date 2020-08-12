import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import {Form, FormGroup, Label, Input} from 'reactstrap';

const TodoForm = (props) => {
  
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [important, setImportant] = useState(null);
  const [complete, setComplete] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/task/create", {
      method: 'POST',
      body: JSON.stringify({task:{title: title, notes: notes, isImportant: important, isComplete: complete}}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token // change back to props.token when we learn how to pass a prop to a grandchild
    }
    }).then(response => response.json()
      )  .then((logData) => {
        console.log(logData);
        setTitle('');
        setNotes('');
        setImportant('');
        setComplete('');
        props.fetchTodos();
    })
  }

  return(
    <>
    {/* <h1 className="text-center mt-5">List Buddy</h1> */}
      
    <form onSubmit={handleSubmit} >
        <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          />
          </div>
        <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Notes"
          />
          </div>

        <button className="btn btn-outline-warning">Add</button>
      </form>
          </>
  )
}

export default TodoForm;
