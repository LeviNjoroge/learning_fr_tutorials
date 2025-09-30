import { Linter } from "eslint";

let cars = ["Tesla", "Honda", "Toyota"];

function Cars() {
    return(
        <ul>
            {cars.map( ()=>
                <li>This is a {car}</li>
            )}
        </ul>
    );
}

export default Cars;