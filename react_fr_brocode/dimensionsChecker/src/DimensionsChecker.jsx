import React, { useState, useEffect } from 'react';

function DimensionsChecker(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // useEffect(()=>{
    //     window.addEventListener("resize", handleDimensionsChange);
    //     console.log("Updated Dimensions")
    // }, [])

    onresize(handleDimensionsChange);

    function handleDimensionsChange(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(()=>{
        document.title = `${height} x ${width}`;
    }, [height, width]);

    return (
        <>
            Width: {width}px <hr />
            Height: {height}px
        </>
    );
}

export default DimensionsChecker;