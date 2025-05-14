import { log } from "console";
import HomePage from "../../models/pages/HomePage";
import test from "@playwright/test";

test("POM - List of component", async ({ page }) => {
    await page.goto("/");
    const homePage = new HomePage(page);
    const pageBodyComponent = homePage.pageBodyComponent();
    const productItemCompList = await pageBodyComponent.productItemComponentList();

    for (const productItemComp of productItemCompList) {
        const productTitle = await productItemComp.productTitle();
        const productPrice = await productItemComp.productPrice();
        console.log(`${productTitle}: ${productPrice}`);
    }
});

