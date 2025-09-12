let name = "Joe"
let age = 21
let gender = "male"

const message1 = name+" is a good "+(gender=="male")?"boy":"girl"+"\n"+
                "He is "+age+" years old";

const message2 = `${name} is a good ${gender=="male"?"boy":"girl"}
he is ${age} years old`

console.log(message1)