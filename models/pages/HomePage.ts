import { Page } from "@playwright/test";
import FooterComponent from "../components/global/FooterComponent";
import ProductItemComponent from "../components/ProductItemComponent";

export default class HomePage {
    constructor(private page: Page) {
        this.page = page;
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.LOCATOR));
    }

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemComponentList = await this.page.locator(".item-box").all();
        return productItemComponentList.map(locator => new ProductItemComponent(locator));
    }
}