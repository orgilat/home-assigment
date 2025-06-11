
export class CartPage {
  // Returns all the main navigation menu items (<li> elements inside <ul class="nav-ul">)
  navMenuItems = () => cy.get('ul.nav-ul > li');

  // Returns the "DISMISS" button that closes a popup blocking the navigation menu
  dismissButton = () => cy.get('input[data-action-type="DISMISS"][data-action-params*="AIS_INGRESS"]');

  searchbox = () => cy.get('#twotabsearchtextbox');
  glass = () => cy.get('#nav-search-submit-button');


 
  // Validates that the main menu contains exactly 6 items
  expectMainMenuItemsCount() {
    this.navMenuItems().should('have.length', 6);
   
  }

  // Validates the exact text of each main menu item, in order
  checkNames() {
    this.navMenuItems().eq(0).should('contain.text', "Today's Deals");
    this.navMenuItems().eq(1).should('contain.text', "Registry");
    this.navMenuItems().eq(2).should('contain.text', "Prime Video");
    this.navMenuItems().eq(3).should('contain.text', "Gift Cards");
    this.navMenuItems().eq(4).should('contain.text', "Customer Service");
    this.navMenuItems().eq(5).should('contain.text', "Sell");
  
  }

  /**
   * Clicks the "Customer Service" menu item after dismissing a popup that may block it.
   * Then, verifies that the user is redirected to the correct Customer Service URL.
   */
  clickCustomerService() {
    // There is a popup that appears on page load and can block the menu — this dismisses it
    this.dismissButton().click();                          
    this.navMenuItems().eq(4).click();
    // Verifies that the correct URL was loaded
    cy.url().should('include', '/gp/help/customer/display');
  } 






   // פה זה כבר של טסק 3 
  searching() {
  this.searchbox().should('be.visible')
  this.searchbox().type('Bostitch Office Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Gray (EPS4-KTGRAY)')
  this.glass().should('be.visible')
  this.glass().click()
}

  //now we are moving to fenctions of task 3
}
