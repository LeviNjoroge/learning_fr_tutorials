import React, { useState } from 'react';


function Cars(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    // car functions, add and delete car
    function addCar(){

    }

    function removeCar(){

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
                <h2>List of Cars</h2>
                <ul>

                </ul>
                <input type="number" value={carYear} onChange={modifyYear} />
                <input type="text" value={carMake} onChange={modifyMake} placeholder='Car Make'/>
                <input type="text" value={carModel} onChange={modifyModel} placeholder='Car Model'/>
                <button onClick={addCar}>Add Car</button>
            </div>
        </>
    );
}

export default Cars;