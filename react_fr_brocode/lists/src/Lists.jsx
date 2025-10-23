
function Lists() {
    const fruits = [
        {id: 1,name: "Apple", calories: 143},
        {id: 2,name: "Pineapple", calories: 122}, 
        {id: 3,name: "Kiwi", calories: 43}, 
        {id: 4,name: "Banana", calories: 54}, 
        {id: 5,name: "Coconut", calories: 201}
    ];

    // if you wanna sort:
    //by calories
    fruits.sort((a, b) => (a.calories - b.calories));
    //by fruit names
    fruits.sort((a, b) => a.name.localeCompare(b.name))

    // if you want to filter:
    // use the filter method as follows;
    // arr.fliter(arrayElement => condition)
    const LowCalFruits = fruits.filter(fruit => fil)


    const renderFruits = fruits.map(fruit => <li key={fruit.id}> {fruit.name}: <b>{fruit.calories}</b></li>);

    return(
        <ol>{renderFruits}</ol>
    );
}

export default Lists;