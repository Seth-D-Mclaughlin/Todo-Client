// function handleSubmit(e) {
//   e.preventDefault( ); // prevents browser refresh
//   // trim() gets rid of string whitespace
//   if (todo.task.trim( )) {
//     addTodo({ ...todo, id: uuid( ) });
//     setTodo({ ...todo, task: "" });
//   }
// }

// return (
//   <form className="todo-form" onSubmit={handleSubmit}>
//     <TextField
//       label="Task"
//       type="text"
//       name="task"
//       value={todo.task}
//       onChange={handleTaskInputChange}
//     />
//     <Button type="submit">Submit</Button>
//   </form>
// );


// export default TodoForm;