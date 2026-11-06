const {expect , test} = require('@playwright/test')
let webContext;
test('end to end test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const emailID=page.locator('#userEmail');
    const password=page.locator('#userPassword');
    const loginBtn=page.locator('input#login');
    await emailID.fill('pavanpruthvin@gmail.com');
    await expect(emailID).toHaveValue('pavanpruthvin@gmail.com');
    await password.fill('Pruthvin8#n');
    await loginBtn.click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:'state.json'});
    webContext= await browser.newContext({storageState:'state.json'});

});
test('second test', async () => {
    const page = await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard');
   const productNamesLocator= page.locator('.card-body b');
    await expect(productNamesLocator.first()).toBeVisible();
    const productNames= await productNamesLocator.allTextContents();
    let count=await productNamesLocator.count()
    console.log(await productNamesLocator.count());
    console.log(await productNames.length);
    for (let i = 0; i < productNames.length; i++) {
        if (productNames[i] === 'ZARA COAT 3') {
            await page.locator('.card-body').nth(i)
                .getByRole('button', { name: 'Add To Cart' })
                .click();
            break;
        }
    }

})