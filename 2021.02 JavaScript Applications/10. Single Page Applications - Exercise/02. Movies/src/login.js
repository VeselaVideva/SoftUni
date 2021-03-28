import { showHome } from './home.js';

export async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        event.target.reset();

        const data = await response.json();

        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('userId', data._id);
        sessionStorage.setItem('email', data.email);

        document.getElementById('welcome-msg').textContent = `Welcome ${email}`;
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .quest')].forEach(l => l.style.display = 'none');

        showHome();

    } else {
        const error = await response.json();
        alert(error.message);
    }
}

let main;
let section;

export async function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}