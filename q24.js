"use strict";
//test with strings
let a = "red";
let b = "RED";
//true statment
console.log("a is equal to red");
console.log(a == "red");
//false statment
console.log("a is not equalto red");
console.log(a != "red");
//TEST  with lower case
//true statment
console.log("a is equal to b after coverting b into lowercase ");
console.log(b.toLowerCase() == a);
//false statement
console.log("a is not equal to b after converting b into lowercase");
console.log(b.toLowerCase() != a);
let valueX = 6;
let valueY = 10;
//test wih numbers 
console.log("value y is not equal to value x");
console.log(valueY != valueX);
console.log("valuex is equalto value y");
console.log(valueX == valueY);
console.log("value x is greater than value y");
console.log(valueX > valueY);
console.log("value x is smaller than value y ");
console.log(valueX < valueY);
//greater or equal 
console.log("value x is greater than or equal to 5");
console.log(valueX >= 5);
//lessthan or equal
console.log("value y is lessthan or  equal to 5 ");
console.log(valueY <= 5);
//LOGICAL OPERATORS
//Llogical and && 
//let valueX = 6;
//let valueY = 10;
let cond1 = valueX < valueY; //true
let cond2 = valueY > valueX; //true
let cond3 = valueX == valueY; //false
let cond4 = valueX > valueY; //false
console.log("using logical and &&");
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 && cond3=", cond1 && cond3);
console.log("using logical  or ||");
//LOGICAL OPERATORS
//logical or||
console.log("cond1 || cond3=", cond1 || cond3);
console.log("cond3 || cond4=", cond3 || cond4);
//items include in array 
let guest = ["ali", "usama", "habib"];
console.log(" habib include in guest array?");
console.log(guest.includes("habib"));
