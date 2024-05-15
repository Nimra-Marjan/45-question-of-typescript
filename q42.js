//making function with foreach to print name from the array one by one
function magiciansList(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function message(magicians) {
    return magicians.map(function (name) { return "the great tricks ".concat(name, " magicians"); });
}
//make array
var magiciansName = ["kazzi", "bisani", "pasha"];
//call function
(message(magiciansName));
console.log(message(magiciansName));
//call for each function
magiciansList(message(magiciansName));
