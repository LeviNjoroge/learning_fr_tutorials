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

    // what if 


    return(
        
        <>
        
        </>
    );
}

export default Component1;