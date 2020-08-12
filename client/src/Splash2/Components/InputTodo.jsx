
import React, { Fragment, useState } from "react";

const InputTodo = ( ) => {
  const [title, setTitle] = useState("")
  const [notes, setNotes] = useState("")
  const [isImportant, setisImportant] = useState(false)

  const onSubmitForm = async e => {
    e.preventDefault( );
    try {
      const body = { "task":{
          "title" : title,
          "notes" : notes,
          "isImportant" : isImportant,
          // "owner" : 
      } };
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
  <>
    <h1 className="text-center mt-5">Buddy List</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          />
        <input
          type="text"
          className="form-control"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Notes"
          
          />
          
        <input
          type="checkbox"
          className="form-control"
          value={isImportant}
          onChange={e => setisImportant(e.target.value)}
          />
        <button className="btn btn-success">Add</button>
      </form>
          </>
    
  );
};

export default InputTodo;