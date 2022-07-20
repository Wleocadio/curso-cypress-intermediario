/// <reference types="Cypress" />

Cypress.Commands.add('login', () =>{

    cy.visit('users/sign_in')

    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'), {log: false})
    cy.get('[data-qa-selector="password_field"]').type(Cypress.env('user_password'), {log: false})
    cy.get('[data-qa-selector="sign_in_button"]').click()


})
Cypress.Commands.add('logout', () =>{

    cy.get('[data-qa-selector="user_menu"]').click()
    cy.get('[data-qa-selector="sign_out_link"]').should('contain', 'Sign out').click()
    

})
Cypress.Commands.add('gui_createProject', project =>{

    cy.get('.page-title-controls .btn').click()
    cy.url().should('be.equal',`${Cypress.config('baseUrl')}projects/new`)
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('#project_initialize_with_readme').check().should('be.checked')
    cy.contains('Create project').click()

})

Cypress.Commands.add ('gui_createIssue', issue =>{

    cy.get('.nav-sidebar [role="button"]').click()
    cy.get('#js-onboarding-issues-link').click()
    cy.get('#new_issue_link').click()
    cy.get('.qa-issuable-form-title').type(issue.title).should('have.value', issue.title)
    cy.get('.qa-issuable-form-description').type(issue.description).should('have.value',issue.description)
    cy.contains('Submit issue').click()
})

Cypress.Commands.add('gui_setLabelOnIssue', label =>{
    cy.get('.qa-edit-link-labels').click()
    cy.contains(label.name).click()
    cy.get('body').click()    
})

Cypress.Commands.add('gui_setMilestoneOnIssue', milestone =>{
    cy.get('.block.milestone .edit-link').click()
    cy.contains(milestone.title).click()
})