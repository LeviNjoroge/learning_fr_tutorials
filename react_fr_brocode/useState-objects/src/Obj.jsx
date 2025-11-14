
// this is an illustration of how to go about stateful variables when dealing with objects
// to do this, you need to have an idea of:
// useState - to create stateful variables and update them accordingly
// updaterFunctions - used to carefully update stateful variables
// objects - this is what we are dealing with

// to begin we are going to create an object of a car, that has the following attributes:
// year of production, model, color
// after setting default values for these, we are going to update the value in a form in a website

import React, { useState } from 'react';

function Obj(){
    const [car, setCar] = useState({
        year:2025,
        
    });

    return(
        <>
        
        </>
    );
}

export default Obj;