import { List, Table, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";



// FOR THE DELETE I DON'T KNOW THE URL TO DELETE, DIDN'T WORK IN POST MAN

const TodoList = (props) => {
    const deleteTodo = (todo) => {
        fetch(`http://localhost:3001/task/${todo.id}`, { /// we can't do a get min becuase the get fetch doesn't work but we still need to make it match the user only not a get all
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token 
            }
        }) 
        .then(() => props.fetchTodos())
    }    

    return props.todos.map((todo, index) => {
        return(
            <div class="list-group" key={index}>
                <a href="#" class="list-group-item list-group-item-action list-group-">
                    <div class=" p-2 flex-fill bd-secondary">
                    <h5 class="mb-1">{todo.title}</h5>
                    </div>
                    <p class="mb-3 flex-grow 0 ">{todo.notes}</p>
                    <Button onClick={() => {props.editSelectedTodo(todo); props.updateToggleOn()}} class="btn btn-sm mx-4 btn btn-info shadow">Update</Button>
                    <Button onClick={() => {deleteTodo(todo)}} class="btn btn-sm mx-4 btn btn-warning shadow" >Delete</Button>
                <hr/>
                </a>
                <br/>
            </div>
        )
    })
}
export default TodoList;