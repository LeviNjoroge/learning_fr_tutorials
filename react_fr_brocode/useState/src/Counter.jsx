import React, { useState } from 'react';

function Counter(){

    let [count, setCount] = useState(0);

    const decreaseCounter = () => {
        setCount(count - 1);
    }

    const increaseCounter = () => {
        setCount(count + 1);
    }

    const resetCounter = () => {
        setCount(count = 0);
    }

    return(
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={decreaseCounter} title='decrease counter'>➖</button>
            <button onClick={increaseCounter} title='increase counter'>➕</button>
            <button onClick={resetCounter} title='reset counter'>♻</button>
        </div>
    );
}

export default Counter;