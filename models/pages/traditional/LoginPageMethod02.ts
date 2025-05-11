import { Locator, Page } from "@playwright/test";
import { LoginCreds } from "../../../tests/Day30.spec";

export default class LoginPageMethod02 {
    // Scope to declare selectors
    private usernameSel: string = "#username";
    private passwordSel: string = "#password";
    private loginButtonSel: string = "button[type='submit']";

    // Constructor
    constructor (private page: Page){
        this.page = page;
    }

    public username(): Locator {
        return this.page.locator(this.usernameSel);
    }

    public password(): Locator {
        return this.page.locator(this.passwordSel);
    }

    public loginButton(): Locator {
        return this.page.locator(this.loginButtonSel);
    }


}