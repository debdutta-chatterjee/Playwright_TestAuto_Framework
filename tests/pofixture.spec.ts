import { test, expect } from '../fixtures/pomFixtures';

test('Login Conduit test using POM', async ({ page, landingPage, homePage, signinPage, settingsPage }) => {
  await page.goto('https://react-redux.realworld.io/');
  await landingPage.clickSignInButton();
  await signinPage.enterEmailId("debduttachatterjee09@gmail.com");
  await signinPage.enterPassword("debdutta-playwright-test");
  await signinPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();
  await page.close();
});