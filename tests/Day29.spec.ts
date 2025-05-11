import { expect, test } from '@playwright/test';
import { log, time } from 'console';
import { TIMEOUT } from 'dns';
import {getAdvertisingParams} from '../utils/AdUtils';
import { scrollToBottom, scrollToTop } from '../utils/PageUtils';
const CUSTOM_TIMEOUT = { timeout: 15 * 1000 };

test.describe('Handle Alerts', () => {
    test('Handle JS Alert', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsAlertLoc = await page.locator("button[onclick='jsAlert()']");

        // Must define event handler
        page.on("dialog", async dialog => {
            await dialog.accept();
        });

        // Trigger the JS alert
        await jsAlertLoc.click();
        await page.waitForTimeout(2 * 1000);
    })

    test('Handle JS confirm', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsAlertLoc = await page.locator("button[onclick='jsConfirm()']");

        // Must define event handler
        page.on("dialog", async dialog => {
            await dialog.dismiss();
        });

        // Trigger the JS alert
        await jsAlertLoc.click();
        await page.waitForTimeout(2 * 1000);
    })

    test('Handle JS Prompt', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsAlertLoc = await page.locator("button[onclick='jsPrompt()']");
        const resultLoc = await page.locator("#result");

        // Must define event handler
        page.on("dialog", async dialog => {
            await dialog.accept("Hello");
        });

        // Trigger the JS alert
        await jsAlertLoc.click();
        await page.waitForTimeout(2 * 1000);

        // get the result text
        const resultText = await resultLoc.innerText();
        console.log(resultText.split(':')[1].trim());

    })
})

test.describe('Execute JS snippet', () => {
    test('Execute without params', async ({ page }) => {
        await page.goto('/floating_menu');
        scrollToBottom(page);

        await page.evaluate(() => {
            const elementsToRemove = document.querySelectorAll('h3');
            elementsToRemove.forEach(element => element.remove());
        });

        scrollToTop(page);

        await page.waitForTimeout(2 * 1000);
    })

    test('Execute with params and get return value', async ({ page }) => {
        await page.goto('https://www.foodandwine.com/');
        const adId = "leaderboard-flex-1";
        const leaderBoardFlexLoc = `#${adId}`;

        await page.waitForSelector(leaderBoardFlexLoc, {timeout: 5 * 1000 });
       // scrollToBottom(page);

        const adParams = await getAdvertisingParams(page, adId);
        console.log(JSON.stringify(adParams));

        if (adParams != null){
            console.log("\tdocId list: ", JSON.stringify(adParams.docId));
            expect(adParams.docId[0]).toBe("6361217");
        }
    

    })
})

