import * as api from './api.js';


const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllElements() { // for catalog page
    return await api.get(host + '/data/wiki?sortBy=_createdOn%20desc');
}

export async function getAllElementsByCategory() { // for home page
    return await api.get(host + '/data/wiki?sortBy=_createdOn%20desc&distinct=category');
}

export async function getElementDetails(id) {
    return await api.get(host + `/data/wiki/${id}`);
}

export async function createElement(data) {
    return await api.post(host + '/data/wiki', data);
}

export async function editElement(id, data) {
    return await api.put(host + `/data/wiki/${id}`, data);
}

export async function deleteElement(id) {
    return await api.del(host + `/data/wiki/${id}`);
}

// search - bonus
export async function search(query) {
    return await api.get(host + `/data/wiki?where=title%20LIKE%20%22${query}%22`)
}