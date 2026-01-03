import 'dart:io';

void main(){

  // user input type conversion

  print("Hello! Enter name please:");
  String? name = stdin.readLineSync();
  print("Nice to meet you ${name}\n How old are you?");
  var age = stdin.readLineSync();
  age? = int.parse(age);
  if (age > 18) {
    print("Welcome to the site $name");
  }
  else{
    print("Sorry ${name}, you are too young to access this site!");
  }
}