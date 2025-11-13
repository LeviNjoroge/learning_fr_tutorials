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


    return(
        
        <>
        
        </>
    );
}

export default Component1;