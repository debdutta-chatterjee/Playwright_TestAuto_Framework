
import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test('zerostep example', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const headerText = await ai('Get the header text', aiArgs)
  await page.goto('https://google.com/')
  await ai(`Type "${headerText}" in the search box`, aiArgs)
  await ai('Press enter', aiArgs)
})


test.describe('Calendly', () => {
  test('book the next available timeslot', async ({ page }) => {
    await page.goto('https://calendly.com/zerostep-test/test-calendly')

    await ai('Verify that a calendar is displayed', { page, test })
    await ai('Dismiss the privacy modal', { page, test })
    await ai('Click on the first day in the month with times available', { page, test })
    await ai('Click on the first available time in the sidebar', { page, test })
    await ai('Click the Next button', { page, test })
    await ai('Fill out the form with realistic values', { page, test })
    await ai('Submit the form', { page, test })

    const element = await page.getByText('You are scheduled')
    expect(element).toBeDefined()
  })
})

test.describe('Google', () => {
  const searchTerm = 'software testing'

  test('search and verify the first organic search result', async ({ page }) => {
    await page.goto('https://www.google.com')

    await ai(`Search for '${searchTerm}'`, { page, test })
    await page.keyboard.press('Enter')

    await page.waitForURL('https://www.google.com/search**')

    const title = await ai(`What is the title of the first organic search result?`, { page, test })

    console.log('First organic search result is: ', title)
  })
})