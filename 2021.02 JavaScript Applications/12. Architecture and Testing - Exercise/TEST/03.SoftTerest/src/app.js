import { setupHome } from './views/home.js';
import { setupLogin } from './views/login.js';
import { setupRegister } from './views/register.js';
import { setupDashboard } from './views/dashboard.js';
import { setupCreate } from './views/create.js';
import { setupDetails } from './views/details.js';

const main = document.querySelector('main');
const nav = document.querySelector('nav');

const views = {};
const links = {};

const navigation = {
    goTo,
    setUserNav
};

registerView('home', document.getElementById('home-page'), setupHome, 'homeLink');
registerView('login', document.getElementById('login-page'), setupLogin, 'loginLink');
registerView('register', document.getElementById('register-page'), setupRegister, 'registerLink');
registerView('dashboard', document.getElementById('dashboard-holder'), setupDashboard, 'dashboardLink');
registerView('create', document.getElementById('create-page'), setupCreate, 'createLink');
registerView('details', document.getElementById('details-page'), setupDetails);
document.getElementById('views').remove();

setupNavigation();

goTo('home'); // Start application in home view

function registerView(name, section, setup, linkId) {
    const view = setup(section, navigation);
    views[name] = view;
    if (linkId) {
        links[linkId] = name;
    }
}

async function goTo(name, ...params) {
    main.innerHTML = '';
    const view = views[name];
    const section = await view(...params);
    main.appendChild(section);
}

function setupNavigation() {
    setUserNav();

    nav.addEventListener('click', (e) => {
        const viewName = links[e.target.id];
        if (viewName) {
            e.preventDefault();
            goTo(viewName);
        }
    });
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');

    if (token !== null) {
        nav.querySelector('#userNav').style.display = 'flex';
        nav.querySelector('#guestNav').style.display = 'none';
    } else {
        nav.querySelector('#userNav').style.display = 'none';
        nav.querySelector('#guestNav').style.display = 'flex';
    }
}