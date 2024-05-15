//make a function with rest parameter
function makeSandwich(...items : string[]){
console.log("\n making a sandwich with the following items :\n")
items.forEach(oneItem => console.log(oneItem));

console.log("\nenjoy your yumy sandwich")

}
//call the function
makeSandwich("chicken","cheese","lectuse","egg","mayo");
makeSandwich("big","beef","salad");
makeSandwich("kabab","mayo");