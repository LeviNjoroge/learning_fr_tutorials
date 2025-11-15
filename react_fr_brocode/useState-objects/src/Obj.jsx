
// this is an illustration of how to go about stateful variables when dealing with objects
// to do this, you need to have an idea of:
// useState - to create stateful variables and update them accordingly
// updaterFunctions - used to carefully update stateful variables
// objects - this is what we are dealing with

// to begin we are going to create an object of a car, that has the following attributes:
// year of production, model, color
// after setting default values for these, we are going to update the value in a form in a website

import React, { useState } from 'react';

function Obj(){
    const [car, setCar] = useState({year: 1999, model:"TX", color: "Red"});

    function updateYear(event){
        setCar(c => ({...c, year: event.target.value})) // NOTE THIS
    }

    function updateModel(event){
        setCar(c => ({...c, model: event.target.value}))
    }

    function updateColor(event){
        setCar(c => ({...c, color: event.target.value}))
    }

    return(
        <>
            <div className="form">
                <p>I have selected a {car.color}, {car.year} model of a {car.model}</p>
                <label htmlFor="year">Year: </label> 
                    <input onChange={updateYear} type="number" name="year" id="year"/> <br />   
                <label htmlFor="model">Model: </label>
                    <input onChange={updateModel} type="text" name='model' value={car.model}/> <br />
                <label htmlFor="color">Color: </label>
                    <input onChange={updateColor} type="text" name='color' value={car.color}/> <br />
            </div>
        </>
    );
}

export default Obj;