import { html, render } from 'https://unpkg.com/lit-html?module';

const listTemplate = (data) => html`
    <ul>
        ${data.map(t => html`<li>${t}</li>`)}
    </ul>`;

document.getElementById('btnLoadTowns').addEventListener('click', updateList);

function updateList(e) {
    e.preventDefault();
    const root = document.getElementById('root');

    const townsAsString = document.getElementById('towns').value;
    const towns = townsAsString.split(',').map(x => x.trim());

    if (townsAsString !== '') {
        const result = listTemplate(towns);
        render(result, root);
    }
}