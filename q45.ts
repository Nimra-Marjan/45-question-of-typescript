function carinfo(making ,model , ...options ){


let car ={
    making: making
    model: model
};
//add extra option in the car info function
options.forEach( a=> {
    let[ key , value ]= a.split(":");
    car[key.trim()] = value.trim(); 
});
return car;
}
//call the function to creat a car object
let buy = carinfo("toyo","hilux","color:black","featurs:[sunroof, auto,]",);
console.log(buy);