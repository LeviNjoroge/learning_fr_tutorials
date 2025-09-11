
function Fruits(){
    const fruits = ["Mangos", "Apples", "Bananas", "Oranges", "Cayos"];
    const employees = [
        {id: 1,name: "Lee", age:20, gender:"male", salary: 80000},
        {id: 2,name: "Jane", age:19, gender:"female", salary: 70000},
        {id: 3,name: "Mark", age:37, gender:"male", salary: 430000},
    ]
    return(
        <>
            <ul>
                {
                    fruits.map(fruit=>{
                        return <li key={fruit}>{fruit}</li>
                    })
                }
            </ul>
            <ol>
                {
                    employees.map(employee=>
                        <li key={employee.id}>{employee.name} is {employee.age} years old and {(employee.gender=="male")?"he":"she"} earn {employee.salary}</li>
                    )
                }
            </ol>
        </>
    );
}

export default Fruits;