import { test, expect } from '@playwright/test';
 
test('Playwright Special locators', async ({ page }) => {
  
    //test level timeout
    test.setTimeout(60000);
    //page level timeout
    page.setDefaultTimeout(30000);

    //step level timeout
    const slowExpect = expect.configure({ timeout: 10000 });

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();

    //by default 5 seconds wait for the success message to appear
    //step {timeout: 10000} lets us wait for 10 seconds for the success message to appear
    // await expect(page.getByText("Success! The Form has been submitted successfully!.").toBeVisible({timeout: 10000}));
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
    //locator(css)
 
});