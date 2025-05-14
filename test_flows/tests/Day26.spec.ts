import { test } from '@playwright/test';

test('Link Text - XPATH', async({ page }) => {
    await page.goto('/');

    // DEBUG PURPOSE ONLY
    await page.waitForTimeout(3 * 1000);
})

/**
 * master
 * feature/login
 *     test/login: data-testid, tests
 * 
 * 
 *----Release list----
 */