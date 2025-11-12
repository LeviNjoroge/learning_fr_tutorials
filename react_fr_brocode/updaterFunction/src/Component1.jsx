// apparently you can update a useState variable using an 
// updater function and it is said to be more efficient than passing the data in manually
import React, { useState } from 'react';

function Component1(){

    const [name, setName] = useState("Guest");
    function updateName(){
        setName("Andrew Kibe");
    }
    // there is a better way to do the above

    return(
        
        <>
        
        </>
    );
}

export default Component1;