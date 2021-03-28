import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemeDetails, editMeme } from '../api/data.js';
import { notify } from '../notification.js';


// Edit Meme Page ( Only for logged user and creator to this meme )

const editTemplate = (meme, onSubmit) => html`
    <section id="edit-meme">
        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}></textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const meme = await getMemeDetails(id);

    ctx.render(editTemplate(meme, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim()
        }

        try {
            if (data.title === '' || data.description === '' || data.imageUrl === '') {
                throw new Error(`All fields are required!`);
            }

            await editMeme(meme._id, data);
            ctx.page.redirect('/details/' + meme._id);

        } catch (err) {
            notify(err.message);
        }
    }
}