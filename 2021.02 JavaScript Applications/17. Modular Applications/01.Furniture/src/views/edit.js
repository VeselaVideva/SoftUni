import { html } from '../../node_modules/lit-html/lit-html.js';
import { getFDetails, updateF } from '../api/data.js';
import { notify, clear } from '../notification.js';

const editTemplate = (item, onSubmit) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control" id="new-make" type="text" name="make" .value=${item.make} required>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control" id="new-model" type="text" name="model" .value=${item.model} required>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control" id="new-year" type="number" name="year" .value=${item.year} required>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description" .value=${item.description} required>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price" .value=${item.price} required>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img" .value=${item.img} required>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const item = await getFDetails(id);

    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            make: formData.get('make').trim(),
            model: formData.get('model').trim(),
            year: formData.get('year').trim(),
            description: formData.get('description').trim(),
            price: formData.get('price').trim(),
            img: formData.get('img').trim(),
            material: formData.get('material').trim() // optional field
        }

        if (data.make.length < 4) {
            return notify(`'Make' field must be at least 4 symbols long!`);
        }
        if (data.model.length < 4) {
            return notify(`'Model' field must be at least 4 symbols long!`);
        }
        if (data.year < 1950 || data.year > 2050) {
            return notify(`Year must be between 1950 and 2050!`);
        }
        if (data.description.length <= 10) {
            return notify(`'Description' field must be more than 10 symbols long!`);
        }
        if (data.price < 0) {
            return notify(`'Price' field must be a positive number!`);
        }
        if (data.img.length < 6) { // I chose 6, because the minimum length of valid url can be: '/a.png' or '/a.jpg'
            return notify(`Image URL is required!`);
        }

        data.year = Number(data.year);
        data.price = Number(data.price);

        await updateF(item._id, data);
        clear();
        ctx.page.redirect('/');
    }
}