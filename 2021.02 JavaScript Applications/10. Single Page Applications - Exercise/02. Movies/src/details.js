import { e } from './dom.js';
import { showHome } from './home.js';
import { showEdit } from './edit.js';

async function getLikesByMovieId(id) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const data = await response.json();
    return data;
}

async function getOwnLikesByMovieId(id) {
    const userId = sessionStorage.getItem('userId');
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
    const data = await response.json();
    return data;
}

async function getMovieById(id) {
    const response = await fetch(`http://localhost:3030/data/movies/${id}`);
    const data = await response.json();
    return data;
}

async function onDelete(event, id) {
    event.preventDefault();

    const confirmed = confirm('Are you sure you want to delete this movie?');

    if (confirmed) {
        const response = await fetch(`http://localhost:3030/data/movies/${id}`, {
            method: 'DELETE',
            headers: { 'X-Authorization': sessionStorage.getItem('authToken') }
        });

        if (response.ok) {
            alert('Movie deleted!');
            showHome();
        } else {
            const error = await response.json();
            alert(error.message);
        }
    }
}

function createMovieCard(movie, likes, ownLike) {
    const element = e('div', { class: 'container' }); // main container

    const row = e('div', { class: 'row bg-light text-dark', id: `${movie._id}` });
    const rowTitle = e('h1', {}, `Movie title: ${movie.title}`);
    row.appendChild(rowTitle);
    const colImg = e('div', { class: 'col-md-8' });
    row.appendChild(colImg);
    const thumbnail = e('img', { class: 'img-thumbnail', src: `${movie.img}`, alt: 'Movie' });
    colImg.appendChild(thumbnail);

    const controls = e('div', { class: 'col-md-4 text-center' });
    const h3 = e('h3', { class: 'my-3' }, 'Movie Description');
    controls.appendChild(h3);
    const p = e('p', {}, `${movie.description}`);
    controls.appendChild(p);

    const userId = sessionStorage.getItem('userId');

    if (userId !== null) {
        if (userId === movie._ownerId) {
            let deleteBtn = e('a', { class: 'btn btn-danger', href: 'javascript:void(0)' }, 'Delete');
            deleteBtn.addEventListener('click', (event) => onDelete(event, movie._id));
            controls.appendChild(deleteBtn);

            let editBtn = e('a', { class: 'btn btn-warning', href: 'javascript:void(0)' }, 'Edit');
            editBtn.addEventListener('click', (event) => showEdit(event, movie._id)); // in progress
            controls.appendChild(editBtn);

        } else if (ownLike.length === 0) {
            let likeBtn = e('a', { class: 'btn btn-primary', href: 'javascript:void(0)' }, 'Like');
            likeBtn.addEventListener('click', (event) => likeMovie(event, movie._id));
            controls.appendChild(likeBtn);
        }
    }

    const likesSpan = e('span', { class: 'enrolled-span' }, `Liked ${likes}`);
    controls.appendChild(likesSpan);

    row.appendChild(controls);
    element.appendChild(row);

    return element;

    async function likeMovie(event) {
        const response = await fetch('http://localhost:3030/data/likes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify({ movieId: movie._id })
        });

        if (response.ok) {
            event.target.remove();
            likes++;
            likesSpan.textContent = `Liked ${likes}`;
            alert('You liked this movie!'); // alert user that this movie is liked
            showDetails(movie._id); // reload same movie details
        }
    }
}

let main;
let section;

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {
    section.innerHTML = '';
    main.innerHTML = '';
    main.appendChild(section);

    const [movie, likes, ownLike] = await Promise.all([
        getMovieById(id),
        getLikesByMovieId(id),
        getOwnLikesByMovieId(id)
    ]);

    const card = createMovieCard(movie, likes, ownLike);
    section.appendChild(card);
}