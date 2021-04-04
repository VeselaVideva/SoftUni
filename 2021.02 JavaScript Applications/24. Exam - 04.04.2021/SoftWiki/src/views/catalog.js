import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllElements } from '../api/data.js';


const catalogTemplate = (data) => html`
    <section id="catalog-page" class="content catalogue">
        <h1>All Articles</h1>
            ${data.length === 0 ? html`<h3 class="no-articles">No articles yet</h3>` : data.map(elementTemplate)}
    </section>`;


const elementTemplate = (el) => html`
    <a class="article-preview" href=${`/details/${el._id}`}>
        <article>
            <h3>Topic: <span>${el.title}</span></h3>
            <p>Category: <span>${el.category}</span></p>
        </article>
    </a>`;


export async function catalogPage(ctx) {
    const data = await getAllElements();
    ctx.render(catalogTemplate(data));
}


