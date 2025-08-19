const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('pokemon page can be navigated to', async ({ page }) => {
    const link = page.getByRole('link', { name: 'bulbasaur' })
    await link.click()

    const expectedText = 'bulbasaur'
    await expect(page.getByText(expectedText)).toBeVisible()
  })
})
