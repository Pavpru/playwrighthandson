const { test , expect} = require('@playwright/test');

test('first test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: 'screenshot.png' });
  await context.close();
});

test('second test', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  
  await page.locator("input#username").fill("Playwright");
  await page.locator("input#password").fill("Learning");
  await page.locator("input#signInBtn").click();
  await page.locator("div.alert.alert-danger.col-md-12").textContent();
  await expect(page.locator("div.alert.alert-danger.col-md-12")).toContainText("Incorrect");
})