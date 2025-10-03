import { useState } from "react"


function App() {

  const [name, setName] = useState();

  function handleChange(e){
    setName(e.target.value);
  }
 
  return (
    <form action="" method="post">
      
    </form>
  )
}

export default App
