import React, { useState, useEffect, useRef } from 'react';


function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    },[isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);    
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let mins = Math.floor(elapsedTime/(1000*60)%60);
        let secs = Math.floor(elapsedTime/(1000)%60);
        let millisecs = Math.floor((elapsedTime%1000)/10);

        hours = String(hours).padStart(2, "0");
        mins = String(mins).padStart(2, "0");
        secs = String(secs).padStart(2, "0");
        millisecs = String(millisecs).padStart(2, "0");

        return `${hours}:${mins}:${secs}:${millisecs}`;
    }

    // function 
    
  return (
    <div className="stopWatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
            <button className='startButton' onClick={start}>Start</button>
            <button className='stopButton' onClick={stop}>Stop</button>
            <button className='resetButton' onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch
