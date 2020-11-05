function schoolLibrary(input) {
    let books = input.shift().split('&');

    for (let command of input) {
        if (command === 'Done') {
            break;
        } else {
            let [action, book] = command.split(' | ');

            if (action === 'Add Book') {
                if (!books.includes(book)) {
                    books.unshift(book);
                }
            } else if (action === 'Take Book') {
                if (books.includes(book)) {
                    books.splice(books.indexOf(book), 1);
                }
            } else if (action === 'Swap Books') {
                let [action, book1, book2] = command.split(' | ');
                if (books.includes(book1) && books.includes(book2)) {
                    let index1 = books.indexOf(book1); // for swapping elements, we need their indices
                    let index2 = books.indexOf(book2);
                    let temp = books[index1];
                    books.splice(index1, 1, books[index2]);
                    books.splice(index2, 1, temp);
                }
            } else if (action === 'Insert Book') {
                books.push(book);
            } else if (action === 'Check Book') {
                let index = Number(book);
                if (index >= 0 && index < books.length) { // index is valid
                    console.log(books[index]); // print the name of the book on the given index
                }
            }
        }
    }
    console.log(books.join(', '));
}

schoolLibrary([
        'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
        'Add Book | The Odyssey',
        'Take Book | Don Quixote',
        "Insert Book | Alice's Adventures in Wonderland",
        'Check Book | 3',
        'Done',
        '',
        '',
        '']);
// Hamlet
// The Odyssey, The Great Gatsby, Moby Dick, Hamlet, Alice's Adventures in Wonderland

schoolLibrary([
        'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
        'Add Book | David Copperfield',
        'Add Book | One Thousand and One Nights',
        'Swap Books | One Thousand and One Nights | Catch-22',
        'Take Book | David Copperfield',
        'Insert Book | The Stories of Anton Chekhov',
        'Check Book | 17',
        'Done',
        '']);
// Catch-22, Anna Karenina, Heart of Darkness, One Thousand and One Nights,  The Stranger, The Stories of Anton Chekhov