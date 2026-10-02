import { test as base, expect } from '@playwright/test';
import { CurrencyPage } from '../pages/CurrencyPage';
import { LoginPage_SOLID } from '../pages/LoginPage_SOLID';

type PageObjects = {
	currencyPage: CurrencyPage;
	loginPage: LoginPage_SOLID;
};

export const test = base.extend<PageObjects>({
	currencyPage: async ({ page }, use) => {
		await use(new CurrencyPage(page));
	},
	loginPage: async ({ page }, use) => {
		await use(new LoginPage_SOLID(page));
	},
});

export { expect };
