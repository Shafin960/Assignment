class Product {
    constructor() {
        this.menCategoryToggle = 'a[href="#Men"]'; 
        this.menPanel = '#Men';                     
        this.jeansLink = '#Men a[href="/category_products/6"]';         
    }

    productsPage(){
        cy.get('a[href="/products"]').click();
    }

    navigateToMenJeans() {
        cy.get(this.menCategoryToggle)
            .should('be.visible')
            .click();

        cy.get(this.menPanel)
            .should('have.class', 'in');  

        cy.get(this.jeansLink)
            .should('be.visible')
            .click();
    }
}

export default Product;