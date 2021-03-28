import { html, render } from 'https://unpkg.com/lit-html?module';
import { cats } from './catSeeder.js';

const section = document.getElementById('allCats');

const catCardTemplate = (cat) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`;

const catsList = html`
    <ul @click=${toggleStatus}>
        ${cats.map(catCardTemplate)}
    </ul>`;

render(catsList, section);

function toggleStatus(e) {
    const el = e.target.parentNode.querySelector('.status');
    let btn = e.target;

    let isHidden = el.style.display === 'none';
    el.style.display = isHidden ? 'block' : 'none';

    let showText = e.target.textContent === 'Show status code';
    btn.textContent = showText ? 'Hide status code' : 'Show status code';
}
