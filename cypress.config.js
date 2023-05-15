const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalWebKitSupport: true,
    chromeWebSecurity:false,
    viewportWidth: 1280,
    viewportHeight: 720,
    pageLoadTimeout: 9000,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        screenshotOnRunFailure: true,
        quite: true,
        overwrite: false,
        html: false,
        json: true
     } },
    setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  });
