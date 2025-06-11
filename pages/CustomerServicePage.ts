export class CustomerServicePage {
  // Returns the search input field in the customer service page
  contactUsInput = () => cy.get('input[type="search"]');
  goToOrdersButton = () => cy.contains('a', 'Go to Your Orders');

  // Returns the FAQ section element


  /**
   * Ensures the FAQ section is visible
   * and types a question into the search field.
   */
  expectFAQVisible() {
    this.contactUsInput().should('be.visible'); // Verifies that FAQ section is visible
    this.contactUsInput().type("where is my stuff{enter}"); // Types the query and presses Enter
    this.goToOrdersButton().should('be.visible'); // Verifies that the 'Go to Your Orders' button is visible
    this.goToOrdersButton().click(); // Clicks the 'Go to Your Orders' button
     cy.log(' Test completed successfully'); // Optional log message marking test end
    
  }
}
