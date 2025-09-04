// will be going through how classes work in ES6:
// a class is a blueprint of what an object should look like
// classes are used in object oriented programming, and are highly recommended since they encourage code reusability and are easier to document and store

// lets create a class of a car and make an object out of it:
class Car{
    constructor(model, manufacturer, year){
        this.model = model
        this.manufacturer = manufacturer
        this.year = year
    }

    // add a method to call out the car details:
    callCar(){
        return "This is a "+this.model+" manufatured by "+this.manufacturer+" in the year "+this.year;
    }
}

myNewTesla = new Car("family car", "tesla inc", 2021);

console.log(myNewTesla.callCar())

// lets now create a new class: Model that extends the car class
class Model extends Car{
    constructor(model, ){

    }
}