const { test, expect } = require('@playwright/test');

test('Dropdown test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const username = page.locator('#username');
    const password = page.locator('#password');
    const dropdown = page.locator('select.form-control');

    await username.fill('Playwright');
    await password.fill('Learning');
    await dropdown.selectOption('consult');

    const userRadio = page.locator('.radiotextsty').last();
    await userRadio.click();
    await page.locator('#okayBtn').click();
    await expect(userRadio).toBeChecked();

    const terms = page.locator('#terms');
    await terms.check();
    await expect(terms).toBeChecked();
    await terms.uncheck();
    await expect(terms).not.toBeChecked();
    await expect(dropdown).toHaveValue('consult');
});
