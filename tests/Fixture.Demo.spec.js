const { expect } = require('@playwright/test');
const { customtestbase } = require('./utils/fixture.js');

customtestbase('Fixture demo', async ({ authenticatedPage,createorder }) => {
    await authenticatedPage.goto('https://rahulshettyacademy.com/client/#/dashboard');
     await authenticatedPage.locator("button[routerlink*='myorders']").click();
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText(createorder.orderId)).toBeVisible();


});
