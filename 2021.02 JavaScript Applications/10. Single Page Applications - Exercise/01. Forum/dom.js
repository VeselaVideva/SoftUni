// my function for creating DOM elements
export function e(type, attributes, text) {
    const el = document.createElement(type);
    for (let key in attributes) {
        el.setAttribute(key, attributes[key]);
    }
    if (text) {
        el.textContent = text;
    }
    return el;
}