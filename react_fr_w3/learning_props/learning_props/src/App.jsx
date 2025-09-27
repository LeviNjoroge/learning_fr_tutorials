import Son from "./Son.jsx";
import Daughter from "./Daughter.jsx";

function App() {
  
  return (
    <>
      <h1>My childen</h1>
      <Son>
        <p>
          I am the son!
        </p>
      </Son>
      <Daughter>
        <p>
          This is created by the parent 🙂
        </p>
      </Daughter>
    </>
  );
}

export default App
