//make a function with rest parameter
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with the following items :\n");
    items.forEach(function (oneItem) { return console.log(oneItem); });
    console.log("\nenjoy your yumy sandwich");
}
//call the function
makeSandwich("chicken", "cheese", "lectuse", "egg", "mayo");
makeSandwich("big", "beef", "salad");
makeSandwich("kabab", "mayo");
