function oldBooks(input) {
    let index = 0;
    let searchedBook = input[index];
    index++;
    let currentBook = input[index];
    let bookCounter = 0;
    let bookFound = false;

    while (input[index] !== "No More Books") {
        if (input[index] === searchedBook) {
            bookFound = true;
            break;
        }
        currentBook = input[index];
        index++;
        bookCounter += 1;
    }

    if (!bookFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
    } else {
        console.log(`You checked ${bookCounter} books and found it.`);
    }
}

oldBooks(
    ["Troy",
    "Stronger",
    "Life Style",
    "Troy"]
);
oldBooks(
    ["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]
);
oldBooks(
    ["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]
);