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
            </ul>
            <p>This app offers the following functionalities:
                <ul>
                    <li>Adding an item to the list</li>
                    <li>Removing an item from the List</li>
                    <li>Managing its priority/urgency, through moving a task higher up in the list or lower</li>
                </ul>
                <i>*more features are to be added soon, keep calm and be patient. Also, your feedback on the current features and also those you would like see adde</i>
            </p>
        </div>
    );
}

export default ToDOList;