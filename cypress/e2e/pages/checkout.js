class Checkout {
    clickPlaceOrder() {
      cy.get('.btn.btn-default.check_out').click();
    }
    fillPaymentForm() {
        cy.get('input[name="name_on_card"]').type('Mushfique Hossain');
    
        cy.get('input[name="card_number"]').type('4111111111111111'); 
    
        cy.get('input[name="cvc"]').type('123'); 
    
        cy.get('input[name="expiry_month"]').type('12'); 
    
        cy.get('input[name="expiry_year"]').type('30'); 
      }
    
      submitPayment() {
        cy.get('button[data-qa="pay-button"]').click();
      }
    
      verifySuccessMessage() {
        cy.get('h2[data-qa="order-placed"]').should('contain.text', 'Order Placed!');
      }
}
  
export default Checkout;
  