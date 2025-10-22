
function Lists() {
    const fruits = ["Apple", "Pineapple", "Kiwi", "Banana", "Coconut", "Orange", "Mango"];

    const renderFruits = fruits.map(fruit =>{
        <li key={fruit}> {fruit} </li>
    })
    return(
        <ul>{renderFruits}</ul>
    );
}

export default Lists;