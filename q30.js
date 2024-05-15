var userName = ["ali", "ahmed", "admin", "abeer", "abrish"];
// using  for each loop on array
userName.forEach(function (userName) {
    if (userName === "admin") {
        console.log("hello ".concat(userName, " would you like to cheak status update"));
    }
    else {
        console.log("hello  ".concat(userName, " thank you for logging in again."));
    }
});
