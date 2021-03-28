import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { myFurniturePage } from './views/my-furniture.js';
import { editPage } from './views/edit.js';

import { logout } from './api/data.js';

// For testing the api functions
// import * as api from './api/data.js';
// window.api = api;

const main = document.querySelector('.container');

page('/', decorator, dashboardPage);
page('/details/:id', decorator, detailsPage);
page('/login', decorator, loginPage);
page('/register', decorator, registerPage);
page('/create', decorator, createPage);
page('/my-furniture', decorator, myFurniturePage);
page('/edit/:id', decorator, editPage);

setNav();
page();

function decorator(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setNav = setNav;
    next();
}

function setNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId !== null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setNav();
    page.redirect('/');
});