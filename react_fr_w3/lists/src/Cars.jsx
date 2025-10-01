import { Linter } from "eslint";

let cars = ["Tesla", "Honda", "Toyota"];

function Cars() {
    return(
        <ul>
            {cars.map( ()=>
                {
                    if ("Honda") {
                        {<li>I have a green {car}</li>}
                    } else {
                        {<li>I have a {car}</li>}
                    }
                }
            )}
        </ul>
    );
}

export default Cars;