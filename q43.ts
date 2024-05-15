//making function with foreach to print name from the array one by one
function magiciansList(magicians : string []){
    magicians.forEach(name => console.log(name));
}
function message(magicians : string[]){
    return magicians.map(name => `the great tricks ${name} magicians`)
}




//make array
let magiciansName =["kazzi", "bisani" ,"pasha"];

//making a copy of orginal array through.slice function
let copyMagiciansName =     magiciansName.slice()

//include message to copied array 
let copyMessage = message(copyMagiciansName)

//orginal 
console.log("original array ");
magiciansList(magiciansName);

//copied
console.log("copied array");
magiciansList(copyMessage);