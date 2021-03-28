function companyUsers(arr) {
    let companies = {};

    for (let line of arr) {
        let [company, id] = line.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }
        companies[company].add(id);
    }

    let sorted = Object.entries(companies);

    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let company of sorted) {
        console.log(company[0]);
        for (let id of company[1]) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345']);
// HP
// -- BB12345
// Microsoft
// -- CC12345
// SoftUni
// -- AA12345
// -- BB12345

companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111']);
// Lenovo
// -- XX23456
// Movement
// -- DD11111
// SoftUni
// -- AA12345
// -- CC12344