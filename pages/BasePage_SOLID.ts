import{ Page, Locator } from 'playwright';
export abstract class BasePage_SOLID {
  readonly  page: Page;
  constructor(page: Page) {
    this.page = page;
    }
    async clickLocator(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: 'load' });
    }
    async fill(locator: Locator, value: string): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(value);
    }
    abstract isloaded(): Promise<void>;
}