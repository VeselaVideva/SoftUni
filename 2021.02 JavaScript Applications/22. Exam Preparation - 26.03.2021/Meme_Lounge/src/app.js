import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';


import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { allMemesPage } from './views/all-memes.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

import { logout } from './api/data.js';

const main = document.querySelector('main');

page('/', decorator, homePage);
page('/login', decorator, loginPage);
page('/register', decorator, registerPage);
page('/all-memes', decorator, allMemesPage);
page('/create', decorator, createPage);
page('/details/:id', decorator, detailsPage);
page('/edit/:id', decorator, editPage);
page('/profile', decorator, profilePage);

setNav();
page();

function decorator(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setNav = setNav;
    next();
}

function setNav() {
    const email = sessionStorage.getItem('email');
    if (email !== null) {
        document.querySelector('div.profile > span').textContent = `Welcome, ${email}`;

        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setNav();
    page.redirect('/');
});