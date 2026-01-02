void main(){

  // Maps
  // declare using either var or Map
  var brand = {"Mary":"Toyota","Elon":"Tesla"};
  Map toppings = {"Lee":"Pepperoni", "John":"Cheese"};


  print("Toppings: ${toppings}"); // acccess the whole map
  print("John's fav topping is ${toppings["John"]}"); // get the value of an item in the map
  print("All registered users: ${toppings.keys}"); // get all keys
  print("All requested toppings: ${toppings.values}"); // get all values
  print("Number of registered toppings: ${toppings.length}"); // get the number of key/value pairs existing

  // to add an item 
  brand["Kevin"] = "Audi";
  print("New list of brands: ${brand}");
  // or add many 
  toppings.addAll({"Tina":"Sausages", "Steve":"Bacon"});
  print("New toppings list: ${toppings}");

  Map<String, String> namesAndCourses = {};
  print(namesAndCourses);

  // delete items?
  toppings.remove("Steve");
  print(toppings);

  // delete all, clean the slate:
  toppings.clear();
  print("final list ${toppings}");
  
}