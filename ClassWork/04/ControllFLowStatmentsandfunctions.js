function greetPeople(greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    var people = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        people[_i - 1] = arguments[_i];
    }
    var greetings = "";
    for (var i = 0; i < people.length; i++) {
        greetings += "".concat(greeting, ", ").concat(people[i], "! ");
    }
    return greetings;
}
function checkTiredness(isTired) {
    if (isTired === undefined) {
        return "I can't tell if you're tired, but you probably are!";
    }
    else if (isTired) {
        return "You look exhausted! Take a nap.";
    }
    else {
        return "You're as fresh as a daisy! Keep going!";
    }
}
function shouldEatCookie(mood) {
    if (mood === void 0) { mood = "sad"; }
    if (mood === "happy") {
        return "Cookies are not necessary, but they are still appreciated!";
    }
    else if (mood === "sad") {
        return "Eat the cookie! It's therapy in a bite!";
    }
    else if (mood === "confused") {
        return "Cookies will help you figure it out... maybe.";
    }
    else {
        return "Are you sure you're in the right mood for a cookie?";
    }
}
function countdown(start) {
    var i = start;
    while (i > 0) {
        console.log(i);
        i--;
    }
    console.log("BOOM! Countdown finished.");
}
function numberFun() {
    for (var i = 1; i <= 10; i++) {
        if (i === 1) {
            console.log("1: The loneliest number... but it’s still a number!");
        }
        else if (i === 5) {
            console.log("5: The middle child of numbers... Not too big, not too small.");
        }
        else if (i === 10) {
            console.log("10: Perfection in number form!");
        }
        else {
            console.log("".concat(i, ": Just another number in the great cosmic soup."));
        }
    }
}
function cookieMonster() {
    var cookiesEaten = 0;
    var isFull = false;
    do {
        cookiesEaten++;
        console.log("Yum! Cookie #".concat(cookiesEaten));
        if (cookiesEaten === 5) {
            isFull = true; // The cookie monster has had enough cookies.
            console.log("Okay, that's enough cookies for now...");
        }
    } while (!isFull);
}
function main() {
    console.log(greetPeople("Hi", "Alice", "Bob", "Charlie"));
    console.log(checkTiredness(true));
    console.log(shouldEatCookie("sad"));
    countdown(5);
    numberFun();
    cookieMonster();
    for (var i = 0; i < 100; i++) {
        if (i === 42) {
            console.log("Stop! 42 is the answer to life, the universe, and everything.");
            break;
        }
    }
}
main();
