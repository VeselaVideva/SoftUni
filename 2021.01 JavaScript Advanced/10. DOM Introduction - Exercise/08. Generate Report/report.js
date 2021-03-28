function generateReport() {
    const output = document.getElementById('output');
    const checkButtons = [...document.querySelectorAll('thead th input')];

    let indexes = [];
    checkButtons.forEach((b, index) => {
        if (b.checked === true) {
            indexes.push(index);
        }
    });

    let resultArr = [];
    const tableHead = document.querySelectorAll('thead th');
    const rows = [...document.querySelectorAll('tbody tr')];

    for (const row of rows) {
        let obj = {};
        for (const index of indexes) {
            let currRowArr = row.children[index].textContent;
            let currThName = tableHead[index].textContent.toLowerCase().trim();
            obj[currThName] = currRowArr;
        }

        resultArr.push(obj);
    }

    output.value = JSON.stringify(resultArr, null, 2);
}