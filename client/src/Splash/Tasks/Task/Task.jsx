import React from 'react';
//this page imports our task from the database 


const Task = (props) => {

    console.log('Task:', props)

    return(
        <>

        {props.task.map(task => {
            return(
                <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.notes}</td>
                    <td>{task.isImportant}</td>
                    <td>{task.isComplete}</td>
                </tr>
            )
        })

        }

        </>
    )
}

export default Task;