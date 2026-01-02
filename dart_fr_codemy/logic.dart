void main(){

  String studentName = "Tom";
  // Logic
  // if
  var isStudent = true;
  if(isStudent){
    print("${studentName} is a student!");
  }

  // if else
  var isCitizen = false;
  if(isCitizen){
    print("${studentName} is a citizen");
  } else{
    print("${studentName} is an international student");
  }

  var gpa = 3.5;
  if(gpa <2){
    print("${studentName} needs to work on his gpa");
  } else if(gpa < 3.5){
    print("${studentName} is doing okay");
  } else{
    print("${studentName} has a really good gpa, he's passing");
  }
}