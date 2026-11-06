const { request } = require('@playwright/test');
const {APiUtils}= require('../utils/APIUtils');
const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad = {orders:[{country:"Cuba",productName:"ZARA COAT 3"}]};
 
exports.customtestbase = test.extend({
    authenticatedPage: async ({ browser }, use) => {
        const context = await browser.newContext();
        
            const page = await context.newPage();
            const emailId = page.locator('#userEmail');
            const password = page.locator('#userPassword');
            const loginButton = page.locator('input#login');

            await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
            await emailId.fill('pavanpruthvin@gmail.com');
            await password.fill('Pruthvin8#n');
            await loginButton.click();
            await page.waitForLoadState('networkidle');
            await use(page);
        
         
    },

    createorder: async ({ }, use) => {
          const apiContext = await request.newContext();
          const apiUtils = new APiUtils(apiContext, loginPayLoad);
          response = await apiUtils.createOrder(orderPayLoad);
          use(response);

}

    


});
