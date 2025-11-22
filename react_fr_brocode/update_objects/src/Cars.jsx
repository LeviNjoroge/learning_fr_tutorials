// 

import React, { useState } from 'react';

function Cars(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    // car functions, add and delete car
    function addCar(){
        const newCar = {year:carYear,make:carMake, model:carModel};
        setCars(c=>[...c, newCar]);
        setCarMake("");
        setCarModel("");
        setCarYear(new Date().getFullYear())
    }

    function removeCar(index){
        setCars(cars.filter((_,i)=>i!==index));
    }

    // car properties update: Year, Make, Model
    function modifyYear(event){
        setCarYear(event.target.value);
    }
    
    function modifyMake(event){
        setCarMake(event.target.value);
    }

    function modifyModel(event){
        setCarModel(event.target.value);
    }


    return(
        <>
            <div className="cars">
                <h2>List of Car Models</h2>
                <ul>
                    {cars.map((car, index)=><li key={index} onClick={()=>removeCar(index)}>{car.year} {car.make} {car.model}</li>)}
                </ul>
                <br />
                <input type="number" value={carYear} onChange={modifyYear} /> <br />
                <input type="text" value={carMake} onChange={modifyMake} placeholder='Car Make'/> <br />
                <input type="text" value={carModel} onChange={modifyModel} placeholder='Car Model'/> <br />
                <button onClick={addCar}>Add Car</button> <br />
            </div>
        </>
    );
}

export default Cars;