function solve() {
    const formControls = document.querySelectorAll('.form-control input');
    const lecture = formControls[0];
    const date = formControls[1];
    const moduleName = document.querySelector('select');
    const modulesOutput = document.querySelector('.modules');

    let state = {};

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);

        if (text) {
            element.textContent = text;
        }

        attributes.map(attr => attr.split('=')).forEach(([name, value]) => {
                element.setAttribute(name, value);
            })

        return element;
    }

    function add(e) {
        e.preventDefault();

        // Правя валидации
        if (lecture.value === '' || date.value === '' || moduleName.value.includes('Select module')) {
            return;
        }

        // Създавам си ли-то
        let lectureName = lecture.value;
        let dateString = date.value;

        const lectureTitle = lectureName + ' - ' + dateString.split('-').join('/').split('T').join(' - ');

        const delBtn = createElement('button', 'Del', ['class=red']);
        const lectureH4 = createElement('h4', lectureTitle);
        const li = createElement('li', undefined, ['class=flex']);

        li.appendChild(lectureH4);
        li.appendChild(delBtn);

        // Създавам си модула
        let module = undefined;
        let ul = undefined;

        // Ако го създавам за първи път...
        if (!state[moduleName.value]) {
            let h3 = createElement('h3', `${moduleName.value.toUpperCase()}-MODULE`);
            ul = createElement('ul');
            let lis = [];
            module = createElement('div', undefined, ['class=module']);

            module.appendChild(h3);
            module.appendChild(ul);

            state[moduleName.value] = { module, ul, lis: [] };
        } else { // Ако вече имам такъв модул
            module = state[moduleName.value].module;
            ul = state[moduleName.value].ul;
        }

        // Слагам си ли-то в литата на модула
        state[moduleName.value].lis.push({ li, date: date.value });

        // Сортирам ли-тата и апендвам към ul-a
        state[moduleName.value].lis.sort((a, b) => {
            return a.date.localeCompare(b.date)
        }).forEach(({ li }) => {
            ul.appendChild(li);
        })

        modulesOutput.appendChild(module);
    }

    // Tриене
    function del(e) {
        let li = e.target.parentNode;
        let ul = li.parentNode;
        let module = ul.parentNode;

        // Изтривам ли-то
        li.remove();

        // Ако ул-а е празен трия целия модул
        if (ul.children.length === 0) {
            module.remove();
        }
    }

    // Закачам евентлисънър на main метода
    document.getElementsByTagName('main')[0].addEventListener('click', (e) => {
        // ако таргета е бутон само тогава правя нещо
        if (e.target.tagName === 'BUTTON') {

            // Ако не съдържа клас red добавям
            if (!e.target.classList.contains('red')) {
                add(e);
            } else {  // Иначе трия
                del(e);
            }
        }
    })
}