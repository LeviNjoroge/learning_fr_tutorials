import 'dart:io';

void main(){

  // user input type conversion

  print("Hello! Enter name please:");
  String? nameInput = stdin.readLineSync();
  print("Nice to meet you ${nameInput}\nHow old are you?");
  var ageInput = stdin.readLineSync();
  int age = int.parse(ageInput ?? '0');
  if (age > 18) {
    print("Welcome to the site $nameInput");
  }
  else{
    print("Sorry ${nameInput}, you are too young to access this site!");
  }
}