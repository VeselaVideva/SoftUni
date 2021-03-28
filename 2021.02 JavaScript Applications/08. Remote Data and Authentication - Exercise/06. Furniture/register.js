const registerForm = document.getElementById('registerForm');
const url = 'http://localhost:3030/users/register';

registerForm.addEventListener('submit', registerUser);

async function registerUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (email.trim() === '' || password.trim() === '' || rePass.trim() === '' || rePass.trim() !== password.trim()) {
        console.error('Invalid inputs');
        return;
    }

    const obj = {
        email,
        password
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        const data = await response.json();

        sessionStorage.setItem('userData', JSON.stringify({ token: data.accessToken, _id: data._id }));
        window.location.href = 'homeLogged.html'; // redirects to the page for logged in users

    } catch (error) {
        console.error(error);
    }
}