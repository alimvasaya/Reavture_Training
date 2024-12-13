function greetPeople(greeting: string = "Hello", ...people: string[]): string {
    let greetings = "";
    for (let i = 0; i < people.length; i++) {
        greetings += `${greeting}, ${people[i]}! `;
    }
    return greetings;
}

function checkTiredness(isTired?: boolean): string {
    if (isTired === undefined) {
        return "I can't tell if you're tired, but you probably are!";
    } else if (isTired) {
        return "You look exhausted! Take a nap.";
    } else {
        return "You're as fresh as a daisy! Keep going!";
    }
}

function shouldEatCookie(mood: string = "sad"): string {
    if (mood === "happy") {
        return "Cookies are not necessary but they are still appreciated!";
    } else if (mood === "sad") {
        return "Eat the cookie its therapy in a bite";
    } else {
        return "Are you sure youre in the right mood for a cookie?";
    }
}

function countdown(start: number): void {
    let i = start;
    while (i > 0) {
        console.log(i);
        i--;
    }
    console.log("Countdown finished");
}

function cookieMonster(): void {
    let cookiesEaten = 0;
    let isFull = false;

    do {
        cookiesEaten++;
        console.log(`Yum! Cookie #${cookiesEaten}`);
        if (cookiesEaten === 5) {
            isFull = true;
            console.log("Okay, that's enough cookies for now...");
        }
    } while (!isFull);
}

function main(): void {
    console.log(greetPeople("Hi", "Alice", "Bob", "Charlie"));
    console.log(checkTiredness(true));
    console.log(shouldEatCookie("sad"));
    countdown(5);
    cookieMonster();  
    for (let i = 0; i < 100; i++) {
        if (i === 42) {
            console.log("Stop! 42 is the answer to life, the universe, and everything.");
            break;
        }
    }
}

main();