
function Fruits(){
    const fruits = ["Mangos", "Apples", "Bananas", "Oranges", "Cayos"];
    return(
        <ul>
            {
                fruits.map(fruit=>{
                    <li key={fruit}>{fruit}</li>
                })
            }
        </ul>
    );
}

export default Fruits;