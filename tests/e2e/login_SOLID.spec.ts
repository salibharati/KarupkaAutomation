import { test, expect } from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';
import { LoginPage_SOLID } from '../../pages/LoginPage_SOLID';

dotenv.config({ path: path.resolve(__dirname, '../../config/.env.qa'), override: true });
dotenv.config({ path: path.resolve(__dirname, '../../.env'), override: true });

const TEST_EMAIL = process.env.TEST_EMAIL;
const TEST_PASSWORD = process.env.TEST_PASSWORD;
const RUN_LIVE_LOGIN = process.env.RUN_LIVE_LOGIN === 'true';

const email = TEST_EMAIL ?? '';
const password = TEST_PASSWORD ?? '';

test.describe('Kapruka Login Tests', () => {
  test.beforeAll(() => {
    if (process.env.CI && !RUN_LIVE_LOGIN) {
      test.skip(true, 'Skipping live production login in CI. Set RUN_LIVE_LOGIN=true to run it explicitly.');
    }

    if (!email || !password) {
      throw new Error(
        'TEST_EMAIL and TEST_PASSWORD must be set in your .env file or CI/CD secrets before running tests'
      );
    }
  });

  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage_SOLID(page);

    await loginPage.goto();
    await loginPage.isloaded();
    await loginPage.login(email, password);
    await loginPage.verifyLoginSuccess();
    await expect(page).not.toHaveURL(/accountlogin/i);
  });
});

