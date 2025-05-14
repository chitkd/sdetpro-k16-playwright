import { Page } from "@playwright/test";
import FooterComponent from "../components/footer/FooterComponent";
import ProductItemComponent from "../components/ProductItemComponent";
import PageBodyComponent from "../components/PageBodyComponent";

export default class HomePage {
    constructor(private page: Page) {
        this.page = page;
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.LOCATOR));
    }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.LOCATOR));
    }
}