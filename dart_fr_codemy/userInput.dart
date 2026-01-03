import 'dart:io';

void main(){

  // user Input
  print("Enter your name");

  // can declare a variable with var, dynamic, or nullable type ie <datatype>? as shown below
  String? name = stdin.readLineSync();

  print("Hello ${name}");
}