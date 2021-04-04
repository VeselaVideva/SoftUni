import { html } from '../../node_modules/lit-html/lit-html.js';
import { getElementDetails, editElement } from '../api/data.js';


const editTemplate = (el, onSubmit) => html`
    <section id="edit-page" class="content">
        <h1>Edit Article</h1>

        <form @submit=${onSubmit} id="edit" action="#" method="">
            <fieldset>
                <p class="field title">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title" placeholder="Enter article title" .value=${el.title}>
                </p>

                <p class="field category">
                    <label for="category">Category:</label>
                    <input type="text" name="category" id="category" placeholder="Enter article category" .value=${el.category}>
                </p>
                <p class="field">
                    <label for="content">Content:</label>
                    <textarea name="content" id="content" .value=${el.content}></textarea>
                </p>

                <p class="field submit">
                    <input class="btn submit" type="submit" value="Save Changes">
                </p>

            </fieldset>
        </form>
    </section>`;


export async function editPage(ctx) {
    const id = ctx.params.id;
    const el = await getElementDetails(id);

    ctx.render(editTemplate(el, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            title: formData.get('title').trim(),
            category: formData.get('category').trim(),
            content: formData.get('content').trim()
        }

        try {
            if (data.title === '' || data.category === '' || data.content === '') {
                throw new Error(`All fields are required!`);
            }
            if (data.category !== 'JavaScript' && data.category !== 'C#' && data.category !== 'Java' && data.category !== 'Python') {
                throw new Error(`The category must be one of "JavaScript", "C#", "Java", or "Python"!`);
            }

            await editElement(el._id, data);
            ctx.page.redirect('/details/' + el._id);

        } catch (err) {
            alert(err.message);
        }
    }
}