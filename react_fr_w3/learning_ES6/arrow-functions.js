// arror funstions are a shortcut to the normal function syntax:
// normal:
function Hello(){
    return "Hello World!";
}
// or
const Hello = function(){
    return "Hello World!";
}

// with arrow functions:
const Hello =()=>{
    return "Hello World!";
}
// or if a function has only one statement, and the statement returns a value: 
const Hello = () => "Hello WOrld"

// if the statement returns a value:
const SayHi = (name) => "Hey "+name;

// you can als