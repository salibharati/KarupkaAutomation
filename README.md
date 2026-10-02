# Playwright + TypeScript Automation Framework for Kapruka

A beginner-friendly automation framework for testing the Kapruka website using:

- Playwright — browser automation
- TypeScript — typed JavaScript
- Node.js / npm — runtime and package management

The goal is to automate real end-to-end workflows such as login, navigation, and validation against the live application.

---

## A. Project Architecture

```text
KaprukaAutomation/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── main.yml
├── config/
│   ├── .env.qa
│   ├── env.config.ts
│   ├── environment.ts
│   └── .env.example (optional)
├── fixtures/
│   └── fixture.ts
├── pages/
│   ├── BasePage_SOLID.ts
│   └── LoginPage_SOLID.ts
├── tests/
│   └── e2e/
│       ├── example.spec.ts
│       └── login_SOLID.spec.ts
├── downloads/
├── reports/
├── test-results/
├── playwright-report/
├── allure-results/
├── allure-report/
├── .env
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── package-lock.json
```

---

## B. Tech Stack

- Playwright
- TypeScript
- Node.js
- dotenv for environment variables
- GitHub Actions for CI

---

## C. Prerequisites

- Node.js 20+
- npm
- Playwright browsers installed

Install dependencies:

```bash
npm install
npx playwright install --with-deps
```

---

## D. Environment Setup

The project reads values from:

- `config/.env.qa`
- `.env`

Example:

```env
TEST_EMAIL=your_email@example.com
TEST_PASSWORD=your_password_here
BASE_URL=https://www.kapruka.com
```

Important:
- Keep real credentials out of source control.
- Use a local `.env` file for development.
- Use GitHub repository secrets for CI/CD.

---

## E. Running Tests

Run the full suite:

```bash
npm test
```

Run a single spec:

```bash
npx playwright test tests/e2e/login_SOLID.spec.ts --reporter=line
```

Run headed:

```bash
npm run test:headed
```

Open the HTML report:

```bash
npx playwright show-report
```

---

## F. CI / GitHub Actions

The repository includes automation workflows in `.github/workflows`:

- `main.yml` — runs on push and pull requests
- `ci.yml` — scheduled/manual CI execution

Environment secrets expected by the workflow:

```yaml
env:
  TEST_ENV: qa
  RUN_LIVE_LOGIN: 'false'
  TEST_EMAIL: ${{ secrets.TEST_EMAIL }}
  TEST_PASSWORD: ${{ secrets.TEST_PASSWORD }}
  BASE_URL: ${{ secrets.BASE_URL }}
```

> Live login is skipped by default in CI to avoid unstable production execution. It can be enabled explicitly with `RUN_LIVE_LOGIN=true` when required.

---

## G. Security Notes

- Never commit real credentials.
- Use GitHub Secrets for CI environments.
- Keep generated test reports local and untracked.
- Do not store production account passwords in README files or tracked config files.

---

## H. Notes

This project is structured for maintainable end-to-end automation with Page Object Model patterns and environment-based configuration, making it suitable for local execution and CI-based validation.
