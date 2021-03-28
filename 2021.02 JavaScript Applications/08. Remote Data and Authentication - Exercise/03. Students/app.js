function request(base, uri, headers = {}) {
    const url = `${base}/${uri}`;
    return fetch(url, headers).then(serverResponse).then(response => response.json()).catch(errorHandler);
}

function serverResponse(data) {
    if (!data.ok) {
        throw new Error(data.status);
    }
    return data;
}

function errorHandler(error) {
    alert(error);
    throw new Error(`${error.message}`);
}

const dom = {
    tbody: document.getElementById('tbody'),
    submit: document.getElementById('submit'),
    inputs: document.querySelectorAll('#id, #firstName, #lastName, #facultyNumber, #grade')
}

const urls = {
    base: 'http://localhost:3030/jsonstore/collections',
    path: 'students'
}

loadStudents();

function loadStudents() {
    request(urls['base'], urls['path']).then(renderHTML).catch(errorHandler);
}

function renderHTML(data) {
    const html = Object.values(data).map(template).join('');

    dom['tbody'].innerHTML = html;
}

function template(dataValue) {
    return `
        <tr>
            <td>${dataValue.firstName}</td>
            <td>${dataValue.lastName}</td>
            <td>${dataValue.facultyNumber}</td>
            <td>${dataValue.grade}</td>
        </tr>`;
}

dom['submit'].addEventListener('click', addNewStudent);

function addNewStudent(event) {
    event.preventDefault();

    const inputs = validateDate(dom['inputs']);

    const data = Array.from(inputs).reduce((a, b) => Object.assign(a, { [b.id]: b.value }), {});

    request(urls['base'], urls['path'], {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(loadStudents).catch(errorHandler);
}

function validateDate(data) {
    const check = Array.from(data).every(x => x.value !== '');
    if (check) {
        return data;
    }
    errorHandler('Wrong input data!');
}