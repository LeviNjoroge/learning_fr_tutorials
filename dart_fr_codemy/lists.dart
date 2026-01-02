void main(){
  // lists

  // declaration using var
  var myList = [7, 2, 4];
  print(myList);

  // declaration using List
  List fruits = ["Mangoes", "Oranges", "Apples"];
  print(fruits);

  // specifying the datatype of the list
  List<int> myNums = [1, 2, 3];
  print(myNums);

  // different datatypes in the same list
  var manyTypes = ["Levi", 20, 5.5];
  print("manyTypes: ${manyTypes}");

  // you can only specify type using List declaration
  // var<double> myDoubles = [2.1, 3.4];
  // print(myDoubles);

  print("First item in 'fruits': ${fruits[0]}");

  // create an empty list 
  var emptyList = [];

  // add an item to a list, empty or not
    // not
    myNums.add(4);
    print("myNums: ${myNums}");

    // empty
    emptyList.add("001");
    print("emptyList: ${emptyList}");

      // what if I use a diff way for empty
      // emptyList[1] = 100;
      // print("diff way for emptyList: ${emptyList}");
      // DID NOT WORK

  // add many items to a list 
  emptyList.addAll([100, 101, 110]);
  print("emptyList: ${emptyList}");

  // add items to specific position 
  fruits.insert(2, "Pineapples");
  print(fruits);
    
    // can I use insert for add
    emptyList.insert(4, 111);
    print("insert in place of add, emptyList: ${emptyList}");
    //WORKS, down side, you have to know the size of the list

  fruits.insertAll(0, ["Apples", "Blueberries"]);
  print(fruits);

  // 
}