const { test , expect} = require('@playwright/test');



test('client app', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const eamilId=page.locator("input#userEmail");
  const password=page.locator("input#userPassword");
  const loginBtn=page.locator("input#login");
  const productName=page.locator("div.card-body b");
  await eamilId.fill("pavanpruthvin@gmail.com");
  await password.fill("Pruthvin8#n");
  await loginBtn.click();
  //await page.waitForLoadState('networkidle');
  await page.locator("div.card-body b").first().textContent();
  const products=await productName.allTextContents(); 
    console.log(products);
    console.log(await page.title());
  
 })