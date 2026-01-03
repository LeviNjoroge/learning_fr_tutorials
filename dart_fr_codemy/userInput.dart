import 'dart:io';

void main(){

  // user Input
  print("Enter your name");

  // can declare a variable with 
  String? name = stdin.readLineSync();

  print("Hello ${name}");
}