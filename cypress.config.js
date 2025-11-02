const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
   reporterOptions: {
    charts: true,
    reportPageTitle: 'Report Test Automation - PGTAS',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,       // gerar HTML
    json: false,       // gerar JSON
    timestamp: 'mmddyyyy_HHMMss'
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    screenshotOnRunFailure: true,
  },
});
