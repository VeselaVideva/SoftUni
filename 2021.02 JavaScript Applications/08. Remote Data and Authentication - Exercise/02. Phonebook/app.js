// my function for creating DOM elements
function e(type, attributes, text) {
    const el = document.createElement(type);
    for (let key in attributes) {
        el.setAttribute(key, attributes[key]);
    }
    if (text) {
        el.textContent = text;
    }
    return el;
}

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

async function attachEvents() {
    try {
        document.getElementById('btnLoad').addEventListener('click', getPhones);
        document.getElementById('createForm').addEventListener('submit', addContact);
        document.getElementById('phonebook').addEventListener('click', deleteContact);

    } catch (err) {
        alert(`Error: ${err.message}`);
        throw new Error(`Error: ${err.message}`);
    }
}

attachEvents();

async function getPhones() {
    const contacts = await request('http://localhost:3030/jsonstore/phonebook');

    const contact = Object.entries(contacts).map(createLi).join('');

    document.getElementById('phonebook').innerHTML = contact;
}

function createLi([id, contact]) {
    return `
        <li data-id="${id}">${contact.person}: ${contact.phone}
            <button class="btnDelete">Delete</button>
        </li>`;
}

async function addContact(event) {
    event.preventDefault();

    const person = document.getElementById('person').value;
    const phone = document.getElementById('phone').value;

    if (person === '' || phone === '') {
        alert('All fields are required.');
        throw new Error('All fields are required.');
    }

    const formData = new FormData(event.target);
    const id = formData.get('id');

    const contact = {
        person: formData.get('person'),
        phone: formData.get('phone'),
    };

    await request(`http://localhost:3030/jsonstore/phonebook/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    });

    event.target.reset(); // clears the form
    getPhones(); // auto load all contacts
}

async function deleteContact(event) {
    if (event.target.className === 'btnDelete') {
        const confirmed = confirm('Are you sure you want to delete this contact?');

        if (confirmed) {
            const contactId = event.target.parentNode.dataset.id;

            await request(`http://localhost:3030/jsonstore/phonebook/${contactId}`, {
                method: 'DELETE'
            });

            getPhones(); // auto load all contacts
        }
    }
}