import React, { useState } from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const decreaseCounter = () => {
        setCount(count - 1);
    }

    const increaseCounter = () => {
        setCount(count + 1);
    }

    const resetCounter = () => {
        setCount(0);
    }

    return(
        <div className="counter">
            <div className="count"><p>{count}</p></div> <br />
            <button onClick={decreaseCounter} title='decrease counter' className='decreaseCounterButton'>➖</button>
            <button onClick={resetCounter} title='reset counter' className='resetCounterButton'>♻</button>
            <button onClick={increaseCounter} title='increase counter' className='increaseCounterButton'>➕</button>
        </div>
    );
}

export default Counter;