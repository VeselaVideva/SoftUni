import { e } from '../dom.js';
import { getIdeas } from '../api/data.js';

function createIdeaPreview(idea) {
    const element = e('div', { className: 'card overflow-hidden current-card details' });
    element.style.width = '20%';
    element.style.height = 'auto';

    element.innerHTML = `
        <div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}" alt="Card image cap">
        <a id="${idea._id}" class="btn" href="">Details</a>`;

    return element;
}

export function setupDashboard(section, navigation) {
    section.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            e.preventDefault();
            const ideaId = e.target.id;
            navigation.goTo('details', ideaId);
        }
    });

    return showDashboard;

    async function showDashboard() {
        section.innerHTML = '';
        const ideas = await getIdeas();

        if (ideas.length === 0) {
            section.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`;
        } else {
            const cards = ideas.map(createIdeaPreview);
            cards.forEach(c => section.appendChild(c));
        }

        return section;
    }
}