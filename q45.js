function carinfo(making, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        making: making,
        model: model
    };
    //add extra option in the car info function
    options.forEach(function (a) {
        var _a = a.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to creat a car object
var buy = carinfo("toyo", "hilux", "color:black", "featurs:[sunroof, auto,]");
console.log(buy);
