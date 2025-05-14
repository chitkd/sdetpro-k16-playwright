import { expect, test } from '@playwright/test';
import { log } from 'console';
const CUSTOM_TIMEOUT = {timeout: 15 * 1000};


test('Link Text - XPATH', async({ page }) => {
    await page.goto('/');

    // const footerLoc = page.locator("//a[contains(text(), 'Elemental Selenium_')]");
    // //a[contains(text(), 'Elemental Selenium')]
    const footerEle = await page.waitForSelector("//a[contains(text(), 'Elemental Selenium_')]", CUSTOM_TIMEOUT);
    await footerEle.click();

    // Only wait for interation method

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(5 * 1000);
})
test('Link Text - CSS', async({ page }) => {
    await page.goto('/');

    const footerEle = await page.waitForSelector("a:has-text('Elemental Selenium')", CUSTOM_TIMEOUT);
    await footerEle.click();
})

test('Link Text - Filtering', async({ page }) => {
    await page.goto('/');

    const footerLoc = page.locator("a").filter({hasText: 'Form Authentication'});
    await footerLoc.click();
})

test('Handle multiple matching', async({ page }) => {
    await page.goto('/');

    const items = page.locator("a");
    const matchItemNumbers = await items.count();
    console.log('Total items: ', matchItemNumbers);

    // Interact on specific index item
    // await items.nth(2).click();

    // Interact on the first item
    await items.first().click({force: true});

    // Interact on the last item
    // await items.last().click();
})

test('Fill form authen', async({ page }) => {
    await page.goto('/');

     // 1. Navigate to the Form Authentication page
     const footerLoc = page.locator("a").filter({hasText: 'Form Authentication'});
     await footerLoc.click();
 
     // 2. Fill the form
     await page.locator("#username").fill('tomsmith');
     await page.locator("#password").fill('SuperSecretPassword!');
     // await page.locator("button[type='submit']").click();
     await page.locator("button:has-text('Login')").click();
 
     // 3. Get the heading text on dashboard page
     const dashboardHeadingLoc = "h2";
     let textContent = await page.locator(dashboardHeadingLoc).textContent();
     console.log(textContent?.trim());

     let innerText = await page.locator(dashboardHeadingLoc).innerText();
     console.log(innerText);

     expect(innerText).toBe('Secure Area');
})

