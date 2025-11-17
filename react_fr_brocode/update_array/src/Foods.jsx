import React, { useState } from 'react';

const Foods = () =>{

    const [foods, setFoods] = useState(["Apple", "Banana"]);

    // function to remove an item from the array
    function removeFood(){
        setFoods()
    }

    // function to add an item to the array
    function addFood(){
        setFoods()
    }
    return(
        <>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index)=><li key={index}>{food}</li>)}
            </ul>
        </>
    );
}

export default Foods;