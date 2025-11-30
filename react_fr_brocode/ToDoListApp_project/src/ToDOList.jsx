import React, { useState } from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState(["Dummy Task 1", "Dummy Task 2", "Dummy Task 3", "Dummy Task 4", "Dummy Task 5"]);
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
        <div className="ToDoList">
            <h1>To-Do List</h1>
            <ul>
                {t
            </ul>
        </div>
    );
}

export default ToDOList;