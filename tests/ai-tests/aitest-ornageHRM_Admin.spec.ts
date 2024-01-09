import { expect, test } from '../../fixtures/ai-fixture'

test.describe('OrangeHRM', () => {
    test('can login and checkout', async ({ page, ai }) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' })
      const [username, password] = await ai([
        'Get the username listed on the page',
        'Get the password listed on the page',
      ])
      await ai([
        `Enter ${username} as the username`,
        `Enter ${password} as the password`
      ])
      await ai('Click Login')
      await page.waitForTimeout(5_000)
      await ai('Search for "Admin"')
      await ai('Click the Admin link')
      await page.waitForTimeout(4_000)
      //page.locator("//label[text()='Username']/parent::*/parent::*//input").fill("Admin")
      //await page.waitForTimeout(4_000)
      //await ai('Click on the Search button in the system users section')
      await ai('Search for username "Admin" in the system users section')
      await ai('Click on the "username" input')
      await ai('Hit Enter')
      const records = await ai('get the number of records found')
      console.log(records)
      const noRecordsFound = await ai(`Confirm only 1 record found`)
      expect(noRecordsFound).toEqual(true)
    })
  })
  