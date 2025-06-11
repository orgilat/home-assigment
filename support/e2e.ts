import '@shelex/cypress-allure-plugin';
import 'cypress-xpath';

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('b.cardModuleFactory is not a function')) {
    return false;
  }
});
