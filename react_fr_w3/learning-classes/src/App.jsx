
function App() {

  class Car {
    constructor(name) {
      this.brand = name;
    }
    present (){
      return "this is my new "+this.brand;
    }
  }
  class Model extends Car{
    constructor(name, model){
      super(name)
      this.model = model
    }
    showCase(){
      return this.present+" it is a "+this.model
    }
  }
  const myNewTesla = new Model("Tesla", "CyberTruck")
  return (
    <>
      
    </>
  )
}

export default App
