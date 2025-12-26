// useEffect react hooks
// these are used to run some code when a state is true

import React, { useState, useEffect } from 'react';

function Component1(){
    const [count, setCount] = useState(0);

    return (

        <>
            <p>{count}</p>
        </>
    );
}

export default Component1;