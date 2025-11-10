import React, { useState } from 'react';

function colorPicker () {

    const [color, setColor] = useState();

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }


    return(
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="color">Select a color</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );

}

export default colorPicker;