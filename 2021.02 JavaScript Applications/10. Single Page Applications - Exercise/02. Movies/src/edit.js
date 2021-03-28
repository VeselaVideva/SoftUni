import { showDetails } from './details.js';

export async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const id = document.querySelector('.row.bg-light.text-dark').id;

    const editedMovie = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('imageUrl')
    }

    if (editedMovie.title === '' || editedMovie.description === '' || editedMovie.img === '') {
        return alert('All fields are required!');
    }

    const response = await fetch(`http://localhost:3030/data/movies/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('authToken')
        },
        body: JSON.stringify(editedMovie)
    });

    if (response.ok) {
        const movie = await response.json();
        showDetails(id);
    } else {
        const error = await response.json();
        alert(error.message);
    }
}

let main;
let section;

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit', (event) => onSubmit(event));
}

export async function showEdit() {
    main.appendChild(section);

    const movie = {
        id: document.querySelector('.row.bg-light.text-dark').id,
        title: document.querySelector('h1').textContent.substring(12),
        description: document.querySelector('.col-md-4.text-center p').textContent,
        img: document.querySelector('.img-thumbnail').src
    }

    let currTitle = document.querySelector('input[name="title"]');
    currTitle.value = movie.title;

    let currDescription = document.querySelector('textarea[name="description"]');
    currDescription.value = movie.description;

    let currImg = document.querySelector('input[name="imageUrl"]');
    currImg.value = movie.img;
}