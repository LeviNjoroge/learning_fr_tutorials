/*  we have three ways to declare a variable:
1. var - has a function scope ***
2. let - has a block scope
3. const - has a block scope ***
*/

// var
for(i=0;i<10;i++){
    var sum = 0
    sum+= i;
}
console.log(sum);

// let
for(i=1;i<10;i++){
    let product = 1
    product*= i;
}
console.log(product); // this results in an error because a variable defined using let can only be accessed in the block its defined in


