import React, { useState } from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState([]);
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
                {tasks.map({task, elements}=><li></li>)}
            </ul>
        </div>
    );
}

export default ToDOList;