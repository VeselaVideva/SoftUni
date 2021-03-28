// helper f() for requests
async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

// f() to load all books from server and display them
async function getAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    const rows = Object.entries(books).map(createRow).join('');

    document.querySelector('tbody').innerHTML = rows;
}

function createRow([id, book]) {
    const result = `
        <tr data-id="${id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>`;

    return result;
}

// f() for creating a new book
async function createBook(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    event.target.reset(); // clears the form
    getAllBooks(); // auto load all books
}

// f() for updating an existing book using ID
async function updateBook(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const id = formData.get('id'); // the ID is from the hidden input

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';

    event.target.reset(); // clears the form
    getAllBooks(); // auto load all books
}

// f() for deleting an existing book using ID
async function deleteBook(id) {
    await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'DELETE'
    });

    getAllBooks(); // auto load all books
}

// main f()
// - attach event listeners
// - load all books and display them
function start() {
    // event listener on the Load button
    document.getElementById('loadBooks').addEventListener('click', getAllBooks);

    // event listener on the Create button
    document.getElementById('createForm').addEventListener('submit', createBook);

    // event listener on the Edit button
    document.getElementById('editForm').addEventListener('submit', updateBook);

    // event listeners on the Delete and Edit buttons
    document.querySelector('table').addEventListener('click', handleTableClick);

    getAllBooks(); // auto load all books
}

start();

function handleTableClick(event) {
    if (event.target.className === 'editBtn') {
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';

        const bookId = event.target.parentNode.parentNode.dataset.id;

        loadBookForEdit(bookId); // pass book ID to f()

    } else if (event.target.className === 'deleteBtn') {
        const confirmed = confirm('Are you sure you want to delete this book?');

        if (confirmed) {
            const bookId = event.target.parentNode.parentNode.dataset.id;

            deleteBook(bookId);
        }
    }
}

async function loadBookForEdit(id) {
    const book = await request(`http://localhost:3030/jsonstore/collections/books/${id}`);

    document.querySelector('#editForm [name="id"]').value = id;
    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="author"]').value = book.author;
}