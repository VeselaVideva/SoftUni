const endpoint = 'http://localhost:3030/jsonstore/collections/books';

async function request(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

async function getAllBooks() {
    return Object.entries(await request(endpoint)).map(([k, v]) => Object.assign(v, { _id: k }));
}

async function getBookById(id) {
    return await request(endpoint + '/' + id);
}

async function createBook(book) {
    return await request(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
}

async function updateBook(id, book) {
    return await request(endpoint + '/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
}

async function deleteBook(id) {
    return await request(endpoint + '/' + id, {
        method: 'DELETE'
    });
}

export {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}