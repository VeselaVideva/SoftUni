async function lockedProfile() {
    const main = document.getElementById('main');
    main.textContent = '';

    try {
        const profilesData = await getProfiles();

        main.addEventListener('click', async (e) => {
            if (e.target.tagName === 'BUTTON') {
                const profile = e.target.parentNode;
                const isLocked = profile.querySelector('input[type="radio"]:checked').value === 'lock';

                if (isLocked) { return; }

                let div = profile.querySelector('#user1HiddenFields');
                let isVisible = div.style.display === 'block';

                div.style.display = isVisible ? 'none' : 'block';
                e.target.textContent = !isVisible ? 'Hide it' : 'Show more';
            }
        });

    } catch (err) {
        alert(`Error: ${err.message}`);
    }
}

async function getProfiles() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const response = await fetch(url);
    const data = await response.json();

    const main = document.getElementById('main');

    const result = Object.values(data).map(createProfile).forEach(p => main.appendChild(p));

    return result;
}

function createProfile(data) {
    const profile = e('div', { class: 'profile' });
    const image = e('img', { src: './iconProfile2.png', class: 'userIcon' });
    profile.appendChild(image);
    const labelLock = e('label', {}, 'Lock');
    profile.appendChild(labelLock);
    const checkLock = e('input', { type: 'radio', name: `${Object.values(data._id).join('')}`, value: 'lock', checked: '' });
    labelLock.appendChild(checkLock);
    const labelUnlock = e('label', {}, 'Unlock');
    profile.appendChild(labelUnlock);
    const checkUnlock = e('input', { type: 'radio', name: `${Object.values(data._id).join('')}`, value: 'unlock' });
    labelUnlock.appendChild(checkUnlock);
    const br = e('br');
    profile.appendChild(br);
    const hrFirst = e('hr');
    profile.appendChild(hrFirst);
    const labelUsername = e('label', {}, 'Username');
    profile.appendChild(labelUsername);
    const usernameInput = e('input', { type: 'text', name: `${Object.values(data._id).join('')}`, value: `${Object.values(data.username).join('')}`, disabled: '', readonly: '' });
    profile.appendChild(usernameInput);
    const hiddenDiv = e('div', { id: 'user1HiddenFields' });
    profile.appendChild(hiddenDiv);
    const hrInner = e('hr');
    hiddenDiv.appendChild(hrInner);
    const labelEmail = e('label', {}, 'Email:');
    hiddenDiv.appendChild(labelEmail);
    const emailInput = e('input', { type: 'email', name: `${Object.values(data._id).join('')}`, value: `${Object.values(data.email).join('')}`, disabled: '', readonly: '' });
    hiddenDiv.appendChild(emailInput);
    const labelAge = e('label', {}, 'Age:');
    hiddenDiv.appendChild(labelAge);
    const ageInput = e('input', { type: 'text', name: `${Object.values(data._id).join('')}`, value: `${data.age}`, disabled: '', readonly: '' });
    hiddenDiv.appendChild(ageInput);
    const btnShow = e('button', {}, 'Show more');
    profile.appendChild(btnShow);

    return profile;
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