function solve() {
    const typo = document.getElementById('input').value;
    const array = typo.split('.').filter(x => x !== '');
    const result = document.getElementById('output');

    for (let i = 0; i < array.length; i += 3) {
        const paragraph = array.slice(i, i + 3).join('.') + '.';
        result.innerHTML += `<p>${paragraph}</p>`;
    }
}