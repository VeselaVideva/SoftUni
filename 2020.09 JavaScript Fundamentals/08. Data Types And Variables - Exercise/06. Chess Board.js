/*function chessBoard(n) {
    let table = document.createElement('div');
    table.classList.add('chessboard');

    for (let i = 1; i <= n; i++) {
        let div = document.createElement('div');
        if (i % 2 !== 0) {
            for (let j = 1; j <= n; j++) {
                let span = document.createElement('span');
                if (j % 2 !== 0) {
                    span.classList.add('black');
                } else {
                    span.classList.add('white');
                }
                div.appendChild(span);
            }
        } else {
            for (let j = 1; j <= n; j++) {
                let span = document.createElement('span');
                if (j % 2 !== 0) {
                    span.classList.add('white');
                } else {
                    span.classList.add('black');
                }
                div.appendChild(span);
            }
        }
        table.appendChild(div);
    }
    console.log(table);
}*/

function chessBoard(n) {
    let size = Number(n)
    let currentColour = 'black'
    let previousColour = ''
    console.log('<div class="chessboard">')

    for (let rows = 1; rows <= size; rows++) {
        console.log('  <div>')
        for (let columns = 1; columns <= size; columns++) {
            console.log(`    <span class="${currentColour}"></span>`);
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }
        console.log('  </div>')
        if (size % 2 === 0) {
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }
    }
    console.log('</div>')
}

chessBoard(3);