import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';


import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { allCarsPage } from './views/all-listings.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myCarsPage } from './views/my-listings.js';
import { searchPage } from './views/search.js';

import { logout } from './api/data.js';

const main = document.querySelector('#site-content');

page('/', decorator, homePage);
page('/login', decorator, loginPage);
page('/register', decorator, registerPage);
page('/all-listings', decorator, allCarsPage);
page('/create', decorator, createPage);
page('/details/:id', decorator, detailsPage);
page('/edit/:id', decorator, editPage);
page('/my-listings', decorator, myCarsPage);
page('/search', decorator, searchPage);

setNav();
page();

function decorator(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setNav = setNav;
    next();
}

function setNav() {
    const username = sessionStorage.getItem('username');
    if (username !== null) {
        document.querySelector('#welcome-line').textContent = `Welcome ${username}`;

        document.querySelector('#profile').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#guest').style.display = 'block';
    }
}

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setNav();
    page.redirect('/');
});