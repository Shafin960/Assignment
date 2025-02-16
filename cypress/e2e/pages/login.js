class Login {
    visit() {
      cy.visit("https://automationexercise.com/login");
    }
  
    fillSignUpDetails(name, email) {
      cy.get("[data-qa='signup-name']").type(name);
      cy.get("[data-qa='signup-email']").type(email);
      cy.get("[data-qa='signup-button']").click();
    }
  }
  
  export default Login;
  