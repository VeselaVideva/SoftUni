function solve() {
    const [task, description, date, addBtn] = document.querySelectorAll('input, input , textarea, button')
    const sections = Array.from(document.querySelectorAll('section'))
    addBtn.addEventListener('click', ctaOpenTask)

    const deleteTask = (e) => e.target.parentElement.parentElement.remove()

    function ctaOpenTask(e) {
        e.preventDefault()

        if (task.value === '' || date.value === '') {
            return
        }

        sections[1].children[1].appendChild(
            renderArticle('', {}, {},
                renderH3(task.value, {}, {}),
                renderP(`Description: ${description.value}`, {}, {}),
                renderP(`Due Date: ${date.value}`, {}, {}),
                renderDiv('', { class: 'flex' }, {},
                    renderButton('Start', { class: 'green' }, { 'click': moveToProgress }),
                    renderButton('Delete', { class: 'red' }, { 'click': deleteTask })
                )
            )
        )
    }

    function moveToProgress(e) {
        let article = e.target.parentElement.parentElement
        article.lastElementChild.children[0].remove();
        article.lastElementChild.appendChild( renderButton('Finish', { class: 'orange' }, { 'click': moveToComplete }))

        sections[2].children[1].appendChild(article);
    }

    function moveToComplete(e) {
        let article = e.target.parentElement.parentElement;
        article.lastElementChild.remove();
        sections[3].children[1].appendChild(article);
    }

    const renderArticle = renderHtml.bind(undefined, 'article');
    const renderH3 = renderHtml.bind(undefined, 'h3');
    const renderP = renderHtml.bind(undefined, 'p');
    const renderDiv = renderHtml.bind(undefined, 'div');
    const renderButton = renderHtml.bind(undefined, 'button');

    function renderHtml(type, content, attributes, events, ...children) {
        const element = document.createElement(type);

        if (content !== '') {
            element.textContent = content;
        }
        Object.entries(attributes).map(([k, v]) => element.setAttribute(k, v));
        Object.entries(events).map(([event, handler]) => element.addEventListener(event, handler));

        children.forEach(x => element.appendChild(x));

        return element;
    }
}