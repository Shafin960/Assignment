import 'cypress-file-upload';
class ContactUs {
    visit() {
        cy.get('a[href="/contact_us"]').click();
    }

    fillContactForm(name, email, subject, message, filePath) {
        cy.get('[data-qa="name"]').type(name);
        cy.get('[data-qa="email"]').type(email); 
        cy.get('[data-qa="subject"]').type(subject); 
        cy.get('[data-qa="message"]').type(message);
        cy.get('input[name="upload_file"]').attachFile(filePath); 
        cy.get('[data-qa="submit-button"]').click(); 
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('Press OK to proceed!');
        });
    }

    verifySubmission() {
        cy.get('.status.alert.alert-success')
            .should('be.visible')
            .and('contain.text', 'Success! Your details have been submitted successfully.');
    }
}

export default ContactUs;
