import React, { useState } from 'react';

function ToDOList(){

    const [tasks, setTasks] = useState(["Dummy Task 1", "Dummy Task 2", "Dummy Task 3"]);
    const [newTasks, setNewTasks] = useState();

    function handleInputChange(event){
        const input = event.target.value;
        setNewTasks(input)
    }

    function addTask() {
        setTasks(t=>[...t, newTasks])
        setNewTasks("");
    }

    function deleteTasks(event){

    }

    function moveTaskUp(event){

    }

    function moveTasksDown(event){

    }

    return(
        <div className="ToDoList">
            <h1>To-Do List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter some task' 
                    value={newTasks}
                    onChange={handleInputChange}
                />
                <button
                    onClick={addTask}
                    className='addButton'
                    >
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index)=> <li key={index}>
                        <span className='task'>{task}</span>
                        <button className='deleteButton' onClick={()=>deleteTasks(index)}>🚮</button>
                        <button className='upButton' onClick={()=>moveTaskUp(index)}>🔼</button>
                        <button className='downButton' onClick={()=>moveTasksDown(index)}>🔽</button>
                    </li>)}
            </ol>   
            {/* <p>This app offers the following functionalities:
                <ul>
                    <li>Adding an item to the list</li>
                    <li>Removing an item from the List</li>
                    <li>Managing its priority/urgency, through moving a task higher up in the list or lower</li>
                </ul>
                <i>*more features are to be added soon, keep calm and be patient. Also, your feedback on the current features, suggestion on areas of improvement will be appreciated. <br />Email us on <a href="mailto:anonymous@gmail.com">contact@todolistapp.com</a></i>
            </p> */}
        </div>
    );
}

export default ToDOList;