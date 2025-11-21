import React, { useState } from 'react';


function Cars(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    return(
        <>
        
        </>
    );
}

export default Cars;