const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  
  use: {
    browserName: 'chromium',
    headless: false,
    actionTimeout: 10 * 1000,
    screenshot: 'on',
    trace: 'only-on-failure',
    
  }
});
