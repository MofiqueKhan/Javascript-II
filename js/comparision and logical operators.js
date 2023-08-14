console.log("hello World..!");

// ----->>>> comparision operators <<<<-----

// double equal to ( == ) & triple Equal to ( === )

console.log(5 == 5); //true
console.log(5 == 6); //false
console.log(5 == "5"); //true  OOPS !!! coz of double equals to perform conversion.

console.log(5 === 5); //true
console.log(5 === 6); //false
console.log(5 === "5"); //false  triple equals to is used for strictly checks & can't perform conversion.

// not equals to ( != )

console.log(5 != 5); //false
console.log(5 != 8); //true
console.log(5 !== "8"); //true  "!==" It checks also data types.

//greater than ( > ) & less than ( < )

console.log(3 > 2); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(3 >= 1); // true

// ----->>>> logical operators <<<<-----

// && operator

console.log(5 > 2 && 2 < 4); //true
console.log(5 > 2 && 6 < 4); //false   both values have to be true then we got result true otherwise we get false.

// || Operator

console.log(5 > 2 || 2 < 4); //true
console.log(5 > 2 || 6 < 4); //true only one value need to be true then we got result true. if both values are false then we get in result false.

// not operator (!)

console.log(!(6 == 5)); //true it is use for inverse.

