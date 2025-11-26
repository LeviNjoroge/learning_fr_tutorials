import React, { useState } from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState(["Go for super", "Wash them dishes r sth"]);
    const [newTasks, setNewTasks] = useState();

    function addTasks(){

    }

    function removeTasks(event){

    }

    function moveTaskUp(event){

    }

    function moveTasksDown(event){

    }

    return(
        <div className="ToDoListApp">
            <ul>
                {tasks.map((task, index)=><li key={index}>{task}</li>)}
            </ul>
        </div>
    );
}

export default ToDOList;