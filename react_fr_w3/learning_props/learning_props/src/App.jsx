import Son from "./Son.jsx";
import Daughter from "./Daughter.jsx";
import Hello from "./Hello.jsx";

function App() {
  
  return (
    <>
      <Hello name="Pneumonoultramicroscopicsilicovolcanoconiosis"/>
      <h2>My childen</h2>
      <Son>
        <p>
          I am the son!
        </p>
      </Son>
      <Daughter>
        <p>
          I am the flower 🙂
        </p>
      </Daughter>
    </>
  );
}

export default App
