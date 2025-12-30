import React, { useState, useEffect, useRef} from 'react';

function MyComponentOld(){

    let [number, setNumber] = useState(0)

    function handleClick(){
        setNumber(n => n+1);
    }
    return(
        <>
            <button onClick={handleClick}>Click Moi:)</button>
        </>
    );
}

export default MyComponentOld;