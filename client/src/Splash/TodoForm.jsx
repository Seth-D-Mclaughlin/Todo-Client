import { Button, TextField } from "@material-ui/core";
import React, {useState} from "react";
import {v4 as uuid} from "uuid"; 



function TodoForm( addTodo){
    const [todo, setTodo] = useState({
        id: " ",
        task: " ",
        complete: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault( );
        if (todo.task.trim( )) {
            addTodo({ ...todo, id: uuid ( ) });
            //reset task input
            setTodo({ ...todo, task: "" });
        }
    }

    return(
        <form className="to-do" onSubmit={handleSubmit}>
            <TextField
            label="Task"
            name="task"
            type="text"
            value= {todo.task}
            onChange={handleTaskInputChange}
            />
            <button type="submit" />
        </form>
    );
}


export default TodoForm ;