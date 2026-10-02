# Kapruka Automation

This project contains Playwright end-to-end automation tests for the Kapruka website.

## Prerequisites

- Node.js 20+
- npm
- A browser-enabled environment for Playwright

## Install

```bash
npm install
npx playwright install --with-deps
```

## Run tests

Run the full suite:

```bash
npm test
```

Run a specific spec:

```bash
npx playwright test tests/e2e/login_SOLID.spec.ts --reporter=line
```

Run in headed mode:

```bash
npm run test:headed
```

Open the HTML report:

```bash
npx playwright show-report
```

## Environment variables

The project loads environment values from:

- `config/.env.qa`
- `.env`

Required keys for live login tests:

```env
TEST_EMAIL=your_email
TEST_PASSWORD=your_password
BASE_URL=https://www.kapruka.com
```

For CI runs, the login test is skipped by default unless `RUN_LIVE_LOGIN=true` is explicitly set.

## GitHub Actions

The repository includes workflows in `.github/workflows` for:

- `main.yml` for push and pull request validation
- `ci.yml` for scheduled/manual CI runs

These workflows install dependencies and run Playwright tests.

## Notes

- Local runs can use the project `.env` file.
- GitHub Actions should use repository secrets instead of committed credentials.
- Generated Playwright and Allure reports are not tracked in Git and should be opened locally.
