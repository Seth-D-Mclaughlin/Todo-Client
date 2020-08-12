import { List, Table, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = (props) => {

    

    return props.todos.map((todo, index) => {
        return(
            <tr key={index}>
                <th scope="row">{todo.id}</th>
                <td>{todo.title}</td>
                <td>{todo.notes}</td>
                <td>
                    <Button color="warning">Update</Button>
                    <Button color="danger">Delete</Button>
                </td>
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