var currentUser = ["king", "mano", "rida", "jiya ", "saika", "rani",];
var newUser = ["vishah", "hiba", "Rida", "mahira", "rani"];
// CHeak username avalibility foe new user through loop function
newUser.forEach(function (newONEUser) {
    if (currentUser.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newONEUser.toLowerCase(); })) {
        console.log("sorry, ".concat(newONEUser, " this name is already using by otheruser"));
    }
    else {
        console.log("HELLO ".concat(newONEUser, " this name is avaliable"));
    }
});
