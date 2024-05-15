 //making function with foreach to print name from the array one by one
 function magiciansList(magicians : string []){
    magicians.forEach(name => console.log(name));
}
//make array
let magiciansName =["kazzi", "bisani" ,"pasha"];
//call function
magiciansList(magiciansName);