const authData = JSON.parse(sessionStorage.getItem('userData'));
let token;

if (!authData) {
    window.location.href = 'index.html'; // redirects to the page for quest users
} else {
    token = authData.token;
}

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', logout);

async function logout() {
    const url = 'http://localhost:3030/users/logout';

    try {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'X-Authorization': token
            }
        });

        if (response.ok) {
            sessionStorage.removeItem('userData');
            window.location.href = 'index.html'; // redirects to the page for quest users

        } else {
            throw new Error(`Error: ${response.status}(${response.statusText})`);
        }

    } catch (error) {
        console.error(error);
    }
}