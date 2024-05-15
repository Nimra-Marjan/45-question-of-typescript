//making function with foreach to print name from the array one by one
function magiciansList(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function message(magicians) {
    return magicians.map(function (name) { return "the great tricks ".concat(name, " magicians"); });
}
//make array
var magiciansName = ["kazzi", "bisani", "pasha"];
//making a copy of orginal array through.slice function
var copyMagiciansName = magiciansName.slice();
//include message to copied array 
var copyMessage = message(copyMagiciansName);
//orginal 
console.log("original array ");
magiciansList(magiciansName);
//copied
console.log("copied array");
magiciansList(copyMessage);
