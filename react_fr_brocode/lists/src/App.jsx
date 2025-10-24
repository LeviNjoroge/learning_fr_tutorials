import Lists from "./Lists";

function App() {

  const fruits = [
        {id: 1,name: "Apple", calories: 143},
        {id: 2,name: "Pineapple", calories: 122}, 
        {id: 3,name: "Kiwi", calories: 43}, 
        {id: 4,name: "Banana", calories: 54}, 
        {id: 5,name: "Coconut", calories: 201},
        {id: 6,name: "Mango", calories: 65}
    ];

  const vegetables = [
        {id: 7,name: "Kales", calories: 30},
        {id: 8,name: "Tomatoes", calories: 75}, 
        {id: 9,name: "Onions", calories: 20}, 
        {id: 10,name: "Corriander", calories: 10}, 
        {id: 11,name: "Ginger", calories: 25},
        {id: 12,name: "Lettuce", calories: 55}
    ];
  
  return (
    <>
    {fruits.length > 0 && <Lists items={fruits} category="Fruits"/> }
    {vegetables.length > 0 && <Lists items={vegetables} category="Vegetables"/>}
    <Lists></Lists>
    </>
  );
}

export default App
