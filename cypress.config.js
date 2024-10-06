const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber());

  return config;
  // implement node event listeners here
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern:"cypress/integration/Poject_Test/test1.js"
    //specPattern:"cypress/UAT/Features/*.feature"
  },
});
