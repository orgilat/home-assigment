export class payment {

amount = () => cy.get('#sc-subtotal-label-activecart');
firstitem = () => cy.xpath("(//span[@class='a-truncate-cut'])[1]");
seconditem = () => cy.xpath("(//span[@class='a-truncate-cut'])[3]");
price = () => cy.xpath("(//span[contains(@class,'a-size-medium a-color-base')])[1]");
shippingmsg = () => cy.get("p[role='status']");// משתנה בו נעזר בטסטים לדעת אם קיבלנו או לא שיפינג בחינם על ידי קריאת המלל
plus = () => cy.xpath("(//button[@aria-label='Increase quantity by one'])[2]");
deleteone = () => cy.xpath("(//input[@data-action='delete-active'])[1]");
deletetwo = () => cy.xpath("(//input[@data-action='delete-active'])[2]");


validation() { //נעשה בדיקת ולידציה ב3 רבדים- כמות פריטים- שמות ומחיר - כדי להיות בטוחים שסיימנו את שלב 9 כראוי(  (

this.amount()
  .should('be.visible')
  .should('contain.text', '2 item');  // ולידציה ראשונה- כמות 

    
this.firstitem()
  .should('be.visible')
  .should('include.text', 'iBayam 8" All Purpose Scissors');


this.seconditem()
  .should('be.visible')
  .should('include.text', 'Electric Pencil Sharpener');



      this.price()
    .should('be.visible') 
    .should('contain.text','30.56');  // ולידציה 3- מחיר
}
  unqualify() {  //מטרת הפונקציה- לבדוק כי אני לא ראוי למשלוח חינם 
  this.shippingmsg()
    .should('be.visible') 
    .should('contain.text', 'Add $28.43 of eligible items to your order for FREE Shipping.');  // אנחנו עושים פה בדיקה כפולה- גם שלא ראוי למשלוח וגם בדיקה נוספת של הסכום - 


}

add_qualify() { //הפונקציה מוסיפה 3 פריטים- ובודקת כי אכן ראוי למשלוח חינם
  Cypress._.times(3, () => {
    this.plus().click();
    cy.wait(1000); // נוסיף המתנה קלה כדי לוודא שלוש לחיצות
  });

  this.shippingmsg()
    .should('be.visible')
    .should('contain.text', 'Part of your order qualifies for FREE Shipping.'); //כעת נבדוק כי הטקסט השתנה בהתאם
}

romoveitem() {//הכפתור דליט- תפקידו למחוק מוצר- נמחק את המוצרים אחד אחרי השני כדי להתכונן לטסט  הבא 

this.deleteone() 
  .should('be.visible')
  .click();
this.deletetwo()
  .should('be.visible')
  .click();



}
}
