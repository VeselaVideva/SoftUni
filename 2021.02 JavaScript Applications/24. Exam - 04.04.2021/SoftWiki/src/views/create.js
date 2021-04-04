import { html } from '../../node_modules/lit-html/lit-html.js';
import { createElement } from '../api/data.js';


const createTemplate = (onSubmit) => html`
    <section id="create-page" class="content">
        <h1>Create Article</h1>

        <form @submit=${onSubmit} id="create" action="#" method="">
            <fieldset>
                <p class="field title">
                    <label for="create-title">Title:</label>
                    <input type="text" id="create-title" name="title" placeholder="Enter article title">
                </p>

                <p class="field category">
                    <label for="create-category">Category:</label>
                    <input type="text" id="create-category" name="category" placeholder="Enter article category">
                </p>
                <p class="field">
                    <label for="create-content">Content:</label>
                    <textarea name="content" id="create-content"></textarea>
                </p>

                <p class="field submit">
                    <input class="btn submit" type="submit" value="Create">
                </p>

            </fieldset>
        </form>
    </section>`;


export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const el = {
            title: formData.get('title').trim(),
            category: formData.get('category').trim(),
            content: formData.get('content').trim()
        }

        try {
            if (el.title === '' || el.category === '' || el.content === '') {
                throw new Error(`All fields are required!`);
            }
            if (el.category !== 'JavaScript' && el.category !== 'C#' && el.category !== 'Java' && el.category !== 'Python') {
                throw new Error(`The category must be one of "JavaScript", "C#", "Java", or "Python"!`);
            }

            await createElement(el);
            ctx.page.redirect('/');

        } catch (err) {
            alert(err.message);
        }
    }
}