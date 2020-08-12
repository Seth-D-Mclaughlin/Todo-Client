import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [title, setTitle] = useState()
  const [notes, setNotes] = useState()
  const [isImportant, setisImportant] = useState()
  const [id, setId] = useState()
  
  
  const updateTodo = async e => {
    e.preventDefault( );
    try {
      const body = { notes };
      const response = await fetch(
        `http://localhost:3001/tasks/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${todo.id}`}
        onClick={( ) => setNotes(todo.notes)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={( ) => setNotes(todo.notes)}> &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={notes}
                onChange={e => setNotes(e.target.value)} />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateTodo(e)}> Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={( ) => setNotes(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;