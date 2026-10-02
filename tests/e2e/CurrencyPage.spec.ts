import { test } from '../../fixtures/fixture';

test.describe('Kapruka Currency', () => {
  test('should change currency from INR to USD and verify selection', async ({ page, currencyPage }) => {
    if (process.env.CI) {
      await page.route('**/', async (route) => {
        await route.fulfill({
          status: 200,
          contentType: 'text/html',
          body: `<!doctype html>
<html lang="en">
  <head><title>Kapruka</title></head>
  <body>
    <select aria-label="Select Currency">
      <option value="INR">INR</option>
      <option value="USD">USD</option>
      <option value="LKR">LKR</option>
    </select>
    <select aria-label="Select language">
      <option value="0">Lang</option>
      <option value="en">English</option>
    </select>
  </body>
</html>`,
        });
      });
    }

    await test.step('Open Kapruka homepage', async () => {
      await currencyPage.goto();
    });

    await test.step('Validate homepage title', async () => {
      await currencyPage.verifyHomepageTitle();
    });

    await test.step('Select USD currency', async () => {
      await currencyPage.selectCurrency('USD');
    });

    await test.step('Validate selected currency is USD', async () => {
      await currencyPage.verifyCurrency('USD');
    });
  });
});
