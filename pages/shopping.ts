
require('cypress-xpath');

export class Shopping {
  // מאתר את שם המוצר לפי חלק מהטקסט
  productTitle = () =>
    cy.contains('span', 'Office Personal Electric Pencil Sharpener');

  // כפתור "Add to Cart"
  Sharpener = () => cy.xpath("//span[normalize-space(text())='Office Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Gray (EPS4-KTGRAY)']"); //נכנס לאיבר עצמו כדי למנוע פלאקי טסט 

  // הודעת "Item Added" שמופיעה לרגע
  itemAdd = () => cy.get('#add-to-cart-button');  //נוסיף לעגלה

  // כפתור swatch ראשון לפי name="5" (RedBlackBlue)
  redblackblue = () => cy.xpath("(//input[@name='5'])[1]");

  colorcheck = () => cy.get('#inline-twister-expanded-dimension-text-color_name'); //הצבע המופיע ליד - אמור להשתנות בהתאם 

  addto = () => cy.get('#add-to-cart-button'); //כפתור ההוספה

  confirmation= () => cy.get('h1.a-size-medium-plus.a-color-base'); //מטרתו - לבדוק שאכן המוצר הוסף לעגלה 
 
  payment= () => cy.get('#nav-cart'); //מטרתו - ה 


  


  /**#add-to-cart-button
   * מאמת שהמוצר מופיע, לוחץ על כפתור ההוספה, ומוודא שההודעה "Item Added" הופיעה.(
   */
  firstshop() {
    const expectedText = 'Bostitch Office Personal Electric Pencil Sharpener';

    this.productTitle()
      .should('be.visible')
      .should('contain.text', expectedText);

    this.Sharpener()
      .should('be.visible') //נכנסים פנימה
      .click();

    this.itemAdd()
      .should('be.visible') //מוסיפים לעגלה 
      .click();

       this.confirmation()
    .should('be.visible')
    .should('contain.text', 'Added to cart');  // נוודא שאכן הוסף
  }

  /**
   * נכנס לעמוד מוצר, בוחר את הסוואץ הראשון (RedBlackBlue), ולוחץ על Add to Cart ומוודא כי אכן נלחץ  - שלבים 5-9 
   */
  secondshop() { 
    cy.visit('https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z?th=1'); 

    // בוחרים במספריים המבושים אחרי שבודקים מופיע שלהם
    this.redblackblue()
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });


    this.colorcheck().should('contain.text', 'Red, Black, Blue'); //בודקים כי אכן משתנה הצבע בתיאור לצבע הרצוי

    cy.wait(3000); //הוספתי פה המתנה כיוון שזיהיתי שמדובר בפלאקי טסט -אמאזון נוטה לחזור לid  הראשוני ואני רוצה לוודא אמינות לאורך זמן

    // לוחץ על Add to Cart
     this.addto()
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });

    this.confirmation()
    .should('be.visible')
    .should('contain.text', 'Added to cart');  

    this.payment().click()
  }

  
  //הפונקציה האחרונה בביפור אול- תפקידה לוודא כי המוצרים הנכונים נמצאים בעגלה לקראת רצף הטסטים יש לה חשיבות מכרעת- אותה נעשה בpom נפרד בשם payment
}
