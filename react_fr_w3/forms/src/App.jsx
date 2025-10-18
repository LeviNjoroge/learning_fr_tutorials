import { useState } from "react";


function App() {

  const [values, setName] = useState({
    name: "Guest",
    age: "",
    email: "example email"
  });

  function handleChange(e){
    setName(...values, e.target.value)
  }
 
  return (
    <form>
      <h2>Reg form</h2>
      <label htmlFor="name">Enter your name: <span color="red">*</span></label>
      <input type="text" value={name} onChange={handleChange}/> <br />

      <label htmlFor="age">Enter your age: </label>
      <input type="number" onChange={handleChange}/> <br />

      <label htmlFor="email">Enter your email: </label>
      <input type="email" onChange={handleChange}/> <br />

      <input type="submit" value="Submit" onSubmit={handleChange}/> <br />

      <p>
        
      </p>
    </form>
  )
}

export default App
