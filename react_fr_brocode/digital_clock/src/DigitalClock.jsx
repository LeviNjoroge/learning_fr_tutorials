import React, { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';

function DigitalClock(){

    const [time, setTIme] = useState(new Date());
    
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTIme(new Date())
        }, 1000);

        return () =>{
            clearInterval(intervalId);
        }
    }, [])

    const formatTime = ()=>{
        let hours = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();
        let meridiem = hours >= 12? "PM": "AM";

        hours = hours%12 || 12;

        return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${meridiem}`
    }

    function padZero(number){
        return (number<10?"0":"")+number;
    }   

    return(
        <div className="digitalClock">
            <Snowfall color="white"/>

            <div className="clock">
                <span>{formatTime()}</span>
            </div>
            <footer><a href="https://www.freepik.com/free-ai-image/sunrise-snowy-mountains-clouds_420708233.htm">Image by freepik</a></footer>
        </div>
    );
}

export default DigitalClock;

