// an updater function is used maily when you need to 
// do multiple state updates and asynchrounous functions
// also, to ensure your code is future proof, you can use it
import React, { useState } from 'react';

function Component1(){

    const [count, setCount] = useState();
    
    // the traditional way:
    function tradSingleIncrementCount(){
        setCount(count + 1);
    }

    // what if you need to incremet more than once? or you need to run the setCount more than once?
    function tradMultiIncrementCount(){
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }
    // well, you will expect this to increment the count by 3 since the setcount has been run three times right?
    // that is not the case here, react tends to batch all the ops in a function once and run them all at once before updating
    // hence, that is just like hitting the refresh button thrice, you'll be itteratively adding the count from 0 to 1, 3 times

    // now, use the updater function for the same
    function newMultiIncrementCount(){
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    // this now increments the count by 3

    // it is then a good practice to do the single incremental as follows:
    function newSingleIncrementCount(){
        setCount(c => c + 1);
    }

    return(
        <>
            <button onClick={tradSingleIncrementCount}>Trad Single Increment</button>
            <button onClick={tradMultiIncrementCount}>Trad Multi Increment</button>
            <br />
            <button onClick={newSingleIncrementCount}>New Single Increment</button>
            <button onClick={newMultiIncrementCount}>New Multi Increment</button>
        </>
    );
}

export default Component1;