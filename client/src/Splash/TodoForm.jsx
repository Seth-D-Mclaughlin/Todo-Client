import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const TodoForm = (props) => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [important, setImportant] = useState(null)
  const [complete, setComplete] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/task/create', {
      method: 'POST',
      body: JSON.stringify({
        task: {
          title: title,
          notes: notes,
          isImportant: important,
          isComplete: complete,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
<<<<<<< HEAD
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNTk3MTcyOTYwLCJleHAiOjE1OTcyNTkzNjB9.e4ZA0bbMDDkWEyG7-X7nYGD-DhGkcc7O0ToTYCYxiZg', // change back to props.token when we learn how to pass a prop to a grandchild
      },
=======
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
>>>>>>> 8df95d11e3b98e579491e1205462cba0c151b4e9
    })
      .then((response) => response.json())
      .then((logData) => {
        console.log(logData)
        setTitle('')
        setNotes('')
        setImportant('')
        setComplete('')
      })
  }

  return (
    <>
<<<<<<< HEAD
      <h1 className='text-center mt-5'>List Buddy</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
=======
    {/* <h1 className="text-center mt-5">List Buddy</h1> */}
      
    <form onSubmit={handleSubmit} >
        <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
>>>>>>> 8df95d11e3b98e579491e1205462cba0c151b4e9
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder='Notes'
          />
<<<<<<< HEAD
        </div>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            value={setImportant}
            onChange={(e) => setImportant(e.target.value)}
          />
          <label className='form-check-label'>Important</label>
        </div>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            value={setComplete}
            onChange={(e) => setComplete(e.target.value)}
          />
          <label className='form-check-label'>Complete</label>
        </div>
        <button className='btn btn-warning'>Add</button>
=======
          </div>

        <button className="btn btn-outline-warning">Add</button>
>>>>>>> 8df95d11e3b98e579491e1205462cba0c151b4e9
      </form>
    </>
  )
}

export default TodoForm
