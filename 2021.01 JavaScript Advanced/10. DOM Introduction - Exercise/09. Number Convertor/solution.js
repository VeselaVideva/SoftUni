function solve() {
    let firstOptElement = document.createElement('option');
    firstOptElement.value = 'binary';
    firstOptElement.innerHTML = 'Binary';

    let secondOptElement = document.createElement('option');
    secondOptElement.value = 'hexadecimal';
    secondOptElement.innerHTML = 'Hexadecimal';

    let menuTOElement = document.getElementById('selectMenuTo');
    menuTOElement.appendChild(firstOptElement);
    menuTOElement.appendChild(secondOptElement);

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', function() {
        let numberInput = document.getElementById('input');
        let outputResult = document.getElementById('result');

        if (menuTOElement.value === 'binary') {
            outputResult.value = Number(numberInput.value).toString(2);
        } else if (menuTOElement.value === 'hexadecimal') {
            outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
        }
    });
}