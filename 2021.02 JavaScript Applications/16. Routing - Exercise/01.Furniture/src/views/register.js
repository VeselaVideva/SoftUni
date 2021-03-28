import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit, errorMsg, invalidPass, invalidRepass) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                ${errorMsg ? html`
                <div class="form-group">
                    <p class="error">${errorMsg}</p>
                </div>` : ''}
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email" required>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control' + (invalidPass ? ' is-invalid' : '')} id="password" type="password" name="password" required>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class=${'form-control' + (invalidRepass ? ' is-invalid' : '')} id="rePass" type="password" name="rePass" required>
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('rePass').trim();

        if (password !== repass) {
            return ctx.render(registerTemplate(onSubmit, `Passwords don't match!`, true, true));
        }

        await register(email, password);
        ctx.setNav();
        ctx.page.redirect('/');
    }
}