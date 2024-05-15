//Seeing the World: Think of at least five places in the world you’d like to visit.
let visitCountry=["turkey","china","maldive","india","pahlastin"];
console.log("orginal order",visitCountry);

//in alphabetic order
console.log("in order",[...visitCountry].sort());

//still same array
console.log("still same array",visitCountry);

//array in reverse order without chnge orginal array 
console.log("reverse order:",[...visitCountry].reverse());

//still same array 
console.log("still same array",visitCountry);

//change orginal array in reverse form
console.log("orginal array reverse:" ,visitCountry.reverse());

//use reverse option to chnge the array in orginal order
console.log("back to orginal order", visitCountry.reverse());

//array order chnge in alphabtic order
console.log("sort the array in alphabetical order:",visitCountry.sort());

//change orginal array in reverse form again
console.log("orginal array reverse again:" ,visitCountry.reverse());

