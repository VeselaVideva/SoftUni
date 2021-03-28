// helper f() for requests
async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

// my function for creating DOM elements
function e(type, attributes, text) {
    const el = document.createElement(type);
    for (let key in attributes) {
        el.setAttribute(key, attributes[key]);
    }
    if (text) {
        el.textContent = text;
    }
    return el;
}

let isLogged = false;

// helper f() for check if a token exists in sessionStorage
async function getData() {
    const options = {
        method: 'GET',
        headers: {}
    }

    const token = sessionStorage.getItem('token');

    if (token !== null) {
        options.headers['X-Authorization'] = token;
        isLogged = true;
    }

    const response = await fetch('http://localhost:3030/data/records', options);

    return await response.json();
}

function attachEvents() {
    getData(); // check if we have a quest or a logged user

    if (isLogged === true) {
        // change navigation view
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';

        // replace the disabled button with input[type="submit"]
        document.getElementById('addCatchDisabled').style.display = 'none';
        document.getElementById('addCatch').style.display = 'inline-block';

        document.getElementById('addForm').addEventListener('submit', addCatch);
    }

    document.getElementById('load').addEventListener('click', loadCatches);

    // event listener and f() for logout
    document.getElementById('logoutBtn').addEventListener('click', async (ev) => {
        const token = sessionStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:3030/users/logout', {
                method: 'GET',
                headers: { 'X-Authorization': token }
            });

            if (response.ok) {
                sessionStorage.removeItem('token');

                // change navigation view
                document.getElementById('guest').style.display = 'inline-block';
                document.getElementById('user').style.display = 'none';

                window.location.href = 'index.html'; // redirects to index.html page

                // replace the input[type="submit"] with disabled button
                document.getElementById('addCatchDisabled').style.display = 'inline-block';
                document.getElementById('addCatch').style.display = 'none';

                sessionStorage.clear(); // clears everything in sessionStorage, not only the token

                return alert('You are successfully logged out!');
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }

        } catch (err) {
            console.error(err.message);
        }
    });
}

attachEvents();

async function loadCatches() {
    const response = await request('http://localhost:3030/data/catches', { method: 'GET' });

    const catches = Object.values(response).map(createCatch).join('');

    document.getElementById('catches').innerHTML = catches;

    const divs = document.querySelectorAll('.catch'); // get all divs for filtering

    const userId = sessionStorage.getItem('userId');

    // iterate through all divs to check if the current div is created by the current logged user
    for (let div of divs) {
        if (div.dataset.creator === userId) {
            let id = div.id;

            // get Update and Delete button in the current div
            let btns = document.getElementById(id).querySelectorAll('button');

            for (let btn of btns) {
                btn.removeAttribute('disabled'); // make buttons active
                btn.addEventListener('click', updateOrDeleteCatch);
            }
        }
    }
}

function createCatch(catches) {
    return `
        <div id="${catches._id}" class="catch" data-creator="${catches._ownerId}" data-date="${catches._createdOn}">
            <label>Angler</label>
            <input type="text" class="angler" placeholder="Angler name" value="${catches.angler}" />
            <hr>
            <label>Weight</label>
            <input type="number" class="weight" placeholder="Fish weight" value="${catches.weight}" />
            <hr>
            <label>Species</label>
            <input type="text" class="species" placeholder="Fish species" value="${catches.species}" />
            <hr>
            <label>Location</label>
            <input type="text" class="location" placeholder="Location" value="${catches.location}" />
            <hr>
            <label>Bait</label>
            <input type="text" class="bait" placeholder="Type of bait" value="${catches.bait}" />
            <hr>
            <label>Capture Time</label>
            <input type="number" class="captureTime" placeholder="Capture time" value="${catches["captureTime "]}" />
            <hr>
            <button disabled class="update">Update</button>
            <button disabled class="delete">Delete</button>
        </div>`;
}

// Pressing the [Add] button should submit a new catch with the values of the inputs in the fieldset with id="addFrom". (Only for logged in users)
// • angler - string
// • weight - floating-point number
// • species - string
// • location - strinг
// • bait - string
// • captureTime - integer number - minutes
async function addCatch(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const angler = formData.get('angler');
    const weight = formData.get('weight');
    const species = formData.get('species');
    const location = formData.get('location');
    const bait = formData.get('bait');
    const captureTime = formData.get('captureTime');

    if (angler === '' || weight === '' || species === '' || location === '' || bait === '' || captureTime === '') {
        return;
    }

    const token = sessionStorage.getItem('token');

    const response = await request('http://localhost:3030/data/catches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ angler, weight: Number(weight), species, location, bait, "captureTime ": Number(captureTime) })
    });

    event.target.reset();
    await loadCatches(); // auto load all divs with catches
}

async function updateOrDeleteCatch(event) {
    event.preventDefault();

    const target = event.target;

    const token = sessionStorage.getItem('token');

    if (target.getAttribute('class') === 'update') {
        // Pressing the [Update] button should send a PUT request, updating the catch in firebase. (Only for the creator of the catch)
        const catchId = event.target.parentNode.id;

        // for updating values for a catch you can edit them directly in the fields and then click 'Update' button
        const updatedCatch = {
            angler: event.target.parentNode.querySelector('.angler').value,
            weight: event.target.parentNode.querySelector('.weight').value,
            species: event.target.parentNode.querySelector('.species').value,
            location: event.target.parentNode.querySelector('.location').value,
            bait: event.target.parentNode.querySelector('.bait').value,
            captureTime: event.target.parentNode.querySelector('.captureTime').value
        };

        await request(`http://localhost:3030/data/catches/${catchId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(updatedCatch)
        });

        await loadCatches(); // auto load all divs with catches
        alert('Current catch is updated.');

    } else if (target.getAttribute('class') === 'delete') {
        // Pressing the [Delete] button should delete the catch both from firebase and from the page. (Only for the creator of the catch)
        const confirmed = confirm('Are you sure you want to delete this catch?');

        if (confirmed) {
            target.parentNode.remove(); // remove from page

            const catchId = event.target.parentNode.id;

            // delete from server
            await request(`http://localhost:3030/data/catches/${catchId}`, {
                method: 'DELETE',
                headers: {
                    'X-Authorization': token
                },
            });

            await loadCatches(); // auto load all divs with catches
        }

        alert('Current catch is deleted.');
    }
}