import { Locator, Page, expect } from '@playwright/test';
import { BasePage_SOLID } from './BasePage_SOLID';
import { config } from '../config/environment';

export class LoginPage_SOLID extends BasePage_SOLID {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator(
            'input[type="email"], input[name="email"], input[placeholder*="email" i], input[aria-label*="Email" i]'
        ).first();
        this.passwordInput = page.locator(
            'input[type="password"], input[name="password"], input[placeholder*="password" i], input[aria-label*="Password" i]'
        ).first();
        this.loginButton = page.locator(
            'button:has-text("Login"), input[type="submit"][value*="Login" i], button[aria-label*="Login" i]'
        ).first();
    }

    async goto(): Promise<void> {
        await this.navigateTo(config.loginPath);
    }

    async login(email: string, password: string): Promise<void> {
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.page.waitForTimeout(2000);
        await this.clickLocator(this.loginButton);
        await this.page.waitForTimeout(3000);
    }

    async verifyLoginSuccess(): Promise<void> {
        await expect(this.page).not.toHaveURL(/accountlogin/i);
    }

    async isLoaded(): Promise<void> {
        await this.expectLoaded(this.emailInput);
        await this.expectLoaded(this.passwordInput);
        await this.expectLoaded(this.loginButton);
    }
}
