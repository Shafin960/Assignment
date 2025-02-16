class Signup {
    constructor() {
        this.titleMrRadio = '#id_gender1';
        this.titleMrsRadio = '#id_gender2';
        this.nameInput = '[data-qa="name"]';
        this.emailInput = '[data-qa="email"]';
        this.passwordInput = '[data-qa="password"]';
        this.daysSelect = '[data-qa="days"]';
        this.monthsSelect = '[data-qa="months"]';
        this.yearsSelect = '[data-qa="years"]';
        this.newsletterCheckbox = '#newsletter';
        this.specialOffersCheckbox = '#optin';
        this.firstNameInput = '[data-qa="first_name"]';
        this.lastNameInput = '[data-qa="last_name"]';
        this.companyInput = '[data-qa="company"]';
        this.address1Input = '[data-qa="address"]';
        this.address2Input = '[data-qa="address2"]';
        this.countrySelect = '[data-qa="country"]';
        this.stateInput = '[data-qa="state"]';
        this.cityInput = '[data-qa="city"]';
        this.zipcodeInput = '[data-qa="zipcode"]';
        this.mobileNumberInput = '[data-qa="mobile_number"]';
        this.createAccountButton = '[data-qa="create-account"]';
    }

    fillSignupForm() {
        cy.get(this.titleMrRadio).check();
        cy.get(this.nameInput).should('be.visible').clear().type('Md Mushfique Hossain');
        cy.get(this.passwordInput).type('Mushfique3214');
        cy.get(this.daysSelect).select('25');
        cy.get(this.monthsSelect).select('12');
        cy.get(this.yearsSelect).select('1999');
        cy.get(this.newsletterCheckbox).check();
        cy.get(this.specialOffersCheckbox).check();
        cy.get(this.firstNameInput).type('Mushfique');
        cy.get(this.lastNameInput).type('Hossain');
        cy.get(this.companyInput).type('TeleCom'); 
        cy.get(this.address1Input).type('Dhanmondi 15');
        cy.get(this.address2Input).type('Flat B-7, House - 278'); 
        cy.get(this.countrySelect).select('United States');
        cy.get(this.stateInput).type('California');
        cy.get(this.cityInput).type('Los Angeles');
        cy.get(this.zipcodeInput).type('1210');
        cy.get(this.mobileNumberInput).type('01687193003');
        
        cy.get(this.createAccountButton).click();
        
        cy.url().should('include', '/account_created');
    }
}

export default Signup;