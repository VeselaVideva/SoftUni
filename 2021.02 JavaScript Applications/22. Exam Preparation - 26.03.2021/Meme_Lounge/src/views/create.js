import { html } from '../../node_modules/lit-html/lit-html.js';
import { createMeme } from '../api/data.js';
import { notify } from '../notification.js';


// Create Meme Page ( Only for logged users )

const createTemplate = (onSubmit) => html`
    <section id="create-meme">
        <form @submit=${onSubmit} id="create-form">
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const meme = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim()
        }

        try {
            if (meme.title === '' || meme.description === '' || meme.imageUrl === '') {
                throw new Error(`All fields are required!`);
            }

            await createMeme(meme);
            ctx.page.redirect('/all-memes');

        } catch (err) {
            notify(err.message);
        }
    }
}

