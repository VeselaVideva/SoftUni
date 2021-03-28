const createForm = document.getElementById('createForm');

createForm.addEventListener('submit', create);

async function create(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get('name');
    const price = formData.get('price');
    const factor = formData.get('factor');
    const img = formData.get('img');

    if (name.trim() === '' || price.trim() === '' || factor.trim() === '' || img.trim() === '') {
        console.error('All inputs are required');
        return;
    }

    const createURL = 'http://localhost:3030/data/furniture';

    const obj = {
        name,
        price,
        decFactor: factor,
        img
    }

    try {
        const response = await fetch(createURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': JSON.parse(sessionStorage.getItem('userData')).token
            },
            body: JSON.stringify(obj)
        });

        if (response.ok) {
            window.location.href = 'homeLogged.html';
        } else {
            throw new Error(`Error: ${response.status}(${response.statusText})`);
        }

    } catch (error) {
        console.error(error);
    }
}