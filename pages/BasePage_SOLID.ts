import { expect, Locator, Page } from '@playwright/test';
import { config } from '../config/environment';

export abstract class BasePage_SOLID {
    readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    }

    async clickLocator(locator: Locator): Promise<void> {
        await locator.click();
    }

    async navigateTo(path: string): Promise<void> {
        await this.page.goto(new URL(path, `${config.baseUrl}/`).toString(), {
            waitUntil: 'domcontentloaded',
        });
    }

    async fill(locator: Locator, value: string): Promise<void> {
        await locator.fill(value);
    }

    protected async expectLoaded(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible({ timeout: 15000 });
    }

    abstract isLoaded(): Promise<void>;
}