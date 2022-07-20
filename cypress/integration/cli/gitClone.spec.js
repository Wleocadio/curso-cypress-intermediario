/// <reference types="Cypress" />
import data_project from '../../data/project.js'

describe('Git Clone', () => {
    
    var project = data_project.project()

    beforeEach(() => {
        cy.api_createProject(project)
    });

    it('successfully', () => {
        cy.cloneViaSSH(project)

        cy.readFile(`temp/${project.name}/README.md`)
          .should('contain', `# ${project.name}`)
          .and('contain', project.description) 
    });


});