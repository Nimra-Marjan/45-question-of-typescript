function makeShirt(size, messagePrint) {
    if (size === void 0) { size = "large"; }
    if (messagePrint === void 0) { messagePrint = "i love TS :)"; }
    console.log("you order ".concat(size, " size shirt with printed message on it  ").concat(messagePrint));
}
makeShirt();
makeShirt("meduim", "i'm a programer");
makeShirt("small");
