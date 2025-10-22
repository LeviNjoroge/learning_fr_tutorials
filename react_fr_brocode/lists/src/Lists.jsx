
function Lists() {
    const fruits = ["Apple", "Pineapple", "Kiwi", "Banana", "Coconut", "Orange", "Mango"];

    // if you wanna sort:
    fruits.sort();

    const renderFruits = fruits.map(fruit => <li> {fruit} </li>);

    return(
        <ol>{renderFruits}</ol>
    );
}

export default Lists;