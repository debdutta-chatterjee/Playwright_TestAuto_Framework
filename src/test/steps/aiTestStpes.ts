import {Given, When, Then} from '@cucumber/cucumber'
import { pageFixture } from '../../hooks/pageFixture';
import {chromium,test,Page} from '@playwright/test'
import { ai } from '@zerostep/playwright'

let page : Page;

When('Hit enter', async function () {
  let browser = await chromium.launch({ headless: false });
  page = await browser.newPage();  
  await page.goto('https://www.google.com');
    await ai('Hit enter', { page, test })
  });


  Given('The user is at Google home page', {timeout: 30 * 5000},async function () {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    page = await browser.newPage();  
    await page.goto('https://www.google.com');
    });

Then('verify page title', async function () {
    const page = await pageFixture.page;  
    await page.waitForURL('https://www.google.com/search**')
    const title = await ai(`What is the title of the first organic search result?`, { page, test })
    console.log('First organic search result is: ', title)
  });

  When('Search for {string}', async function (searchTerm) {
    await ai(`Search for '${searchTerm}'`, { page,test })
  });
