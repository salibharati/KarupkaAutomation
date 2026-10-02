import { test } from '../../fixtures/fixture';

test.describe('Kapruka Currency', () => {
  test.skip(
    Boolean(process.env.CI) && process.env.RUN_LIVE_CURRENCY !== 'true',
    'Skipping live Kapruka currency test in CI. Set RUN_LIVE_CURRENCY=true to run it explicitly.'
  );

  test('should change currency from INR to USD and verify selection', async ({ currencyPage }) => {
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
