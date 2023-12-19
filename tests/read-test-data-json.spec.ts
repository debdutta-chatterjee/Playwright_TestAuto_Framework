import {test,expect} from '@playwright/test'
import * as orangeHRMCred from './testdata/credentials.json'


test('Login test with valid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHRMCred.validUsername);
    await page.locator('[placeholder="Password"]').fill(orangeHRMCred.validPassword);
    await page.locator('[type="submit"]').click();
    await page.locator('.oxd-userdropdown').click();
    await page.locator('text=Logout').click();
  });
  
  test('Login test with invalid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHRMCred.invalidUsername);
    await page.locator('[placeholder="Password"]').fill(orangeHRMCred.invalidPassword);
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.orangehrm-login-error>.oxd-alert--error')).toBeVisible();
  });