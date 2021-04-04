import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';


const searchTemplate = (data, onSearch, param) => html`
    <section id="search-page" class="content">
        <h1>Search</h1>
        <form id="search-form">
            <p class="field search">
                <input id="search-input" type="text" placeholder="Search by article title" name="search" .value=${param || ''}>
            </p>
            <p class="field submit">
                <input @submit=${onSearch} class="btn submit" type="submit" value="Search">
            </p>
        </form>
        <div class="search-container">
            ${data.length === 0 ? html`<h3 class="no-articles">No matching articles</h3>` : data.map(elementTemplate)}
        </div>
    </section>`;


const elementTemplate = (el) => html`
    <a class="article-preview" href=${`/details/${el._id}`}>
        <article>
            <h3>Topic: <span>${el.title}</span></h3>
            <p>Category: <span>${el.category}</span></p>
        </article>
    </a>`;


export async function searchPage(ctx) {
    const param = ctx.querystring.split('=')[1];
    const articles = param === undefined ? [] : await search(param);

    ctx.render(searchTemplate(articles, onSearch, param));

    function onSearch(e) {
        e.preventDefault();
        const query = document.getElementById('search-input').value;
        if (query !== undefined) {
            ctx.page.redirect('/search?query=' + query);
        }
    }
}