/// <reference types="Cypress" />
//import { faker } from '@faker-js/faker'
import data_issue from '../../data/issue.js'
import data_label from '../../data/label.js'
describe('Create Label', () => {
    // const issue = {
    //     title: faker.name.findName(),
    //     description: faker.random.words(3),
    //     project: {
    //         name: faker.company.bsBuzz(),
    //         description: faker.random.words(5)
    //     }
    // }

    // const label = {
    //     name: faker.random.word(),
    //     color: '#ffaabb'
    // }
    var issue = data_issue.issue()
    var label = data_label.label()

    beforeEach(() => {
        cy.login()
        cy.api_createIssue(issue)
          .then(response =>{
            cy.api_createLabel(response.body.project_id, label)
            cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
          })

    });

    it('sucessfylly', () => {
        cy.gui_setLabelOnIssue(label)

        cy.get('.qa-labels-block').should('contain', label.name)
        cy.get('.qa-labels-block span').should('have.attr', 'style', `background-color: ${label.color}; color: #333333;`)
    });
    
});
