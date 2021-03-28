import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js'; // for the loader
import { getF } from '../api/data.js';

const dashboardTemplate = (data, search, onSearch) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
            <div class="search-bar">
                <input id="searchInput" class="form-control" name="search" type="text" .value=${search}>
                <button @click=${onSearch} class="btn btn-primary">Search</button>
            </div>
        </div>
    </div>
    <div class="row space-top">
        ${data.map(itemTemplate)}
    </div>`;

const itemTemplate = (item) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${item.img} alt=${item.description}>
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`;

const loaderTemplate = html`<div id="loader"></div>`; // loader template

export async function dashboardPage(ctx) {
    const searchParam = ctx.querystring.split('=')[1] || '';


    ctx.render(until(populateDashboard(), loaderTemplate));

    function onSearch(e) {
        const search = encodeURIComponent(document.getElementById('searchInput').value);
        ctx.page.redirect('/?search=' + search);
    }

    async function populateDashboard() {
        const data = await getF(searchParam);
        return dashboardTemplate(data, searchParam, onSearch);
    }
}