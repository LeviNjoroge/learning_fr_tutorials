import React, { useState, useEffect } from 'react';

function DimensionsChecker(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

        useEffect(()=>{
            setWidth(window.innerWidth);
        }, [window.innerWidth]);

        useEffect(()=>{
            setWidth(window.innerWidth);
        }, [window.innerWidth]);
    

    return (
        <>
            Width: {width}px
            Height: {height}px
        </>
    );
}

export default DimensionsChecker;