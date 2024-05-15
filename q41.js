//making function with foreach to print name from the array one by one
function magiciansList(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//make array
var magiciansName = ["kazzi", "bisani", "pasha"];
//call function
magiciansList(magiciansName);
