import { cartPage, customerServicePage, paymentPage, shopping } from '../fixtures/fixtures';

describe('Task 3', () => { // Tests related to steps 1–9

  beforeEach(() => {
  
    cy.allure().label('owner', 'Or gilat');
    cy.allure().tag('regression', 'cart', 'amazon');
    cy.allure().epic('E-commerce');
    cy.allure().feature('Shipping Qualification');
    cy.allure().startStep('Navigating to Amazon and preparing cart');
    cy.visit('https://www.amazon.com/');
    cartPage.searching(); // Search for the first item
    cy.log("searched 1st product");
    shopping.firstshop(); // Add first item to the cart
    cy.log("shopped 1st product");
    shopping.secondshop(); // Add second item to the cart
    cy.log("shopped 2nd product");
    paymentPage.validation(); // Validate cart contents and total
    cy.log("checkout surpassed validation!");
    cy.allure().endStep();
  });

  afterEach(() => {
    cy.allure().startStep('Cleaning up cart after test');
    paymentPage.romoveitem(); // Remove items from the cart (reset)
    cy.log("cart was cleaned");
    cy.allure().endStep();
  });

  it('Should confirm we do NOT qualify for free shipping initially', () => {
    cy.allure().story('Initial Shipping Check');
    cy.allure().severity('normal');
    cy.allure().description('Ensures that a minimal cart does not trigger Amazon\'s free shipping message');

    cy.allure().startStep('Validating absence of free shipping message');
    paymentPage.unqualify(); // Check that no free shipping is granted
    cy.log("as it needed - we do not get free shipping");
    cy.allure().endStep();
  });

  it('Should qualify for free shipping after increasing quantity', () => {
    cy.allure().story('Shipping Eligibility Change');
    cy.allure().severity('critical');
    cy.allure().description('Increases quantity to trigger free shipping eligibility and validates the UI message');

    cy.allure().startStep('Adding quantity to qualify for free shipping');
    paymentPage.add_qualify(); // Add more items to trigger free shipping
    cy.log("as it needed - we get free shipping");
    cy.allure().endStep();
  });

});
