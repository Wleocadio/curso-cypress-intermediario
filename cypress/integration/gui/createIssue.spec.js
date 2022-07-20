/// <reference types="Cypress" />

import data_issue from '../../data/issue.js'

describe('Create Issue', () => {

    //const issue = {
       // title: faker.name.findName(),
       // description: faker.random.words(3),
       // project: {
       //    name: faker.company.bsBuzz(),
       //     description: faker.random.words(5)
       // }

    //}

    var issue  = data_issue.issue()

    beforeEach(() => {
        cy.login() // faz o login antes de executar cada testes
        cy.gui_createProject(issue.project) 
    });
    
    it('successfully', () => {
        cy.gui_createIssue(issue)
        cy.url().should('contain',`${Cypress.config('baseUrl')}root/${issue.project.name}`)
        cy.contains(issue.title).should('be.visible')
        cy.contains(issue.description).should('be.visible')
    });

});