/// <reference types="Cypress" />

import data_project from '../../data/project.js'


describe('Create Project', () => {
   

    beforeEach(() => {
        cy.login()
    });

    it('successfully', () => {
        ////const project = {
          //  name:`project1-${faker.company.bsAdjective()}`,
         //   description:faker.random.words(5)
       // }
       var project = data_project.project()
    
        cy.gui_createProject(project)
        cy.url().should('be.equal',`${Cypress.config('baseUrl')}root/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    });

});