import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getF(search) {
    if (search) {
        return await api.get(host + '/data/catalog?where=' + encodeURIComponent(`make LIKE "${search}"`));
    } else {
        return await api.get(host + '/data/catalog');
    }
}

export async function getFDetails(id) {
    return await api.get(host + `/data/catalog/${id}`);
}

export async function getMyF() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/catalog?where=_ownerId%3D%22${userId}%22`);
}

export async function createF(data) {
    return await api.post(host + '/data/catalog', data);
}

export async function updateF(id, data) {
    return await api.put(host + `/data/catalog/${id}`, data);
}

export async function deleteF(id) {
    return await api.del(host + `/data/catalog/${id}`);
}

