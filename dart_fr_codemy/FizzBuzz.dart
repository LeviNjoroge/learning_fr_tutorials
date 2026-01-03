

void main(){

  // FizzBuzz Interview quiz
  
  // approach, first check whether the number is divisible by both 3 and 5 
  // then check if divisible by either
  for (var i = 1; i<=100;i++){
    if(i%3==0 && i%5==0){
      print("${i} FizzBuzz!!");
    } else if(i%3==0){
      print("${i} Fizz!");
    } else if(i%5==0){
      print("${i} Buzz!");
    } else {
      print(i);
    }
  }
}