/// <reference types="Cypress" />
//import { faker } from '@faker-js/faker'
import data_issue from '../../data/issue.js'
import data_milestone from '../../data/milestone.js'
describe('Set milestone on issue', () => {
    // const issue = {
    //     title: faker.random.word(),
    //     description: faker.random.words(3),
    //     project: {
    //         name: faker.random.word(),
    //         description: faker.random.words(5)
    //     }
    // }
    // const milestone = {
    //     title: faker.random.word()
    // }
    var issue = data_issue.issue()
    var milestone = data_milestone.milestone()


    beforeEach(() => {
        cy.login()
        cy.api_createIssue(issue)
          .then(response => {
            cy.api_createMilestone(response.body.project_id, milestone)
            cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
          })
          
    })
    it('successfully', () => {
        cy.gui_setMilestoneOnIssue(milestone)

        cy.get('.block.milestone').should('contain', milestone.title)
    });



})