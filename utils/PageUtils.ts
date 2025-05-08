import { Page } from "@playwright/test";

export async function scrollToBottom(page: Page): Promise<void> {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
}

export async function scrollToTop(page: Page): Promise<void> {
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });
}