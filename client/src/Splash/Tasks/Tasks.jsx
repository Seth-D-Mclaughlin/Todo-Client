import React, {useState, useEffect} from 'react';
import Task from './Task/Task';


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
        <table>
            <thead>
                <tr>
                    <th>Todo</th>
                    <th>Notes</th>
                    <th>Important</th>
                    <th>Complete</th>
                </tr>
            </thead>

            <tbody>
                {/* below we are telling our DOM to display our task component AND we are telling react to past down the prop so pie can use the prop*/}
                <Task task={tasks}/> 
            </tbody>
        </table>
    )

}

export default Tasks;