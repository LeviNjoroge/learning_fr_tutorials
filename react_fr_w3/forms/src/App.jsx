import { useState } from "react"


function App() {

  const [name, age, email, setName] = useState();

  function handleChange(e){
    setName(e.target.value);
  }
 
  return (
    <form>
      <h2>Reg form</h2>
      <label htmlFor="name">Enter your name: <span color="red">*</span></label>
      <input type="text" value={name}/> <br />

      <label htmlFor="age">Enter your age: </label>
      <input type="text" value={age}/> <br />

      <label htmlFor="email">Enter your email: </label>
      <input type="text" value={email}/>

      <input type="submit" value="Submit" onSubmit={handleChange}/>

      <p>
        Hi {name}, your email is {email}, and age is {age}
      </p>
    </form>
  )
}

export default App
