
function Lists(props) {

    const fruits = props.items;
    const category = props.category;

    // if you wanna sort:
    //#by calories
    fruits.sort((a, b) => (a.calories - b.calories));
    //#by fruit names
    // fruits.sort((a, b) => a.name.localeCompare(b.name))

    // if you want to filter:
    // use the filter method as follows;
    // arr.filter(arrayElement => condition)
    // const LowCalFruits = fruits.filter(LowCalFruit => LowCalFruit.calories < 100); // this now stores items with 'calories' lesser than 100

    const renderFruits = fruits.map(fruit => <li key={fruit.id}> {fruit.name}: <b>{fruit.calories}</b></li>);

    return(
        <>
            <h2>{category}</h2>
            <ol>{renderFruits}</ol>
        </>
    );
}

export default Lists;