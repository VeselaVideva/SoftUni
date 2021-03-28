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

    it('load messages', async () => {
        await page.goto(host);

        await page.click('#refresh');   // load default messages on first click

        const textarea = await page.$$eval('textarea', lines => lines.map(line => line.value.trim()));
        expect(textarea[0]).to.contain('Spami: Hello, are you there?');
        expect(textarea[0]).to.contain('Garry: Yep, whats up :?');
        expect(textarea[0]).to.contain('Spami: How are you? Long time no see? :)');
        expect(textarea[0]).to.contain('George: Hello, guys! :))');
        expect(textarea[0]).to.contain('Spami: Hello, George nice to see you! :)))');
    });

    it('send message', async () => {
        await page.goto(host);

        await page.fill('#author', 'Vesela');
        await page.fill('#content', 'My test message.');

        await page.click('#submit');    // send new message with Send button
        await page.click('#refresh');   // load again all messages

        const textarea = await page.$$eval('textarea', lines => lines.map(line => line.value.trim()));
        expect(textarea[0]).to.contain('Vesela: My test message.');
    });
});