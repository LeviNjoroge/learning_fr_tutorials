// an updater function is used maily when you need to 
// do multiple state updates and 
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