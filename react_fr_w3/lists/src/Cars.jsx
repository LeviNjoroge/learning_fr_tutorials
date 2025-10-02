
function Cars() {

    let cars = ["Tesla", "Honda", "Toyota"];

    return(
        <ul>
            {cars.map((car) =>
                <li key=>I have a {car}</li>
            )}
        </ul>
    );
}

export default Cars;