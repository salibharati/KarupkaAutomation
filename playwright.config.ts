import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const env = process.env.TEST_ENV || 'qa';
const envFile = path.resolve(__dirname, 'config', `.env.${env}`);
const rootEnvFile = path.resolve(__dirname, '.env');

dotenv.config({ path: envFile });
dotenv.config({ path: rootEnvFile });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [
    ['html'],
    ['allure-playwright'],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://www.kapruka.com',
    screenshot: 'only-on-failure',
    trace: 'on',
    viewport: { width: 1280, height: 720 },
  },
});