let str="33aa"
let bool=true

// conversion operations

let num=Number(str)
let num1=Number(bool)

//console.log(typeof num)
//console.log(num)

//console.log(typeof num1)
//console.log(num1)

/*
here the string value coneverted like this
"33"=>33
"33aa"=>NaN (Not a Number)

here the boolean value converted like this
true=>1
false=>0

same in number to boolean also

so can do conversion operations like this
string to boolean

""=>false
"abc"=>true
" "=>true(Space is also a character)
*/
let bool1=Boolean(str)

console.log(bool1)