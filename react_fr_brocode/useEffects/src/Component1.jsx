// useEffect react hooks
// these are used to run some code when a state is true

import React, { useState, useEffect } from 'react';

function Component1(){
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(c => c+1);
    }

    return (

        <>
            <p>{count}</p>
            <button>Add</button>
        </>
    );
}

export default Component1;