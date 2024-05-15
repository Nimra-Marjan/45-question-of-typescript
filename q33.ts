let number =[1,2,3,4,5,6,7,8,9,10,];
//using for loop 
for(let oneNumber of number){
let numEnding : string;
if(oneNumber === 1){
    numEnding= "st"}
else if(oneNumber === 2){
    numEnding = "nd"}
else if (oneNumber === 3){
    numEnding = "rd"}
    else{
        numEnding = "th"}
        console.log(`${oneNumber}${numEnding}`);
}
