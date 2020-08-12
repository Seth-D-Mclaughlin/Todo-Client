import { List, Table, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";
import React, { useEffect, useState } from "react";

const TodoEdit = (props) => {
  const [editTitle, setEditTitle] = useState(props.todoUpdate.title);
  const [editNotes, setEditNotes] = useState(props.todoUpdate.notes);
  const [editComplete, setEditComplete] = useState(props.todoUpdate.isComplete); 

  const todoUpdate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/task/${props.todoUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({title: editTitle, notes: editNotes}),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': props.token 
      }
  }) .then( res => {
    console.log( res ) 
    props.fetchTodos();
    props.updateToggleOff()
  })
  .catch((e)=>{console.log(e)})
}
  return(
    <>
      <Modal isOpen={true}>
        <ModalHeader>Add A Task</ModalHeader>
        <ModalBody>
          <Form onSubmit={todoUpdate}>
            <FormGroup>
              <label htmlFor="title">Edit Task:</label>
              <br/>
              <Input name="title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
              <br/>
              <label htmlFor="note">Edit Notes:</label>
              <br/>
              <Input name="note" value={editNotes} onChange={(e) => setEditNotes(e.target.value)}/>
              <br/>
            </FormGroup>
          <Button type="submit">Update Your Todos!</Button>
          </Form>
        </ModalBody>
      </Modal>
    </> 
  )
}

export default TodoEdit