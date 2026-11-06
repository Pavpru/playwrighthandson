const {expect , test} = require('@playwright/test')

test.only('end to end test', async ({page}) => {
    page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const emailID=page.locator('#userEmail');
    const password=page.locator('#userPassword');
    const loginBtn=page.locator('input#login');
    await emailID.fill('pavanpruthvin@gmail.com');
    await expect(emailID).toHaveValue('pavanpruthvin@gmail.com');
    await password.fill('Pruthvin8#n');
    await loginBtn.click();
    await page.waitForLoadState('networkidle');
    
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
    await page.locator("[routerlink*='cart']").click();
    await page.locator('div li').first().textContent();
    //await expect(page.locator('h3:has-text("ZARA COAT 3")')).toBeVisible();
    const bool=await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
    expect(bool).toBeTruthy();
    await page.locator('text=Checkout').click();
    await page.locator('input[placeholder*="Country"]').pressSequentially("ind", { delay: 150 });
    dropdown=page.locator('.ta-results');
    await dropdown.waitFor();
    const optionsCount=await dropdown.locator('button').count();
    for (let i = 0; i < optionsCount; i++) {
        const text=await dropdown.locator('button').nth(i).textContent();
        if (text.trim() === "India") {
            await dropdown.locator('button').nth(i).click();
            break;
        }   
    }
    await page.locator('.action__submit').click();
    await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
    const orderId=await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderId);
    await page.locator('button[routerlink*="myorders"]').click();
    await page.locator('tbody').waitFor();
    const rows=page.locator('tbody tr');
    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderId=await rows.nth(i).locator('th').textContent(); 
     } 
    //  expect(orderId.includes(rowOrderId)).toBeTruthy();
    await rows.nth(i).locator('button').first().click();
    const orderIdDetails=await page.locator('.col-text').textContent();
    await expect(orderId.includes(orderIdDetails)).toBeTruthy();
    });