/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import data from '../../data/issue.js'

describe('Create Issue API', () => {
    it('successfuly', () => {
        // const issue = {
        //     title: faker.name.findName(),
        //     description: faker.random.words(3),
        //     project: {
        //         name: faker.company.bsBuzz(),
        //         description: faker.random.words(5)
        //     }    
        // }
        var issue = data.issue()
        
        cy.api_createIssue(issue)
          .then(response =>{
            expect(response.status).to.equal(201)
            expect(response.body.title).to.equal(issue.title)
            expect(response.body.description).to.equal(issue.description)
          })

    });
});