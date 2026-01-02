void main(){

  // functions

  myFunc(){
    return "Hello fellow functions!";
  }

  print(myFunc());

   // say hi to the user
  greeting(String name){
    return "Hello ${name}";
  }

  print(greeting("Philip"));

  introOnGuest(String name, homeTown, int age, [zipCode]){
    return "Welcome ${age} yr old ${name}, from ${homeTown} ${zipCode}!";
  }
  print(introOnGuest("Joseph", "Matare", 22));
}