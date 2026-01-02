void main(){

  // Loops
  // for loop
  for (var i = 5; i>=1;i--){
    print(i);
  }
  
  // for in loop
  // used to do sth to some list iteratively
  List names = ["Amina", "Brian", "Collins", "Denis"];
  for(var name in names){
    print(name);
  }

  // while
  var num = 1;
  while(num <= 10){
    print(num);
    num++;
  }
}