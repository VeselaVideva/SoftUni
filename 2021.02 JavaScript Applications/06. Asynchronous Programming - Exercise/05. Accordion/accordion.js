async function solution() {
    try {
        const data = await getData();
        const id = await getId(data);

        Object.values(data).map(await createAccordion);

    } catch (err) {
        alert(`Error: ${err.message}`);
    }

    document.getElementById('main').addEventListener('click', toggle);
}

function toggle(event) {
    const button = event.target;
    const divExtra = event.target.parentNode.parentNode.children[1];

    divExtra.style.display = divExtra.style.display === 'block' ? 'none' : 'block';
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
}

async function getData() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();

    return data;
}

async function getId(data) {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details');
    const idList = await response.json();

    const id = Object.keys(idList).find(x => x.id === data.id);

    return id;
}

async function createAccordion(id) {
    const main = document.getElementById('main');

    const accordion = e('div', { class: 'accordion' });
    const head = e('div', { class: 'head' });
    accordion.appendChild(head);
    const title = e('span', {}, `${id.title}`);
    head.appendChild(title);
    const btn = e('button', { class: 'button', id: `${id._id}` }, 'More');
    head.appendChild(btn);
    const extra = e('div', { class: 'extra' });
    accordion.appendChild(extra);

    const idValue = id._id;
    const contentData = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${idValue}`);
    const text = await contentData.json();

    const paragraph = e('p', {}, `${text.content}`);
    extra.appendChild(paragraph);

    main.appendChild(accordion);
}

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