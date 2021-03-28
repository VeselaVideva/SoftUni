import { html, render } from '../../node_modules/lit-html/lit-html.js';

const modalTemplate = (message, onChoice) => html`
    <div id="modal">
        <p>${message}</p>
        <button @click=${() => onChoice(true)} class="modal-btn">Ok</button>
        <button @click=${() => onChoice(false)} class="modal-btn">Cancel</button>
    </div>`;

const overlay = document.createElement('div');
overlay.id = 'overlay';

export function createModal(message, callback) {
    render(modalTemplate(message, onChoice), overlay);
    document.body.appendChild(overlay);

    function onChoice(choice) {
        clearModal();
        callback(choice);
    }
}

function clearModal() {
    overlay.remove();
}