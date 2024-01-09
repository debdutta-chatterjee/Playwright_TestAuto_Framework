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
      await ai('Search for "performance"')
      await ai('Click the Performance link')
      await page.waitForTimeout(2_000)
      await ai('Enter "Fiona" in the employee name input')
      await page.waitForTimeout(2_000)
      await ai('Click "Fiona Grace"')
      await ai('Click the "Search" button in the employee reviews section')
      const noRecordsFound = await ai('Confirm there are no records found')
      expect(noRecordsFound).toEqual(true)
    })
  })
  