
function Cars() {

    let cars = ["Tesla", "Honda", "Toyota"];

    return(
        <ul>
            {cars.map((car) =>
                <li key={car}>I have a {car}</li>
            )}
        </ul>
    );
}

export default Cars;