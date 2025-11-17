import React, { useState } from 'react';

const Foods = () =>{

    const [foods, setFoods] = useState(["Apple", "Banana", "Coconut"]);

    // function to remove an item from the array
    function removeFood(index){
        setFoods(foods.filter((_, i)=>i !== index));
    }

    // function to add an item to the array
    function addFood(){
        const newFood = document.getElementById("addFood").value; // create a variable with the value of the input
        document.getElementById("addFood").value = ""; // clear the input
        setFoods(f => [...f, newFood]); // add the input value to the array before
    }

    // clear foods list
    function clearFood(){
        setFoods([]);
    }
    return(
        <>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index)=><li key={index} onClick={() => removeFood(index)}>{food}</li>)}
            </ul>
            <input type="text" name="addFood" id="addFood" placeholder='Enter food name...'/>
            <button onClick={addFood}>Add Food</button>

            <br />
            <button onClick={clearFood}>Clear List</button>
        </>
    );
}

export default Foods;