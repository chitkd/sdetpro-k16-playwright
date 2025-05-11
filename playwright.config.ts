import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 60 * 1000,
  testDir: './tests',
  projects: [
    {
      name: 'Chromium',
      use: {...devices['Desktop Chrome']},
    }
  ],
  use: {
    headless: false,
    baseURL: "https://demowebshop.tricentis.com/",
    // "https://the-internet.herokuapp.com/",
    actionTimeout: 5 * 1000
  }
})
