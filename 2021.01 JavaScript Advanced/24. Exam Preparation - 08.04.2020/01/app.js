function solve() { // 75/100
    const [addTask, open, inProgress, complete] = document.querySelectorAll('section');
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        if (task.value === '' || date.value === '' || isNaN(Date.parse(date.value))) { // check if all fields are valid
            return;
        }

        let article = factory('article', {}, '');
        open.children[1].appendChild(article); // open.children[1] is the second div in section Open

        let setTitle = factory('h3', {}, `${task.value}`);
        article.appendChild(setTitle);

        let setDescription = factory('p', {}, `Description: ${description.value}`);
        article.appendChild(setDescription);

        let setDate = factory('p', {}, `Due Date: ${date.value}`);
        article.appendChild(setDate);

        let btnsDiv = factory('div', { class: 'flex' }, '');
        article.appendChild(btnsDiv);

        let btnStart = factory('button', { class: 'green' }, 'Start');
        btnsDiv.appendChild(btnStart);
        btnStart.addEventListener('click', start);

        let btnDelete = factory('button', { class: 'red' }, 'Delete');
        btnsDiv.appendChild(btnDelete);
        btnDelete.addEventListener('click', deleteTask);

        task.value = '';
        description.value = '';
        date.value = '';
    }

    function deleteTask(e) {
        e.target.parentNode.parentNode.parentNode.children[0].remove();
    }

    function start(e) {
        const currentArticle = e.target.parentNode.parentNode.parentNode.children[0];
        inProgress.children[1].appendChild(currentArticle); // inProgress.children[1] is the second div in section inProgress

        let btnStr = currentArticle.children[3].children[0];
        let btnDel = currentArticle.children[3].children[1];
        btnStr.remove();
        btnDel.remove();

        const btnDelNew = factory('button', { class: 'red' }, 'Delete');
        currentArticle.children[3].appendChild(btnDelNew);
        btnDelNew.addEventListener('click', deleteTask);

        const btnFinish = factory('button', { class: 'orange' }, 'Finish');
        currentArticle.children[3].appendChild(btnFinish);
        btnFinish.addEventListener('click', finish);
    }

    function finish(e) {
        const currentArticle = e.target.parentNode.parentNode.parentNode.children[0];
        complete.children[1].appendChild(currentArticle); // complete.children[1] is the second div in section Complete

        currentArticle.children[3].remove();
    }

    // function for creating DOM elements with attributes
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