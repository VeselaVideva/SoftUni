import { html, render } from '../../node_modules/lit-html/lit-html.js';

const notificationTemplate = (message) => html`
    <div id="notification" @click=${clear}>
        ${message}<span class="clear">\u2715</span>
    </div>`;

const div = document.createElement('div');
document.body.appendChild(div);

export function notify(message) {
    render(notificationTemplate(message), div);
    setTimeout(clear, 5000);
}

export function clear() {
    render('', div);
}