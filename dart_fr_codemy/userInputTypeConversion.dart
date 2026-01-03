import 'dart:io';

void main(){

  // user input type conversion

  print("Hello! Enter name please:");
  String? name = stdin.readLineSync();
  print("Nice to meet you ${name}\n How old are you?");
  var age = stdin.readLineSync();
  age = age>0?int.parse(int):0;
  if (age > 18) {
    print("Welcome to the site $name");
  }
  else{
    print("Sorry ${name}, you are too young to access this site!");
  }
}