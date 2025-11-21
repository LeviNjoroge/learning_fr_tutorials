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
    function modifyYear(){

    }
    
    function modifyMake(){

    }

    function modifyModel(){

    }


    return(
        <>
        
        </>
    );
}

export default Cars;