void main(){

  var name = "Joe"; //declaring a variable using 'var'

  int age = 30; // BEST PRACTICE, if you know the data type you are working with, use the datatype name to declare the variable

  dynamic gpa = 3.5; // declaring a variable using 'dynamic'

  const String school = "Gumbaru School"; // setting a constant
  // school = "NBO Gumbaru School"; -- DOES NOT WORK SINCE THE VARIABLE IS A CONSTANT
  name = "Joseph"; // see how the value of the variable 'name' accepts change

  int finalScore; // you can declare and not assign
  finalScore = 45; // assigning a value to an already declared variable

  print(name);
  print(age);
  print(gpa);
  print(school);
  print(finalScore);
}