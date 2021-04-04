import { html } from '../../node_modules/lit-html/lit-html.js';
import { getElementDetails, deleteElement } from '../api/data.js';


const detailsTemplate = (el, isOwner, onDelete) => html`
    <section id="details-page" class="content details">
        <h1>${el.title}</h1>

        <div class="details-content">
            <strong>Published in category ${el.category}</strong>
            <p>${el.content}</p>

            <div class="buttons">
                ${isOwner ? html`
                    <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
                    <a href=${`/edit/${el._id}`} class="btn edit">Edit</a>` : ''}
                <a href="/" class="btn edit">Back</a>
            </div>
        </div>
    </section>`;


export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const el = await getElementDetails(id);

    const userId = sessionStorage.getItem('userId');
    const isOwner = el._ownerId === userId;

    ctx.render(detailsTemplate(el, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this article?');
        if (confirmed) {
            await deleteElement(el._id);
            ctx.page.redirect('/');
        }
    }
}