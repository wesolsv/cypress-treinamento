const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawsome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
