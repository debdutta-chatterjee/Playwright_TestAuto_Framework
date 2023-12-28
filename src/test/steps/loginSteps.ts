import {Given, When, Then} from '@cucumber/cucumber'
import {expect}  from '@playwright/test'
import {pageFixture} from '../../hooks/pageFixture'

Given('I am on login page', async function () {
    await pageFixture.page.goto('https://react-redux.realworld.io/#/login',{timeout:30000,waitUntil:'domcontentloaded'});
});
       
When('I login with valid credentials', async function () {
    await pageFixture.page.locator('input[placeholder="Email"]').fill("debduttachatterjee09@gmail.com");
    await pageFixture.page.locator('input[placeholder="Password"]').fill("debdutta-playwright-test");
    await pageFixture.page.locator('button[type="submit"]').click();     
});

 When('I click on the settings icon', async function () {
    await pageFixture.page.locator('a[href="#settings"]').click();      
});

When('click on logout button', async function () {
    await pageFixture.page.locator('//button[normalize-space()="Or click here to logout."]').click();
});
Then('I route back to Login page', async function () {  
    const element =await pageFixture.page.locator('//a[normalize-space()="Sign in"]');
    await expect(await element.isVisible).toBeTruthy();
});