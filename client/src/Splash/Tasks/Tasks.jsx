import React, {useState, useEffect, Component} from 'react';
import Typography from "@material-ui/core/Typography";
import {Container, Row, Col} from 'reactstrap';
import Task from './Task/Task';
import TaskCreate from './Task/TaskCreate';



const Tasks = (props) => {

    const [tasks, setTasks] = useState([])


    useEffect(() => {
        fetch('http://localhost:3001/task', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token 
            }
        })
        .then(res => res.json())
        .then(json => setTasks(json))
        .catch(err => console.log(err))
    }, []);
    
    return(
        <div className="App">
            <Typography style={{ padding: 16 }} variant="h1">List Buddy </Typography>
            <TaskCreate token={props.token}/>
            <Task task={tasks}/> 
      </div> 
    )

}

export default Tasks;