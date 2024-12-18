import { test, expect } from '@playwright/test';


test('Login to M-Compass as Manager', async ({ page }) => {
  try {
    await page.goto('https://cmsautomation.mitrais.com/CRS.UI.Web/Login/LogOn');
  } catch (error) {
    console.error('Gagal mengakses halaman:', error);
  }
  
  //Login
  await page.goto('https://cmsautomation.mitrais.com/CRS.UI.Web/Login/LogOn');
  await page.waitForSelector("[id='btn-login']", { state: 'visible' }); //Login page
  await page.click("[id='btn-login']"); //Click Login button
  await expect(page).toHaveTitle(/Sign in/);
  await page.waitForSelector("[id='i0116']", { state: 'visible' }); //Email field
  await page.fill('input[id="i0116"]', 'rommy@periodictabledev.onmicrosoft.com'); //email field input
  await page.waitForSelector("[id='idSIButton9']", { state: 'visible' }); //button next
  await page.click("[id='idSIButton9']"); //click button next
  await page.waitForSelector("[id='i0118']", { state: 'visible' }); //password field
  await page.fill('input[id="i0118"]', 'Ngg4kt4u'); //password field input
  await page.waitForSelector("[id='idSIButton9']", { state: 'visible' }); //button submit
  await page.click("[id='idSIButton9']"); //click button submit

  //Homepage
  await page.waitForSelector("[id='EmployeeAlias']", { state: 'visible' }); //Homepage welcome

   //Usermenu drop-down
   await page.waitForSelector("[id='newEmpRole']", { state: 'visible' }); //User menu drop-down
   await page.click("[id='newEmpRole']"); //click drop-down
 
   //logout-btn
   await page.waitForSelector("[id='logout-btn']", { state: 'visible' }); //User menu drop-down
   await page.click("[id='logout-btn']"); //click drop-down
   await page.waitForSelector("[id='btn-login']", { state: 'visible' }); //Login page
   
});