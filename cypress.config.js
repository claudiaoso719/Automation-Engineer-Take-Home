const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: 'cypress/results',
      html: false,
      json: true,
    },
  },
});
