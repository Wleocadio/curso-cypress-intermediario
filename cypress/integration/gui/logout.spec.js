/// <reference types="Cypress" />


describe('Logout', () => {
    beforeEach(() => {
        cy.login()
    });
    it('successfully', () => {
        
        cy.logout()
        //cy.get('[data-qa-selector="login_field"]').should('exist')

        cy.url().should('be.equal',`${Cypress.config('baseUrl')}users/sign_in`)
    });

});