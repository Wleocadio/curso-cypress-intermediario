/// <reference types="Cypress" />
//import { faker } from '@faker-js/faker'
import data_project from '../../data/project.js'
describe('Create Project', () => {
       it('successfully', () => {
        // const project = {
        //     name:faker.company.bsBuzz(), // utiliza o faker para criar uma nome aleatório
        //     description:faker.random.words(5) // utiliza o faker para criar uma descrição aleatória
        // }
        var project = data_project.project()
        cy.api_createProject(project)
          .then(response => {// recebe o retorno no response
            expect(response.status).to.equal(201) //espera que response.status seja igual ao code 201
            expect(response.body.name).to.equal(project.name) //espera que response.status seja igual ao project.name
            expect(response.body.description).to.equal(project.description) //espera que response.status seja igual ao project.description
          })
    
    });

});