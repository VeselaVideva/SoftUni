const { describe } = require('mocha');
const { expect } = require('chai');
const { chromium } = require('playwright-chromium');

let browser, page; // Declare reusable variables

describe('E2E tests', function() {
    this.timeout(10000);

    before(async () => { browser = await chromium.launch(); }); // { headless: false, slowMo: 5000 }
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('loads static page', async () => {
        await page.goto('http://localhost:8080');

        const titles = await page.$$eval('.accordion .head span', (spans) => spans.map(s => s.textContent));

        expect(titles).to.includes('Scalable Vector Graphics');
        expect(titles).to.includes('Open standard');
        expect(titles).to.includes('Unix');
        expect(titles).to.includes('ALGOL');
    });

    it('toggles content', async () => {
        await page.goto('http://localhost:8080');

        await page.click('#main:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');
        await page.click('#main:first-child >> text=Less');

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.false;
    });
});