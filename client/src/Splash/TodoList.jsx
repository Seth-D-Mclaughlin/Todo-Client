import { List, Table, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";

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
            <tr key={index}>
                <td><Button color="warning" onClick={() => {props.editSelectedTodo(todo); props.updateToggleOn()}}>Update</Button></td>
                <th scope="row">{todo.id}</th>
                <td>{todo.title}</td>
                <td>{todo.notes}</td>
                <td><Button color="danger" onClick={() => {deleteTodo(todo)}}>Delete</Button></td>
            </tr>
        )
    })

    return(
        <>
        <h3>Todo List</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </Table>
        </>
    )
}
export default TodoList;