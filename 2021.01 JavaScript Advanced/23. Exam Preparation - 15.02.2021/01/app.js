function solution() {
    // attach event listeners to input form
    const [gifts, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);

    // create gift elements with buttons
    function addGift() {
        const name = input.value;
        input.value = '';

        const element = e('li', name, 'gift');
        const sendBtn = e('button', 'Send', 'sendButton');
        const discardBtn = e('button', 'Discard', 'discardButton');
        element.appendChild(sendBtn);
        element.appendChild(discardBtn);

        sendBtn.addEventListener('click', () => sendGift(name, element));
        discardBtn.addEventListener('click', () => discardGift(name, element));

        gifts.appendChild(element);

        sortGifts();
    }

    // logic for sending gifts
    function sendGift(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        sent.appendChild(element);
    }

    // logic for discarding gifts
    function discardGift(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        discarded.appendChild(element);
    }

    // sort gifts list
    function sortGifts() {
        Array.from(gifts.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent)) // first sort
            .forEach(g => gifts.appendChild(g)); // append again sorted elements
    }

    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }
}