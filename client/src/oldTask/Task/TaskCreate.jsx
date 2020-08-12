// import React, {useState} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

// const TaskCreate = (props) => {
//   const [title, setTitle] = useState('');
//   const [notes, setNotes] = useState('');
//   const [important, setImportant] = useState(false);
//   const [complete, setComplete] = useState(false);


//   let handleSubmit = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:3001/task/create", {
//       method: 'POST',
//       body: JSON.stringify({task:{title: title, notes: notes, isImportant: important, isComplete: complete}}),
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': props.token
//     }
//     }).then(response => response.json()
//       )  .then((logData) => {
//         console.log(logData);
//         setTitle('');
//         setNotes('');
//         setImportant('');
//         setComplete('');
//     })
//   }

//   return(
//     <p>
//       <h3>Create A Task</h3>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor="title"/>
//           <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
//         </FormGroup>
//         <FormGroup>
//           <Label for="notes">Task Notes</Label>
//           <Input type="textarea" name="notes" id={notes} onChange={(e) => setNotes(e.target.value)} />
//         </FormGroup>
//         <FormGroup check>
//         <Label check>
//           <Input type="checkbox" name="important" id={important} onChange={(e) => setImportant(e.target.value)}/>{' '}
//           Mark Important
//         </Label>
//       </FormGroup>
//       <FormGroup check>
//         <Label check>
//           <Input type="checkbox" name="complete" id={complete} onChange={(e) => setComplete(e.target.value)} />{' '}
//           Mark Complete
//         </Label>
//       </FormGroup>
//       <Button type="submit">Create Task</Button>
//       </Form>
//     </p>
//   )
// }

// export default TaskCreate;