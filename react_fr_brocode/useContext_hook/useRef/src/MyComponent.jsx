import React, {useEffect, useRef} from 'react';

function MyComponent(){
    // create a constant and assign a value to it
    const ref = useRef(0);

    // check for when the component rerenders
    useEffect(()=>{
        console.log('COMPONENT RERENDERED')
    })

    function handleAddition(){
        ref.current++;
    }

    return(
        
        <>
            <h1>{ref}</h1>
            <button onClick={handleAddition}>Increase Value</button>
        </>
    );
}

export default MyComponent;