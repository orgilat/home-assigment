import { cartPage, customerServicePage } from '../fixtures/fixtures';

describe('Task 2', () => {
  beforeEach(() => {
       // Set Allure metadata for better report visibility
    cy.allure().label('owner', 'Or gilat');
    cy.allure().tag('smoke', 'cart', 'amazon');
    cy.allure().epic('E-commerce');
    cy.allure().feature('Cart Functionality');
    cy.allure().startStep('Visiting Amazon homepage');
    cy.log('Visiting https://www.amazon.com/'); 
    cy.visit('https://www.amazon.com/');
    cy.allure().endStep();
  });

  it('Should see buttons and add item to cart', () => {
    cy.allure().story('Add to Cart');
    cy.allure().severity('critical');
    cy.allure().description('This test checks the ability to view main menu items and add an item to the cart on Amazon.');
// Step: check the number of main menu items
    cy.allure().startStep('Checking number of main menu items');
    cy.log('Checking main menu item count');
    cartPage.expectMainMenuItemsCount();
    cy.allure().endStep();
 // Step: verify the names of main menu items
    cy.allure().startStep('Checking main menu item names');
    cy.log('Checking main menu item names');
    cartPage.checkNames();
    cy.allure().endStep();

    cy.allure().startStep('Navigating to Customer Service');
    cy.log('Clicking on customer service link');
    cartPage.clickCustomerService();
    cy.allure().endStep();
// Step: check that the FAQ section is visible
    cy.allure().startStep('Verifying FAQ is visible');
    cy.log('Expecting FAQ to be visible');
    customerServicePage.expectFAQVisible();
    cy.allure().endStep();
  });
});
