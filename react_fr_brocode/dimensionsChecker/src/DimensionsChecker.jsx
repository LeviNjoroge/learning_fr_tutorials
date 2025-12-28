import React, { useState, useEffect } from 'react';

function DimensionsChecker(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    window.addEventListener("resize", handleDimensionsChange);

    function handleDimensionsChange(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        console.log("Updated Dimensions")
    }

    return (
        <>
            Width: {width}px
            Height: {height}px
        </>
    );
}

export default DimensionsChecker;