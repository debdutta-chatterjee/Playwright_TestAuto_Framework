import {test} from '@playwright/test'

test.only('Test to take screenshot', async({page})=>{
     //Login
     await page.goto('https://www.saucedemo.com/');
     await page.locator('#user-name').fill('standard_user');
     await page.locator('#password').fill('secret_sauce');    
     await page.screenshot({path:'tests/screenshot/'+'test_screenshot.png'})
})