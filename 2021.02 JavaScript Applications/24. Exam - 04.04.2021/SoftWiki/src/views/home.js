import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllElementsByCategory } from '../api/data.js';


const homeTemplate = (data) => html`
    <section id="home-page" class="content">
        <h1>Recent Articles</h1>
        <section class="recent js">
            <h2>JavaScript</h2>
            ${data.map(elementTemplate)[0] || html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
        <section class="recent csharp">
            <h2>C#</h2>
            ${data.map(elementTemplate)[1] || html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
        <section class="recent java">
            <h2>Java</h2>
            ${data.map(elementTemplate)[2] || html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
        <section class="recent python">
            <h2>Python</h2>
            ${data.map(elementTemplate)[3] || html`<h3 class="no-articles">No articles yet</h3>`}
        </section>
    </section>`;


const elementTemplate = (el) => html`
    <article>
        <h3>${el.title}</h3>
        <p>${el.content}</p>
        <a href=${`/details/${el._id}`} class="btn details-btn">Details</a>
    </article>`;


export async function homePage(ctx) {
    const data = await getAllElementsByCategory();
    ctx.render(homeTemplate(data));
}