import { expect, Locator, Page } from '@playwright/test';
import { BasePage_SOLID } from './BasePage_SOLID';

export class CurrencyPage extends BasePage_SOLID {
  readonly currencySelect: Locator;

  constructor(page: Page) {
    super(page);
    this.currencySelect = page.locator('select:has(option[value="INR"]):has(option[value="USD"])').first();
  }

  async goto(): Promise<void> {
    await this.navigateTo('/');
    await this.isLoaded();
    await this.page.waitForTimeout(1000);
  }

  async selectCurrency(currency: 'INR' | 'USD' | 'LKR'): Promise<void> {
    await this.clickLocator(this.currencySelect);
    await this.page.waitForTimeout(900);
    await this.currencySelect.selectOption({ value: currency });
    await this.page.waitForTimeout(1500);
  }

  async verifyCurrency(currency: 'INR' | 'USD' | 'LKR'): Promise<void> {
    await expect(this.currencySelect).toHaveValue(currency);
    await this.page.waitForTimeout(1000);
  }

  async verifyHomepageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(/Kapruka/i);
  }

  async isLoaded(): Promise<void> {
    await expect(this.currencySelect).toBeVisible({ timeout: 30000 });
  }
}
