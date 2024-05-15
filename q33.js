var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
//using for loop 
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var oneNumber = number_1[_i];
    var numEnding = void 0;
    if (oneNumber === 1) {
        numEnding = "st";
    }
    else if (oneNumber === 2) {
        numEnding = "nd";
    }
    else if (oneNumber === 3) {
        numEnding = "rd";
    }
    else {
        numEnding = "th";
    }
    console.log("".concat(oneNumber).concat(numEnding));
}
