import { e } from './dom.js';
import { showDetails } from './details.js';

async function getMovies() {
    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();
    return data;
}

function createMoviePreview(movie) {
    const element = e('div', { class: 'card mb-4', id: `${movie._id}` });

    const cardImg = e('img', { class: 'card-img-top', src: `${movie.img}`, alt: 'Card image cap', width: '400' })
    element.appendChild(cardImg);

    const cardBody = e('div', { class: 'card-body' });
    element.appendChild(cardBody);

    const bodyTitle = e('h4', { class: 'card-title' }, `${movie.title}`);
    cardBody.appendChild(bodyTitle);

    const cardFooter = e('div', { class: 'card-footer' });
    element.appendChild(cardFooter);

    const detailsBtn = e('button', { class: 'btn btn-info movieDetailsLink', id: `${movie._id}` }, 'Details');
    detailsBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const movieId = event.target.parentNode.parentNode.id; // get current movie card ID

        showDetails(movieId);
    });
    cardFooter.appendChild(detailsBtn);

    return element;
}

let main;
let section;
let container;
let isLogged;

export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    container = section.querySelector('.card-deck.d-flex.justify-content-center');
}

export async function showHome() {
    container.innerHTML = 'Loading...';
    main.innerHTML = '';
    main.appendChild(section);

    const addMovieBtn = document.getElementById('createLink');
    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        addMovieBtn.style.display = 'inline-block';
    } else {
        addMovieBtn.style.display = 'none';
    }

    const movies = await getMovies();
    const cards = movies.map(createMoviePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));

    container.innerHTML = '';
    container.appendChild(fragment);
}