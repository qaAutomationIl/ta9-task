const { test, expect } = require('@playwright/test');

test.beforeEach(async({page}) => {
  await page.goto('https://xd.adobe.com/view/0b1e0e68-be9f-4b48-96fa-2a4712032331-5e4d/grid/');
  await expect(page).toHaveTitle('Flow 1');
})

test('Verify homePage', async ({ page }) => {
  await expect(page.locator('Linked Screens for screen Main - list mode')).toBeVisible;
  await expect(page.getByText('4 Screens')).toBeVisible();
});

test('Create a comment', async ({ page }) => {
  await page.getByRole('gridcell', { name: 'Screen Tile mode' }).locator('img').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('#ccx-comments-submit').getByRole('textbox').locator('div').click();
  await page.locator('#ccx-comments-submit').getByRole('textbox').fill('this is a test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('John Doe, Jane Doe, etc.').click();
  await page.getByPlaceholder('John Doe, Jane Doe, etc.').fill('Tom');
  await page.getByRole('button', { name: 'Continue' }).click();
});
