import { test } from '../../fixtures/fixture';

const TEST_EMAIL = process.env.TEST_EMAIL;
const TEST_PASSWORD = process.env.TEST_PASSWORD;

const email = TEST_EMAIL ?? '';
const password = TEST_PASSWORD ?? '';

test.describe('Kapruka Login Tests', () => {
  test.beforeAll(() => {
    if (!email || !password) {
      throw new Error(
        'TEST_EMAIL and TEST_PASSWORD must be set in your .env file or CI/CD secrets before running tests'
      );
    }
  });

  test('Login with valid credentials', async ({ loginPage }) => {
    await test.step('Open Kapruka login page', async () => {
      await loginPage.goto();
    });

    await test.step('Validate login page is ready', async () => {
      await loginPage.isLoaded();
    });

    await test.step('Enter login details and submit', async () => {
      await loginPage.login(email, password);
    });

    await test.step('Validate login completed', async () => {
      await loginPage.verifyLoginSuccess();
    });
  });
});

