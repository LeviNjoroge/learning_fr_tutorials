import { useState } from "react"


function App() {

  const [name, setName] = useState();

  function handleChange(e){
    setName(e.target.value);
  }
 
  return (
    <form action="" method="post">
      <label htmlFor="name">Enter your name: </label>
      <input type="text" value={name} onChange={handleChange}/>

      <label htmlFor="name">Enter your age: </label>
      <input type="text" value={age} onChange={handleChange}/>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default App
