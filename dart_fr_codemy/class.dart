
void main(){
  Person Joe =Person("John", "Male", 20);
  print(Joe.displayData("white"));
}

class Person{
  String? name, sex;
  int? age;

  Person(String name,String sex,int age){
    this.name = name;
    this.sex = sex;
    this.age = age;
  }

  String displayData(String race){
    return "Name: ${name}\nSex: ${sex}\nAge: ${age} is ${race}";
  }
}