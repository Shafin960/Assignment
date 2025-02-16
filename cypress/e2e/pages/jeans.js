class Jeans {
    viewProduct() {
      cy.get('a[href*="/product_details/33"]').click();
    }
    updateQuantity(quantity) {
      cy.get('input[name="quantity"]').clear().type(quantity);
    }
    addToCart() {
        cy.get('.btn.btn-default.cart').click();
    }
    viewCart() {
        cy.get('p.text-center > a[href="/view_cart"]').click();
    }
    proceedToCheckout() {
        cy.get('.btn.btn-default.check_out').click();
    }
}
  
  export default Jeans;
  