import React, { useState } from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState(["Dummy Task 1", "Dummy Task 2", "Dummy Task 3", "Dummy Task 4", ]);
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