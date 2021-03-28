function solve(){ // 100/100
  const main = document.querySelector('main>section');
  const newPost = document.querySelector('aside>section');
  const archive = document.querySelector('.archive-section');

  let name = document.getElementById('creator');
  let title = document.getElementById('title');
  let category = document.getElementById('category');
  let content = document.getElementById('content');

  const createBtn = document.querySelector('.create');
  createBtn.addEventListener('click', createArticle);

  function createArticle(e) {
      e.preventDefault();

      if (name === '' || title === '' || category === '' || content === '') {
        return;
      }

      const article = factory('article', {});
      main.appendChild(article);

      const articleTitle = factory('h1', {}, `${title.value}`);
      article.appendChild(articleTitle);

      const categoryP = factory('p', {}, 'Category: ');
      article.appendChild(categoryP);
      const categoryType = factory('strong', {}, `${category.value}`);
      categoryP.appendChild(categoryType);

      const authorP = factory('p', {}, 'Creator: ');
      article.appendChild(authorP);
      const creatorName = factory('strong', {}, `${name.value}`);
      authorP.appendChild(creatorName);

      const contentP = factory('p', {}, `${content.value}`);
      article.appendChild(contentP);

      const buttons = factory('div', { class: 'buttons' });
      article.appendChild(buttons);

      const deleteBtn = factory('button', { class: 'btn delete' }, 'Delete');
      buttons.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', deleteArticle);

      const archiveBtn = factory('button', { class: 'btn archive' }, 'Archive');
      buttons.appendChild(archiveBtn);
      archiveBtn.addEventListener('click', archiveArticle);

      name.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
  }

  function deleteArticle(e) {
    e.target.parentNode.parentNode.remove();
  }

  function archiveArticle(e) {
    e.target.parentNode.parentNode.remove();

    const archivedTitle = e.target.parentNode.parentNode.children[0];
    const ol = document.querySelector('.archive-section>ol');
    const li = factory('li', {}, `${archivedTitle.textContent}`);
    ol.appendChild(li);
    sortLis();
  }

  function sortLis(e) {
    const ol = document.querySelector('.archive-section>ol');

    Array.from(Array.from(ol.children))
        .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent)) // first sort
        .forEach(li => ol.appendChild(li)); // append again sorted elements
  }

  function factory(type, attributes, text) {
    const el = document.createElement(type);
    for (let key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
    if (text) {
      el.textContent = text;
    }
    return el;
  }
}
