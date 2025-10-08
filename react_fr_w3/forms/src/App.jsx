import { useState } from "react"


function App() {

  const [name, setName] = useState();

  function handleChange(e){
    setName(e.target.value);
  }
 
  return (
    <form action="" method="post">
      <label htmlFor="name">Enter your name: </label>
      <input type="text" value={name}/>

      <label htmlFor="age">Enter your age: </label>
      <input type="text" value={age}/>

      <label htmlFor="email">Enter your email: </label>
      <input type="text" value={email}/>

      <input type="submit" value="Submit" onSubmit={handleChange}/>
    </form>
  )
}

export default App
