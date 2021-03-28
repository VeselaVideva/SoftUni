import { render } from 'https://unpkg.com/lit-html?module';
import * as api from './data.js';
import { layoutTemplate } from './main.js';

const context = {
    list: [],
    async load() {
        context.list = await api.getAllBooks();
        update();
    },
    onEdit(id) {
        const book = context.list.find(b => b._id === id);
        update(book);
    },
    async onDelete(id) {
        const confirmed = confirm('Are you sure you want to delete this book?');
        if (confirmed) {
            await api.deleteBook(id);
        }
    }
};

document.body.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit[e.target.id](formData, e.target);
});

start();

async function start() {
    update();
}

function update(book) {
    const result = layoutTemplate(context, book);
    render(result, document.body);
}

const onSubmit = {
    'add-form': onCreateSubmit,
    'edit-form': onEditSubmit
};

async function onCreateSubmit(formData, form) {
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    if (book.title !== '' && book.author !== '') {
        await api.createBook(book);
    }

    form.reset();
}

async function onEditSubmit(formData, form) {
    const id = formData.get('_id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.updateBook(id, book);
    form.reset();
    update();
}
