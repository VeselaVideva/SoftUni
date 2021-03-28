const loginForm = document.getElementById('loginForm');
const loginURL = 'http://localhost:3030/users/login';

loginForm.addEventListener('submit', loginUser);

async function loginUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() === '' || password.trim() === '') {
        console.error('Invalid inputs');
        return;
    }

    const obj = {
        email,
        password
    }

    try {
        const response = await fetch(loginURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}(${response.statusText})`);
        }

        const data = await response.json();

        sessionStorage.setItem('userData', JSON.stringify({ token: data.accessToken, _id: data._id }));

        window.location.href = 'homeLogged.html'; // redirects to the page for logged in users

    } catch (error) {
        console.error(error);
    }
}