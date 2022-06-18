const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bwa9yx',
  /*reporter: 'mochawsome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },*/
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://alura-fotos.herokuapp.com/'
  },
});
