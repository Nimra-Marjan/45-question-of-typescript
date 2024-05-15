 //making function with foreach to print name from the array one by one
 function magiciansList(magicians : string []){
    magicians.forEach(name => console.log(name));
}
function message(magicians : string[]){
    return magicians.map(name => `the great tricks ${name} magicians`)
}




//make array
let magiciansName =["kazzi", "bisani" ,"pasha"];
//call function
(message(magiciansName));
console.log(message(magiciansName));
//call for each function
magiciansList(message(magiciansName));
