import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <div>
      <List>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}/>
        ))}
      </List>
    </div>
  );
}

export default TodoList;