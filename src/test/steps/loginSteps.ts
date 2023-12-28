import {Given, When, Then} from '@cucumber/cucumber'
import {chromium, Browser, Page,expect}  from '@playwright/test'

let browser: Browser
let page: Page

Given('I am on login page', async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    await page.goto('https://react-redux.realworld.io/#/login');
});
       
When('I login with valid credentials', async function () {
    await page.locator('input[placeholder="Email"]').fill("debduttachatterjee09@gmail.com");
    await page.locator('input[placeholder="Password"]').fill("debdutta-playwright-test");
    await page.locator('button[type="submit"]').click();     
});

 When('I click on the settings icon', async function () {
    await page.locator('a[href="#settings"]').click();      
});

When('click on logout button', async function () {
    await page.locator('//button[normalize-space()="Or click here to logout."]').click();
});
Then('I route back to Login page', async function () {    
    await expect(page.locator('//a[normalize-space()="Sign in"]')).toBeVisible();
    await browser.close();
});