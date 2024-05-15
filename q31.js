var userName = ["ali", "ahmed", "admin", "abeer", "abrish"];
userName = [];
if (userName.length === 0) {
    console.log("empty array we need to find out new users");
}
else {
    userName.forEach(function (userName) {
        if (userName === "admin") {
            console.log("hello ".concat(userName, " would you like to cheak status update"));
        }
        else {
            console.log("hello  ".concat(userName, " thank you for logging in again."));
        }
    });
}
