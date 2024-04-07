const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fod4wq',
  pageLoadTimeout:30000,
  // here we have overwrite the timeout ,you can see the default value in TestRunner --> Setting --> ProjectSetting
  defaultCommandTimeout: 6000,
  env:{
    url: 'https://rahulshettyacademy.com',
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
