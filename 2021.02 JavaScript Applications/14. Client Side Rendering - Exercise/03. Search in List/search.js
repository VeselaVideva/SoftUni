import { html, render } from 'https://unpkg.com/lit-html?module';
import { towns } from './towns.js';

const listTemplate = (town) => html`
    <ul>
        ${town.map(t => html`<li>${t}</li>`)}
    </ul>`;

function loadList() {
    const townsDiv = document.getElementById('towns');

    const allTowns = listTemplate(towns.map(x => x.trim()));
    render(allTowns, townsDiv);
}

loadList();

document.querySelector('button').addEventListener('click', search);

function search(e) {
    e.preventDefault();

    const listItems = document.querySelectorAll('li');
    const input = document.getElementById('searchText').value;
    const result = document.getElementById('result');
    let sum = 0;

    for (let li of listItems) {
        if ((li.textContent).toLowerCase().includes(input.toLowerCase())) {
            li.classList.add('active');
            sum++;
        } else {
            li.removeAttribute('class');
        }
    }

    result.textContent = `${sum} matches found`;
}
