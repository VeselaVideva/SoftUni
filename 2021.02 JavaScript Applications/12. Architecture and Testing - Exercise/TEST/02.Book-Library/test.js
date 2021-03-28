const { describe } = require('mocha');
const { expect } = require('chai');
const { chromium } = require('playwright-chromium');

let browser;  // Declare reusable variables
let page;
const host = 'http://localhost:8080'; // Application host
const DEBUG = false;

describe('E2E tests', function() {
    if (DEBUG) { this.timeout(120000); } else { this.timeout(8000); }

    before(async () => { if (DEBUG) { browser = await chromium.launch({ headless: false, slowMo: 500 }); }
                         else { browser = await chromium.launch(); } });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('load books', async () => {
        await page.goto(host);

        await page.click('#loadBooks');   // load default 2 books

        await page.waitForSelector('tbody tr td');
        const cells = await page.$$eval('tbody tr td', cells => cells.map(cell => cell.textContent));
        expect(cells[0]).to.contain('Harry Potter and the Philosopher\'s Stone');
        expect(cells[1]).to.contain('J.K.Rowling');
        expect(cells[3]).to.contain('C# Fundamentals');
        expect(cells[4]).to.contain('Svetlin Nakov');
    });

    it('add book', async () => {
        await page.goto(host);

        await page.fill('#createForm > input[name=title]', '');
        await page.fill('#createForm > input[name=author]', '');
        await page.click('#createForm >> text=Submit');    // check validation for empty inputs
        page.on('dialog', dialog => {       // "dialog" - handle alert, confirm, prompt
            dialog.accept();
        });

        await page.fill('#createForm > input[name=title]', 'JavaScript: The Good Parts');
        await page.fill('#createForm > input[name=author]', 'Douglas Crockford');
        await page.click('#createForm >> text=Submit');    // add new book with Submit button

        await page.click('#loadBooks');     // load all books

        await page.waitForSelector('tbody tr td');
        const cells = await page.$$eval('tbody tr td', cells => cells.map(cell => cell.textContent));
        expect(cells[6]).to.contain('JavaScript: The Good Parts');
        expect(cells[7]).to.contain('Douglas Crockford');
    });

    it('edit book', async () => {
        await page.goto(host);

        await page.click('#loadBooks');     // load all books

        await page.click('tbody > tr:first-child > td:last-child >> text=Edit');

        const visibleCreateForm = await page.isVisible('#createForm');
        expect(visibleCreateForm).to.be.false;

        const visibleEditForm = await page.isVisible('#editForm');
        expect(visibleEditForm).to.be.true;

        const titleForEdit = await page.$$eval('#editForm input[name=title]', lines => lines.map(line => line.value.trim()));
        expect(titleForEdit[0]).to.contain('Harry Potter and the Philosopher\'s Stone');
        const authorForEdit = await page.$$eval('#editForm input[name=author]', lines => lines.map(line => line.value.trim()));
        expect(authorForEdit[0]).to.contain('J.K.Rowling');

        await page.fill('#editForm > input[name=title]', '');
        await page.fill('#editForm > input[name=author]', '');
        page.on('dialog', dialog => {       // "dialog" - handle alert, confirm, prompt
            dialog.accept();
        });
        await page.click('#editForm >> text=Save');    // check validation for empty inputs

        await page.fill('#editForm input[name=title]', 'Harry Potter and the Philosopher\'s Stone Edited');
        await page.fill('#editForm input[name=author]', 'J.K.Rowling Edited');
        await page.click('#editForm >> text=Save');     // save the change

        await page.click('#loadBooks');     // load all books

        await page.waitForSelector('tbody tr td');
        const cells = await page.$$eval('tbody tr td', cells => cells.map(cell => cell.textContent));
        expect(cells[0]).to.contain('Harry Potter and the Philosopher\'s Stone Edited');
        expect(cells[1]).to.contain('J.K.Rowling Edited');
    });

    it('delete book', async () => {
        await page.goto(host);

        await page.click('#loadBooks');     // load all books

        page.on('dialog', dialog => {       // "dialog" - handle alert, confirm, prompt
            dialog.accept();
        });
        await page.click('tbody > tr:first-child > td:last-child >> text=Delete');

        await page.click('#loadBooks');     // load all books

        await page.waitForSelector('tbody tr td');
        const cells = await page.$$eval('tbody tr td', cells => cells.map(cell => cell.textContent));
        expect(cells[0]).to.contain('C# Fundamentals');
        expect(cells[1]).to.contain('Svetlin Nakov');
    });
});