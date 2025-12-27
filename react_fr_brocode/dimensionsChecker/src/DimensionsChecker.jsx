import React, { useState, useEffect } from 'react';

function DimensionsChecker(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

        useEffect(()=>{
            setWidth(window.innerWidth);
        }, []);

        useEffect(()=>{
            setHeight(window.innerHeight);
        }, []);

    return (
        <>
            Width: {width}px
            Height: {height}px
        </>
    );
}

export default DimensionsChecker;