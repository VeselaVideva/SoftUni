export const settings = {
    host: ''
};

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok === false) {
            const err = await response.json();
            throw new Error(err.message);
        }

        try {
            return await response.json();
        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function createOptions(method = 'GET', body) {
    const options = {
        method,
        headers: {}
    };

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    return options;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('POST', data));
}

export async function put(url, data) {
    return request(url, createOptions('PUT', data));
}

export async function del(url) {
    return request(url, createOptions('DELETE'));
}

export async function register(username, password) {
    const response = await post(settings.host + '/users/register', { username, password });

    sessionStorage.setItem('username', response.username);
    sessionStorage.setItem('authToken', response.accessToken);
    sessionStorage.setItem('userId', response._id);

    return response;
}

export async function login(username, password) {
    const response = await post(settings.host + '/users/login', { username, password });

    sessionStorage.setItem('username', response.username);
    sessionStorage.setItem('authToken', response.accessToken);
    sessionStorage.setItem('userId', response._id);

    return response;
}

export async function logout() {
    const response = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');

    return response;
}